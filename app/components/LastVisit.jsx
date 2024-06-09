import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import useFormatedtime from "../hooks/useFormatedTime";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "./Profile";

const WorkerUrl = import.meta.env.VITE_WORKER_URL;

export default function LastVisit() {
  const { error, data, isPending } = useQuery({
    queryKey: ["geolocation"],
    queryFn: () =>
      axios.get(`${WorkerUrl}api/getlastvisitor`).then((res) => res.data),
  });
  const visitorId = !isPending && data[0].VisitorId;
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const lastTime = useFormatedtime(isPending ? "" : data[0]?.Timestamp);
  const updateLastVisitor = () =>
    axios.get(`${WorkerUrl}api/updatevisitor`).then((res) => res.data);

  const result = useQuery({
    queryKey: ["updateVisitorInfos"],
    queryFn: updateLastVisitor,
    enabled: !!visitorId,
  });

  if (isPending) {
    return (
      <div className="w-36 bg-gray-a1 rounded-3xl py-2 px-4 border border-gray-a2 text-center">
        ...
      </div>
    );
  }
  if (error) {
    return <div className="text-xs text-red-500 ">we have an error here!</div>;
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -5, opacity: 0, scaleX: 0.8, scaleY: 0.9 }}
        animate="Enter"
        variants={variants}
        className="min-w-40 bg-gray-a1 rounded-3xl py-3 px-4 border border-gray-a2"
      >
        <p className="text-xs text-gray-i1 text-end mb-3">{lastTime}</p>
        <p className="text-xs text-gray-i1 mb-1">Recent visit</p>
        <p className="text-xs font-semibold">
          {regionNames.of(data[0]?.Country)} | {data[0]?.Region}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
