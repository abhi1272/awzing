import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductComponent } from './product.component'
import { ProductRoutingModule } from './product-routing.module'
import { RouterModule } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductViewComponent } from './components/product-view/product-view.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../material/angular-material.module';
import { ProductFolderComponent } from './components/product-folder/product-folder.component'



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductFolderComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
