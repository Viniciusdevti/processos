import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/pages/login";
import Processo from "./pages/processos";
import Editar from "./pages/processos/editar";



export default function  Routes() {
  return (
     
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/processo" exact component={Processo} />
        <Route path="/editar" exact component={Editar} />
      
      
      </Switch>
    
  );
}