import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'create', component: ProductCreateComponent },
    // Add other routes like 'edit' and 'delete'
  ];
