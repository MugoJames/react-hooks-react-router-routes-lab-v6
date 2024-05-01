
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
},
{
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
},
{
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
},
{
    path: "/movie",
    element: <Movie />,
    errorElement: <ErrorPage />
},
{
    path: "/movie/:movieId",
    element: <Movie />,
    errorElement: <ErrorPage />
}
  ];

export default routes;
