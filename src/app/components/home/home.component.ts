import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30,
31, 32, 33, 34, 35, 36, 37, 38, 39]
apiData
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  navText: ['', ''],
  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
  constructor(public dialog: MatDialog,
              public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.fetch()
  }

  fetch(): void {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${100}`;
    const http$ = this.http.get(api)

    http$.subscribe(
      (res) => {
        console.log(res)
        this.apiData = res
      }
    )
  }
}
