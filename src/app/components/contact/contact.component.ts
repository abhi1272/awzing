import { Component, OnInit } from '@angular/core'


import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { ProductService } from 'src/app/modules/product/services/product.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  Name
  Email
  Phone
  Message
  constructor(public productService: ProductService,
              public router: Router, public toast: ToastrService) {
    console.log('contact constructor called')
  }

  ngOnInit(): void {
  }


  sendMessage(): void {

    this.toast.success('Thanks for contacting us')
    this.router.navigate(['/home'])
  }

}
