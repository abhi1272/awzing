import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-folder',
  templateUrl: './product-folder.component.html',
  styleUrls: ['./product-folder.component.scss']
})
export class ProductFolderComponent implements OnInit {

  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  constructor() { }

  ngOnInit(): void {
  }

}
