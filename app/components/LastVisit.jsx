import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from "react-query";
import GetGeo from '../utils/getIp'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseUrl = 'https://wqcevgxpfuewrkyuntgo.supabase.co'
const supabase = createClient(supabaseUrl, supabaseKey)


export default function LastVisit() {
  const [Ip, setIP] = useState("");
  const [info, setInfo] = useState("");
  //the following ip need to be fetched from user browser
  
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // console.log('axios request',res.data);
    setIP(res.data.ip);
    const res2 = await GetGeo(res.data.ip);
    setInfo(res2)
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  

  // console.log('info :', info)
 
  const res = useQuery('ip', () => supabase.from('location').select('*'))
  
  if(res.status == 'error'){
    return <div>Error</div>
  }
  if(res.status == 'loading'){
    return(
      <div>
     Loading...
    </div>
  )
}
 
    // const ip = res.data.data[0].ip
    return(
    <div>
      <h6 className="text-2xl text-gray-500 ">
      {info.timezone}
      </h6>
    </div>
    )
}


