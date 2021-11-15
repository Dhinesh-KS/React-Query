import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function RQReviews(props) {
  const onSuccess = (res) => {
    console.log("Success", res);
  };
  const onError = (err) => {
    console.log("Error", err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "reviews",
    () => {
      return axios.get("http://localhost:4444/reviews");
    },
    {
      onSuccess: onSuccess,
      onError: onError,
      select: (data) => {
        const filteredData = data.data.map((item) => item.comment);
        return filteredData;
      },
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <button onClick={refetch}>Fetch</button>
      </div>
    </>
  );
}

export default RQReviews;
