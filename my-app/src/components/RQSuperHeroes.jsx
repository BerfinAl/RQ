import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

import Loader from "./Loader";
import Error from "./Error";

import { useSuperherosData } from "../hooks/useSuperherosData";
import { usePaginationItems } from "../hooks/usePaginationItems";

function RQSuperHeroes() {
  const [searchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(searchParams.get("page") || 1);
  const { data, isLoading, isSuccess, isError, isFetching, error } =
    useSuperherosData(pageNum);

  const elementPerPage = 5;
  const totalPages = Math.ceil(data?.amount / elementPerPage);

  const paginationItems = usePaginationItems(totalPages, pageNum, setPageNum);

  const superheroElements = 
    data?.data.length > 0 ? (
      <ul>
        {data.data.map((hero) => (
          <li key={hero.id}>
            <Link to={hero.id}>{hero.name}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No superheroes found.</p>
    );

  return (
    <div>
      {isLoading || isFetching ? (
        <Loader />
      ) : isSuccess ? (
        <>
          <h2>RQ SuperHeroes</h2>
          {superheroElements}
          <Pagination>{paginationItems}</Pagination>
        </>
      ) : isError ? (
        <Error message={error.message} />
      ) : null}
    </div>
  );
}

export default RQSuperHeroes;
