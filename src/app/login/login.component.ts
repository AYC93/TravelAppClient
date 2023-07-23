import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GoogleApiService } from '../google-api.service';
import { LocalStorageService } from '../localstorage.service';
// import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  email!: string
  emailId!:number

  router = inject(Router)
  apiSvc = inject(ApiService)
  local = inject(LocalStorageService)
  googleLogin=inject(GoogleApiService)

  // constructor(googleLogin: GoogleApiService) {
  //   console.info(">>> email: " + (googleLogin.email))
  //   console.info(">>> idToken: " + (googleLogin.idToken))
  // }

  ngAfterViewInit(): void {
    this.email = this.googleLogin.email
    console.info(">>> email: " + (this.googleLogin.email))
    console.info(">>> idToken: " + (this.googleLogin.idToken))
    if (this.email) {
      this.apiSvc.postEmailToBackend(this.email).subscribe({
        next: n => {
          console.log('Response from server... ', n)
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

  logout(){
    this.googleLogin.logout()
  } 

}
