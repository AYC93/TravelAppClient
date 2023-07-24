import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleApiService } from 'src/app/google-api.service';
import { ReduxAppState } from '../redux/state.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  googleSvc = inject(GoogleApiService)
  store = inject(Store<ReduxAppState>)

  @Input() 
  userEmail!: string

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