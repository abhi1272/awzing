import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../auth/services/auth.service'
import { ProductService } from './services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39]
  caterGoryList = []
  category: string
  categories
  products
  setFilterValue
  displayedColumns: string[] = ['id', 'product_name', 'composition' , 'pack', 'mrp']
  dataSource!: MatTableDataSource<any>
  constructor(public authService: AuthService,
              public productService: ProductService, public dialog: MatDialog,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductlistData()
  }

  getProductlistData(): any{
    this.productService.getProductList().subscribe((data) => {
      console.log('data', data)
      this.products = data
      this.dataSource = new MatTableDataSource(this.products)
    })
  }

  applyFilter(event?: Event): void {
    let filterValue
    if (!event) {
      filterValue = this.setFilterValue
    } else {
      filterValue = (event.target as HTMLInputElement).value
      this.setFilterValue = filterValue
    }
    this.dataSource.filter = filterValue && filterValue.trim().toLowerCase()
  }

}
