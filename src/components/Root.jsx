import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
;
//https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/