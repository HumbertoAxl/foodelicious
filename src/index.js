import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Recipe from "./pages/Recipe/Recipe.jsx";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme  = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1b9823",
    },
    secondary: {
      main: "#b13fb1",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/recipe/:id", element: <Recipe/>}
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();