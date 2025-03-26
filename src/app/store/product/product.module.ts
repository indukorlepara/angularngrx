// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { StoreModule } from '@ngrx/store';  // Import StoreModule for feature
// import { productReducer } from '../product/product.reducer';  // Product reducer

// @NgModule({
//   imports: [
//     CommonModule,
//     StoreModule.forFeature('products', productReducer),  // Register 'products' feature reducer
//   ],
//   declarations: []
// })
// export class ProductModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';  // Import StoreModule for feature state
  // Import your components
import { productReducer } from '../product/product.reducer';  // Import product reducer
import { ProductListComponent } from '../../components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,  // Declare the ProductListComponent here
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productReducer),  // Register the 'products' state feature
  ]
})
export class ProductModule { }