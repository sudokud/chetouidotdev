import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
const WorkerUrl = import.meta.env.VITE_WORKER_URL;

export default function LastVisit() {
  const [visitorGeoInfo, setVisitorGeoInfo] = useState({});
  async function  fetchVisitorGeo () {
  const response = await axios.get(`${WorkerUrl}api/getlastvisitor`);
  console.log('response',response)
  setVisitorGeoInfo(response.data)
}
  const visitorGeo = useQuery({ queryKey: ['Geos'], queryFn: fetchVisitorGeo })

  // if (visitorGeo.status == "error") {
  //   return <div>Error</div>;
  // }
  if (visitorGeo.status == "loading") {
    return <div className="text-2xl text-gray-500 ">...</div>;
  }
  return (
    <div>
      <h2 className="text-2xl text-zinc-700 ">
        Wow a visitor from {visitorGeoInfo.country} {visitorGeoInfo.region}
      </h2>
    </div>
  );
}
