import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function DetailedPage(props) {
  const { id } = useParams();
  const { isLoading, data, isError, error, isFetching } = useQuery(["reviewsbyid", id], () => {
    return axios.get(`http://localhost:4444/reviews/${id}`);
  });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return <div>DetailedPage - {data.data.comment}</div>;
}

export default DetailedPage;
