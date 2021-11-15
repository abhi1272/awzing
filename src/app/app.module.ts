import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import { ProductListViewComponent } from './product/product-list-view/product-list-view.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductListViewComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', component:HomeComponent,pathMatch:'full'},
      {path: 'about', component:AboutComponent},
      {path: 'product', component:ProductComponent},
      {path: 'contact', component:ContactComponent,canActivate:[AuthGuard]},
      {path: 'product-list', component:ProductListViewComponent},
      {path: 'signup', component:SignupComponent},
      {path: 'login', component:LoginComponent},
      {path: "**", component:NotFoundComponent}
        ])
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
