import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: undefined | Product[];

  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    const query = this.activeRoute.snapshot.paramMap.get(`query`);
    if (query) {
       this.product.searchProducts(query).subscribe(
           (result) => {
               this.searchResult = result;
               console.log(this.searchResult);
           },
           (error) => {
               console.error('Erro ao buscar produtos:', error);
           }
       );
    }
}


}
