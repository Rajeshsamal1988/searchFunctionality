import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';



@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute,
    private productService:ProductsService
   ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      console.log(id)
    });
   
  }
  
}
