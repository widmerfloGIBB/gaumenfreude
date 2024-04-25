import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {HeaderComponent} from "./components/header/header.component";
import {DetailViewComponent} from "./pages/detail-view/detail-view.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";
import {SupplierDetailViewComponent} from "./pages/supplier-detail-view/supplier-detail-view.component";
import {SupplierEditComponent} from "./pages/supplier-edit/supplier-edit.component";
import {ProductCreateComponent} from "./pages/product-create/product-create.component";
import {SupplierCreateComponent} from "./pages/supplier-create/supplier-create.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent },
  { path: 'detail/:id', component: DetailViewComponent },
  { path: 'supplier-detail/:id', component: SupplierDetailViewComponent},
  { path: 'product-edit/:id', component: ProductEditComponent},
  { path: 'supplier-edit/:id', component: SupplierEditComponent},
  { path: 'product-create', component: ProductCreateComponent},
  { path: 'supplier-create', component: SupplierCreateComponent},
  { path: 'header', component: HeaderComponent }
];
