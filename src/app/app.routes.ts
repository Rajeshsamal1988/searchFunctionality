import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { DatatransferComponent } from './components/datatransfer/datatransfer.component' ;
export const routes: Routes = [
   
    {path:'products',component:ProductsComponent},
    {path:'datatransfer',component:DatatransferComponent},
    {path: 'product/:id', component: ProductdetailsComponent},
    {path: '',redirectTo: '/ProductsComponent', pathMatch: 'full' },

];
