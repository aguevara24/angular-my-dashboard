import { Component } from '@angular/core';
import { routes } from "../../app.routes";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes( ':' ) );
  constructor() {

    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes( ':' ) );
    //
    // console.log( dashboardRoutes );

  }

}
