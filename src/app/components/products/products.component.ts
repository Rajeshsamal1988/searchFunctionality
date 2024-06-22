import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit,inject } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from '../../search.pipe';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,ReactiveFormsModule,FormsModule, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  product: any;
  searchtext:any;

  constructor(private productService: ProductsService){}
 ngOnInit(): void {
   this.productService.getProducts().forEach(product => {
    this.product=product;
    console.log(this.product)
   })

 }

}


