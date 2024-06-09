import { useState, useEffect } from 'react';

const formatTime = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  const strTime = `${hours}:${minutesStr} ${ampm}`;
  return strTime;
};

const useFormattedTime = (dateString) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    setFormattedTime(formatTime(dateString));
  }, [dateString]);

  return formattedTime;
};

export default useFormattedTime;
