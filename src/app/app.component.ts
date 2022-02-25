import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { LoginComponent } from './modules/auth/components/login/login.component'
import { AuthService } from './modules/auth/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Awzing'
  user
  isCollapsed
  products = []
  keyword = 'medicine_name'
  constructor(public dialog: MatDialog,
              public authService: AuthService, public router: Router){}

  ngOnInit(): void{
    this.authService.user = JSON.parse(localStorage.getItem('user'))
  }

  public openLogin(): void {
    this.dialog.open(LoginComponent, {
      data: {}
    })
  }

  public logout(): void{
    this.router.navigate(['/home'])
    this.authService.user = null
  }

}
