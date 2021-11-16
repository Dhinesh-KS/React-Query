import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4444/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4444/friends");
};

export const ParallelQueries = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  console.log(superHeroes, friends);
  return <div>Parallel Queries</div>;
};

export default ParallelQueries;
