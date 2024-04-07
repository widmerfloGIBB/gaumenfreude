import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {HeaderComponent} from "./components/header/header.component";

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'header', component: HeaderComponent }
];
