import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { useState, useContext } from 'react';


import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// import Grocery from "./components/Grocery";

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On demand Loading
// dynamic import

import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Praveen Tomar",
        };
        setUserName(data.name);
    }, []);

    return (
        // if you want to use redux store in small part of the app then provide that only there where required
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>,
                //fallback is used to show something when code is not available , You can shpw Shimmer UI here
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurentMenu />

            },
            {
                path: "/cart",
                element: <Cart />
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
