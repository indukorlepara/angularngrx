import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
//   loadProducts$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ProductActions.loadProducts),
//       mergeMap(() =>
//         this.productService.getAll().pipe(
//           map((products) =>
//             ProductActions.loadProductsSuccess({ products })
//           )
//         )
//       )
//     );
//   });

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store
  ) {}
}
