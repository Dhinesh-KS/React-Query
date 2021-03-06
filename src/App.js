import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import Home from "./app/Home";
// import Products from "./app/Products";
// import RQReviews from "./app/RQReviews";
import loadable from "@loadable/component";
import "./sass/app.scss";
import "./index.css";

//Roue based code splitting
const Home = loadable(() => import("./app/Home"), {
  fallback: <h1>Loading...</h1>,
});
const Products = loadable(() => import("./app/Products"), {
  fallback: <h1>Loading...</h1>,
});
const RQReviews = loadable(() => import("./app/RQReviews"), {
  fallback: <h1>Loading...</h1>,
});
const DetailedPage = loadable(() => import("./app/DetailedPage"), {
  fallback: <h1>Loading...</h1>,
});
const ParallelQueries = loadable(() => import("./app/ParallelQueries"), {
  fallback: <h1>Loading...</h1>,
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product-category">Product Category</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/parallelqueries">Parallel Queries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-category" element={<Products />} />
            <Route path="/reviews" element={<RQReviews />} />
            <Route path="/reviews/:id" element={<DetailedPage />} />
            <Route path="/parallelqueries" element={<ParallelQueries />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
export default hot(module)(App);
