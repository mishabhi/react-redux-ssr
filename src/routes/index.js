import Home from "../pages/home";
import Movies from "../pages/movies";
import Series from "../components/series";

export default [
    {
        path: ["/", "/home"],
        component: Home,
        exact: true,
    },
    {
        path: "/movies",
        component: Movies,
        exact: true,
    },
    {
        path: "/series",
        component: Series,
        exact: true,
    }
];


