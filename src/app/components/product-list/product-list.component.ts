// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../../services/product.service';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Product } from '../../models/product.model';
// import * as ProductActions from '../../store/product/product.actions';
// import * as fromProduct from '../../store/product/product.selectors';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products$: Observable<Product[]>;

//   constructor(private store: Store, private productService: ProductService) {
//     this.products$ = this.store.select(fromProduct.selectAllProducts);
//   }

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(products => {
//       this.store.dispatch(ProductActions.loadProductsSuccess({ products }));
//     });
//   }

//   deleteProduct(id: number): void {
//     this.productService.deleteProduct(id).subscribe(() => {
//       this.store.dispatch(ProductActions.deleteProduct({ id }));
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';  // Import Store
import { Observable } from 'rxjs';
import * as fromProduct from  '../../store/product/product.selectors';  // Import selectors
import { loadProducts } from '../../store/product/product.actions';  // Import actions

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(private store: Store) {  // Inject the store
    // Select products from the store
    this.products$ = this.store.select(fromProduct.selectAllProducts);
  }

  ngOnInit(): void {
    // Dispatch action to load products
    this.store.dispatch(loadProducts());
  }
}

