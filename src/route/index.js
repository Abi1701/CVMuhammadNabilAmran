import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../pages/landingPage/index";

export default function Router(){
  return(
    <Routes>
      <Route path="/" index element = {<Page1 />}/>
    </Routes>
  )
}