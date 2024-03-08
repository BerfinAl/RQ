import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import { useSuperherosData } from "../hooks/useSuperherosData";
import { Link } from "react-router-dom";

function RQSuperHeroes() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetched,
    refetch,
    isFetching,
  } = useSuperherosData();

  const superheroesList = data?.data.map((hero) => {
    return (
      <li key={hero.id}>
        <Link to={hero.id}>{hero.name}</Link>
      </li>
    );
  });

  return (
    <div>
      {/* {!isFetched && (
        <button onClick={refetch}>Get Superheros here right away!!</button>
      )} */}
      {isLoading || isFetching ? (
        <Loader />
      ) : isSuccess ? (
        <>
          <h2>RQ SuperHeroes</h2>
          <ul>{superheroesList}</ul>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default RQSuperHeroes;
