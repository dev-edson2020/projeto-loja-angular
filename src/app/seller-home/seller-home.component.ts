import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-types';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | Product[];
  productMessage: undefined | string;
  icon = faTrash;
  editIcon = faEdit;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
   this.list();
  }

  list(){
    this.product.productList().subscribe((result: any) => {
      if (result) {
        this.productList = result;        
      }
    });
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Produto excluido com sucesso!";
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

}
