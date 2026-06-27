import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error, isLoading } = useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => Promise.resolve(platforms),
    staleTime: Infinity,
  });

  return { data: data || [], isLoading, error: error?.message || "" };
};

export default usePlatforms;
