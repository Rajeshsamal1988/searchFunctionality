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
  products: any[] = [];
  filteredProduct: any;
  productId:any;
  product: any;
 
 

  constructor(private route: ActivatedRoute,private productService:ProductsService){}
  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    console.log("id",productId);

   this.productService.getProducts().forEach(product => {
    this.product=product;
    const result = this.product.filter((x:any) => x.id === this.productId);
    return result;


})
// console.log("res",this.result)

 
  }}