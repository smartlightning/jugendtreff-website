import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (isMounted) { // Update state only if the component is still mounted
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) { // Update state only if the component is still mounted
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
