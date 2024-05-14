import axios from "axios";
import { useQuery } from "react-query";
const WorkerUrl = import.meta.env.VITE_WORKER_URL;

export default function LastVisit() {

  async function getVisitorInfos() {
    return await axios.get(`${WorkerUrl}api/getlastvisitor`);
  }
  async function updateVisitorInfos() {
    return await axios.get(`${WorkerUrl}api/updatevisitor`);
  }

  const {isLoading, data} = useQuery({
    queryKey: ["geolocation"],
    queryFn: getVisitorInfos,
  });
  // if(!isLoading){
  //   console.log("data from get visitor infos", data);
  // }
  const country = data?.data[0].Country

  const result = useQuery({
    queryKey: ["updateVisitorInfos"],
    queryFn: updateVisitorInfos,
    enabled: !!country,
  });
// console.log('result of update :', result)
  // if (visitorGeo.status == "error") {
  //   return <div>Error</div>;
  // }
  if (isLoading) {
    return <div className="text-2xl text-gray-500 ">...</div>;
  }
  return (
    <div>
      <h2 className="text-xs text-gray-43 ">
        last visit from {data.data[0].Country} | {data.data[0].Region}
      </h2>
    </div>
  );
}
