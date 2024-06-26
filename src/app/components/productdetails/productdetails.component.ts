import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  product: any[] = [];
  filteredProduct: any;
  
   productId =parseInt( this.route.snapshot.params['id']);
  // productId:any;
  // product: any;
 
 

  constructor(private route: ActivatedRoute,private router: Router,private productService:ProductsService){}
  ngOnInit(): void {
   this.getProducts()
   
  }
  getProducts(){
   this.productService.getProducts().subscribe(response => {
      this.product = response;
       // const productId = this.route.snapshot.params['id'];
       // this.productService.getProducts().forEach(product => {
         // this.product=product;
      
     
      this.filterProductById(this.productId);
      
     });
   
  
  }
  filterProductById(id: any): void {
    console.log(" this.product",this.product)
    console.log("productId",typeof(this.productId))
    this.filteredProduct = this.product.filter(products => products.id === this.productId);

  console.log(this.filteredProduct)

  }
 
}
  
