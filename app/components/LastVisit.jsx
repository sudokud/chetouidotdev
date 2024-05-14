import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
const WorkerUrl = import.meta.env.VITE_WORKER_URL;

export default function LastVisit() {
  const [visitorGeoInfo, setVisitorGeoInfo] = useState({});

  async function  fetchVisitorGeo () {
  const response = await axios.get(`${WorkerUrl}api/getlastvisitor`);
  const info = response.data[0]
  setVisitorGeoInfo(info)
}
async function  postVisitorGeo () {
  const response = await axios.get(`${WorkerUrl}api/updatevisitor`);
  const info = response.data.success
  console.log('', info)
}
  const visitorGeo = useQuery({ queryKey: ['getVisitorGeos'], queryFn: fetchVisitorGeo })
  const updateVisitorGeo = useQuery({ queryKey: ['updateVisitorGeos'], queryFn: postVisitorGeo })
  console.log('update visitor geo status',updateVisitorGeo.status)
  if (visitorGeo.status == "error") {
    return <div>Error</div>;
  }
  if (visitorGeo.status == "loading") {
    return <div className="text-2xl text-gray-500 ">...</div>;
  }
  return (
    <div>
      <h2 className="text-xs text-gray-43 ">
        last visit from {visitorGeoInfo.Country} | {visitorGeoInfo.Region}
      </h2>
    </div>
  );
}
