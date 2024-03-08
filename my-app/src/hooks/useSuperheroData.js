import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchSuperHeroDetail({queryKey}) {

const superheroID = queryKey[1]
  try {
    const resp = await axios.get(
      `http://localhost:4000/superheroes/${superheroID}`
    );
    onSuccess();
    return resp;
  } catch (err) {
    onError();
  }
}

function onSuccess() {
  console.log("Perform side effect after data fetching");
}

function onError() {
  console.log("Perform side effect after encountering error");
}

export function useSuperheroData(superheroID) {
  return useQuery({
    queryKey: ["superhero", superheroID],
    queryFn: fetchSuperHeroDetail,
    // default cacheTiem is 5 minute
    // staleTime: 30000, // refetch için ne kadar beklemeli?
    // default stale time is 0
    // default => refetchOnMount : true
    // default => refetchOnWindowFocus: true
    // refetchInterval: 2000 => This is called polling and very important
    // for continious data fetching when the data is being
    // updated often, like döviz kuru. It is by default stops
    // when window loses its focus
    // refetchIntervalInBackground : true
    //  enabled: false,
    // select: (data) => {
    //   const superheroNames = data?.data?.map(hero => hero.name)
    //   return superheroNames
    // } // you can also use to filter data!!!
  });
}
