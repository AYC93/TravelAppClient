import { Component, Input, OnInit, inject } from '@angular/core';
import { GoogleApiService } from 'src/app/google-api.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  googleSvc = inject(GoogleApiService)

  @Input() 
  userEmail!: string

  constructor() { }

  ngOnInit(): void {

  }
  
  // authenticate login
  isLoggedIn(): boolean {
    return this.googleSvc.isLoggedIn()
  }

  //logout function
  logout() {
    this.googleSvc.logout()
  }

}