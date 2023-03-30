import React from "react";
import { Outlet,Link } from "react-router-dom";
import {Hr, Icon, Ul, Nav, A, Article} from "./Menu-elemnt";
//import List from "./List";

//const gif = lazy(()=>import("../Spinner-1s-200px.svg"))




function Menu({className}){
  return <Article>
     <Nav>
      <Hr/>
    <Ul>
      <Icon>
        <Link className="link" to="/Mapa">Mapa
        <ion-icon class="location-outline"  name="location-outline"></ion-icon>
        </Link>
      </Icon>
      <Icon>
      <Link className="link"   to="/List">Lista de casas
      <ion-icon  className="ion-icon"  name="layers-outline"></ion-icon>
      </Link>
      </Icon>
      <Icon>
        <Link className="link" to="/acercade">Acerca de
        <ion-icon class="menu-outline" name="menu-outline"></ion-icon>
        </Link>
      </Icon>
    </Ul>
   </Nav>
   <Outlet></Outlet>
  </Article>
}

export default Menu;
