import { useState, useEffect } from 'react';

const useTimeDifference = (dbTimestamp) => {
  const [timeDifference, setTimeDifference] = useState(() => {
    // Initial calculation of the time difference in hours
    const currentTime = new Date();
    const differenceInMilliseconds = currentTime - new Date(dbTimestamp);
    return differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
  });

  useEffect(() => {
    // Function to calculate the time difference in hours
    const calculateTimeDifference = () => {
      const currentTime = new Date();
      const differenceInMilliseconds = currentTime - new Date(dbTimestamp);
      const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
      setTimeDifference(differenceInHours);
    };

    // Calculate the time difference when the component mounts or dbTimestamp changes
    calculateTimeDifference();
  }, [dbTimestamp]);

  return timeDifference;
};

export default useTimeDifference;
