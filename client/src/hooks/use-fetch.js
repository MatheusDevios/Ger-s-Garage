import { useCallback, useState } from "react";

const useFetch = () => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  });

  const fetchData = useCallback(async (requestConfig) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      //   console.log(response);
      if (!response.ok) {
        throw new Error("Error fetching data.");
      }

      const data = await response.json();
      // console.log(data);

      if (data) {
        setFetchedData({
          data: data,
          isLoading: false,
          error: false,
        });
      }
    } catch (err) {
      // console.log(err);
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      });
    }
    // console.log(data);
  }, []);

  const { data, isLoading, error } = fetchedData;
  return { data, isLoading, error, sendRequest: fetchData };
};

export default useFetch;
