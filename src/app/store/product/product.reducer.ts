import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: Product[];
  error: string;
}

export const initialState: ProductState = {
  products: [],
  error: ''
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  })),
  on(ProductActions.updateProduct, (state, { product }) => ({
    ...state,
    products: state.products.map(p =>
      p.id === product.id ? { ...p, ...product } : p
    )
  })),
  on(ProductActions.deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id)
  }))
);
