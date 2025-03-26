import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from '../product/product.reducer';  // Import your product reducer

export interface AppState {
  products: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProduct.productReducer,  // Register productReducer in the AppState
};