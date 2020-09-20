import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/pages/login";
import Processo from "./pages/processos";



export default function  Routes() {
  return (
     
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/processo" exact component={Processo} />
      
      
      </Switch>
    
  );
}