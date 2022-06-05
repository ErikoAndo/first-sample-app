import { Component, OnInit } from '@angular/core';
import { ProductSevice } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any

  constructor(private productService: ProductSevice) { }

  ngOnInit(): void {
    const productsObservable  = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => { 
        this.products = data;
        console.log('got value ' + data); 
      },
      (err) => { console.error('something wrong occurred: ' + err); }
    )
  }

}
