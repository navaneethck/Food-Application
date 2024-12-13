import React, {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./componants/Header";
import Body from "./componants/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componants/About";
import Contact from "./componants/contact";
import Error from "./componants/error";
import RestaurantMenu from "./componants/RestaurantMenu";
import Shimmer from "./componants/shimmer";
import Trial from "./componants/traial";

// import Grocery from "./componants/Grocery";

// const parent = React.createElement ("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"iam an h1"),
//         React.createElement("h2",{},"iam an h2"),
//     ])
// ])
// console.log(parent)
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

//React element
// const heading = <h1 className="head" tabIndex="2" >Namaste react using JSX</h1>

// //React functional component
// const Heading1 = ()=>{
//     return <h1 className = "heading">Namaste react functional componant</h1>;
// };

const Grocery = lazy(()=>import("./componants/Grocery"))
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/count",
        element: <Trial />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}> <Grocery /></Suspense> ,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
