import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Information from "../pages/Information";

export let router = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/information",
        element: <Information />
    }
]