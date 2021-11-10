import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export function RQReviews(props) {
  const { isLoading, data } = useQuery("reviews", () => {
    return axios.get("http://localhost:4444/reviews");
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
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
