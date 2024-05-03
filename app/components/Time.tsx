import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useInterval } from "@reactuses/core";

export default function Time() {
  const date = new Date();
  const ss = date.getSeconds()
  const mm = date.getMinutes()
  const hh = date.getHours()
  const [seconds, setSeconds] = useState(ss)
  const [minutes, setMinutes] = useState(mm)
  const [hours, setHours] = useState(hh)

  useInterval(() => {
    const date = new Date();
    const ss = date.getSeconds()
    const mm = date.getMinutes()  
    const hh = date.getHours()  
    setSeconds(ss);
    setMinutes(mm);
    setHours(hh);
  }, 1000);

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <span>
        <p 
          className=" clock py-2 w-28 flex justify-center "
          >
            {hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds :`0${seconds}`}
        </p>
      </span>
    );
  }
