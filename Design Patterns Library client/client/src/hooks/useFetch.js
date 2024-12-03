import { useState, useEffect } from 'react';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`;

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${path}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [path]);

  return { data, isLoading, error, refetch: fetchData };
};

export default useFetch;