import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList
  caterGoryList = []
  category: string
  categories
  constructor(public authService: AuthService,
              public productService: ProductService, public dialog: MatDialog,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
