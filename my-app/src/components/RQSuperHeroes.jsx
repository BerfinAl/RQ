import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Loader from './Loader'
import Error from './Error'
import axios from 'axios'



function RQSuperHeroes() {

  async function fetchSuperHeros() {
    try {
      const resp = await axios.get("http://localhost:4000/superheroes")
      onSuccess()
      return resp
    }
    catch (err) {
      onError()
    }
    throw new Error()
  }

  function onSuccess() {
    console.log("Perform side effect after data fetching")
  }

  function onError() {
    console.log("Perform side effect after encountering error")
  }

  const { data, isLoading, isSuccess, isError, isFetched, refetch, isFetching } = useQuery({
    queryKey: ["superheros"],
    queryFn: fetchSuperHeros,
    // default cacheTiem is 5s
    // staleTime: 30000, // refetch için ne kadar beklemeli?
    // default stale time is 0
    // default => refetchOnMount : true
    // default => refetchOnWindowFocus: true
    // refetchInterval: 2000 => This is called polling and very important 
    // for continious data fetching when the data is being
    // updated often, like döviz kuru. It is by default stops
    // when window loses its focus
    // refetchIntervalInBackground : true
    enabled: false,
    select: (data) => {
      const superheroNames = data?.data?.map(hero => hero.name)
      return superheroNames
    } // you can also use to filter data!!!
  })

  const superheroesList = data?.map(hero => {
    return <li key={hero}>{hero}</li>
  })




  return (
    <div>
      {isLoading || isFetching && <Loader />}
      {isError && <Error />}
      {!isFetched && <button onClick={refetch}>Get Superheros here right away!!</button>}
      {isSuccess && <>
        <h2>RQ SuperHeroes</h2>
        <ul>
          {superheroesList}
        </ul>
      </>}
    </div>
  )
}

export default RQSuperHeroes