// testing things out with the geolocation API
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
// transform GetGeo to React Hook
import GetGeo from "../utils/getIp";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LastVisit() {
  const [Ip, setIP] = useState("");
  const [info, setInfo] = useState({});
  //the following ip need to be fetched from user browser

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    //pass res.data.ip directly to GetGeo function instead of getting it from state hook
    setIP(res.data.ip);
    const res2 = await GetGeo(res.data.ip);
    setInfo(res2);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  // const res = useQuery("ip", () => supabase.from("location").select("*"));

  // if (res.status == "error") {
  //   return <div>Error</div>;
  // }
  // if (res.status == "loading") {
  //   return <div className="text-2xl text-gray-500 ">...</div>;
  // }
  return (
    <div>
      <h2 className="text-2xl text-zinc-600 ">
        Wow a visitor from {info.timezone}!
      </h2>
    </div>
  );
}
