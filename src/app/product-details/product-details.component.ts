import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | Product;
  productQuantity: number = 1;
  quantity: number = 1;

  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    if (productId) {
      productId && this.product.getProduct(productId).subscribe(
        (result) => {
          this.productData = result;
          console.log(this.productData);
        },
        (error) => {
          console.error('Erro ao buscar produtos:', error);
        }
      );
    }
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else {
      if (this.productQuantity > 1 && val === 'min') {
        this.productQuantity -= 1;
      }
    }
  }

}
