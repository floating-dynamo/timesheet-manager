import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

function useFetch<TResponse>({
  url,
  config,
  reRender,
}: {
  url: string;
  config?: AxiosRequestConfig;
  reRender?: boolean;
}) {
  const [data, setData] = useState<TResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    axios<TResponse>(url, config)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(config), reRender]);

  return { data, isLoading, error };
}

export default useFetch;
