// import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
import { router } from "./router";
import Login from "./pages/Login";


function App() {
  return (
    <>
      {/* <h1>HEADER</h1> */}
      <RouterProvider router={router} fallbackElement={<h1>Loading....</h1>} />
      {/* <Login /> */}
    </>
  );
}

export default App;
