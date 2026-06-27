import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => Promise.resolve(genres),
    staleTime: Infinity,
  });

  return { data: data || [], isLoading, error: error?.message || "" };
};

export default useGenres;