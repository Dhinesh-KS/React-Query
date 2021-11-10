import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function RQReviews(props) {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "reviews",
    () => {
      return axios.get("http://localhost:4444/reviews");
    },
    { cacheTime: 5000 }
  );
  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.data.map((item, index) => {
          return <div key={index}>{item.comment}</div>;
        })}
      </div>
    </>
  );
}

export default RQReviews;
