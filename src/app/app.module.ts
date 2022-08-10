import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './modules/material/angular-material.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ErrorInterceptor } from './interceptors/error.interceptor'
import { JwtInterceptor } from './interceptors/jwt.interceptor'
import { ToastrModule } from 'ngx-toastr'
import { HomeComponent } from './components/home/home.component'
import { AuthModule } from './modules/auth/auth.module'
import { ProductModule } from './modules/product/product.module'
import { ContactComponent } from './components/contact/contact.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress'
import { AutocompleteLibModule } from 'angular-ng-autocomplete'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { RouterModule } from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    AuthModule,
    ProductModule,
    AutocompleteLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    NgxImageCompressService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
