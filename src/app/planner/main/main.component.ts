import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { GoogleApiService } from 'src/app/google-api.service';
import { LocalStorageService } from 'src/app/localstorage.service';
import { CombinedModel } from 'src/app/models/model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  pid!: number
  email!: string
  emailId!: number
  combinedModel$!: Promise<CombinedModel[]>

  googleLogin = inject(GoogleApiService)
  apiSvc = inject(ApiService)
  local = inject(LocalStorageService)

  ngOnInit(): void {
    // post email to backend to get email id etc
    this.postEmailToGetId()
    // dashboardViewInit
  }

  ngOnChanges(){
  }
  // https://medium.com/swlh/angular-google-map-component-basics-and-tips-7ff679e383ff
  // google map

  postEmailToGetId() {
    this.email = this.googleLogin.email
    if (this.email) {
      this.apiSvc.postEmailToBackend(this.email).subscribe({
        next: n => {
          console.log('Response from server... ', n)
          // to convert back to int before sending to server later
          localStorage.setItem("emailIdString", n.emailId.toString())
          this.emailId = this.local.emailIdLocalPull()
          console.info("posted>>> " + this.email)
          console.info("EmailId = " + this.emailId)
          try{
          this.combinedModel$ = this.apiSvc.getDataFromServer(this.emailId)
          this.combinedModel$.then(resp =>
            console.log("Server sent data to view: " + resp))
        } catch (err) {
          console.error('Error from server', err)
        }
        },
        error: err => { console.log('Error!!!... ', err) }
      })
    }
  }

  populateView() {
    try {
      this.combinedModel$ = this.apiSvc.getDataFromServer(this.emailId)
      this.combinedModel$.then(resp =>
        console.log("Server sent data to view: " + resp.forEach))
    } catch (err) {
      console.error('Error from server', err)
    }
  }

  // to add in delete for s3 as well
  deleteRow(pid: number){
    this.apiSvc.deleteDataFromServer(pid).then(
      resp=> {
      // not refreshing, to see again
      this.populateView()
      console.log(resp)
    }).catch(err=>{
      console.error('Error with deleting...', err)
    }
    )
  }

  //TODO to display all the things input from form
}
