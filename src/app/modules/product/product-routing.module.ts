import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from 'src/app/guards/auth.guard'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductViewComponent } from './components/product-view/product-view.component'
import { ProductComponent } from './product.component'

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product/:id',
    component: ProductViewComponent
  },
  {
    path: 'medicine/:id',
    component: ProductViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
