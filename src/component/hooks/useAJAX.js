import { fetcher } from "config/config";
import useSWR from "swr";

export const useAJAX = function (url) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return [data, error, isLoading];
};
