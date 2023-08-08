import { useQuery } from "react-query";

function usePositionChartQuery(nickname) {
  return useQuery({
    queryKey: ["positionchart", nickname],
    queryFn: async () => {
      const res = await fetch(`/api/getRecentPosition/${nickname}`);
      const json = await res.json();
      return json;
    },
    placeholderData: {
      tanker: 0,
      melee: 0,
      range: 0,
      supporter: 0,
    },
  });
}

export default usePositionChartQuery;
