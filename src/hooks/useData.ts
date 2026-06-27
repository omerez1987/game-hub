import { QueryKey, useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig: AxiosRequestConfig,
  queryKey: QueryKey
) => {
  const { data, error, isLoading } = useQuery<T[], Error>({
    queryKey,
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then((res) => res.data.results),
  });

  return { data: data || [], error: error?.message || "", isLoading };
};

export default useData;