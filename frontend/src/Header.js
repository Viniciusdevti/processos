import React from 'react';
import { Link } from "react-router-dom";
import "./global.css"


export default function Header() {




    return (



      <div>

      <nav>
        <div className="nav-wrapper blue lighten-2">

          <Link to="/" className="brand-logo "> <i className="material-icons">style</i> GPROCESS </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down ">
       
         
      
      
            <li><Link to="/processo">Processos</Link></li>
            <li><Link to="/##">Cadastro</Link></li>
           
            <div class="chip  blue lighten-5">
              
              <img src="https://avatars2.githubusercontent.com/u/51270707?s=400&u=e105c56f2c85baa9196811b779311d867a158d60&v=4" alt="Contact Person"></img>
                 Vinícius A
               </div>
              
               
            
             

          </ul>
          

        </div>
      </nav>

    </div>





    );
}

