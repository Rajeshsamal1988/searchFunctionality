import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService ,Product} from '../../products.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  // product: any;
  productsIdList:any;

  product: Product | undefined;
  productId: number | null = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private productService:ProductsService
   ){}
  ngOnInit(): void {
  
this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  if (id) {
    this.productId = +id;
    this.fetchProduct();
  }
});
  }
  fetchProduct(): void {
    if (this.productId !== null) {
      this.productService.getProductById(this.productId).subscribe({
        next: (data) => this.product = data,
        error: (error) => this.errorMessage = 'Could not fetch product details'
      });
      console.log(this.product)
    }
  }
  }
