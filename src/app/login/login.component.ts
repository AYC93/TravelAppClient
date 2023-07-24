import { Component, inject } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GoogleApiService } from '../google-api.service';
import { LocalStorageService } from '../localstorage.service';
import { ReduxAppState } from '../redux/state.model';
import { Store } from '@ngrx/store';
import { emailSelector } from '../redux/selector';
import { updateUserInfoAction } from '../redux/login/login.actions';
import { ServerEmail } from '../models/model';
// import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string
  emailId!:number

  router = inject(Router)
  apiSvc = inject(ApiService)
  local = inject(LocalStorageService)
  googleLogin=inject(GoogleApiService)

  constructor(private store: Store<ReduxAppState>) {
    this.store.select(emailSelector).subscribe((email: string) => this.email = email);
  }

  ngDoCheck() {
    if (this.email !== this.googleLogin.email && this.googleLogin.email !== "") {
      this.email = this.googleLogin.email

      this.apiSvc.postEmailToBackend(this.email).subscribe({
        next: n => {
          console.log('Response from server... ', n)
          // NgRx store user info
          const userEmail: ServerEmail = { email: this.email, emailId: n.emailId }
          this.store.dispatch(updateUserInfoAction({payload: userEmail}))
          // to convert back to int before sending to server later
          localStorage.setItem("emailIdString", n.emailId.toString())
          console.info("posted>>> " + this.email)
        },
        error: err => { console.log('Error!!!... ', err) }
      })
    }
  }

  toDashboard(){
      this.router.navigate(['/main'])
  }
}
