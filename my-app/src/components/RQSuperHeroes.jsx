import React, { useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import { useSuperherosData } from "../hooks/useSuperherosData";
import { Link, useSearchParams } from "react-router-dom";

function RQSuperHeroes() {
  let [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  const [pageNum, setPageNum] = useState(page);

  const { data, isLoading, isSuccess, isFetching, refetch } =
    useSuperherosData(pageNum);

  const superheroesList = data?.data.map((hero) => {
    return (
      <li key={hero.id}>
        <Link to={hero.id}>{hero.name}</Link>
      </li>
    );
  });


  const elementPerPage = 5;

  const paginationItem = data?.amount / elementPerPage;


  const prevPage = () => {
    return setPageNum((prev) => Number(prev) - 1);
  };

  const nexrPage = () => {
    return setPageNum((prev) => Number(prev) + 1);
  };

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
          <button onClick={prevPage} disabled={1 === pageNum}>Prev</button>
          <button onClick={nexrPage} disabled={paginationItem === pageNum}>Next</button>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default RQSuperHeroes;
