import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { GoogleApiService } from 'src/app/google-api.service';
import { LocalStorageService } from 'src/app/localstorage.service';
import { CombinedModel } from 'src/app/models/model';
import { updateEntriesAction } from 'src/app/redux/dashboard/dashboard.actions';
import { dashboardSelector, emailIdSelector, emailSelector } from 'src/app/redux/selector';
import { ReduxAppState } from 'src/app/redux/state.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  // Google maps 
  center!:google.maps.LatLngLiteral
  lat!:number
  lon!:number

  pid!: number
  email!: string
  emailId!: number
  combinedModel$!: Promise<CombinedModel[]>
  fetchedCombinedModel!: CombinedModel[]

  googleLogin = inject(GoogleApiService)
  apiSvc = inject(ApiService)
  local = inject(LocalStorageService)

  constructor(private store: Store<ReduxAppState>) {
    this.store.select(emailSelector).subscribe((email: string) => this.email = email);
    this.store.select(emailIdSelector).subscribe((emailId: number) => this.emailId = emailId);
  }

  ngOnInit(): void {
     // dashboardViewInit
    this.populateView();
   
  }

  ngOnChanges(){
  }

  populateView() {
    try {
      this.apiSvc.getDataFromServer(this.emailId).then((resp) => {
        this.fetchedCombinedModel = resp;
        this.store.dispatch(updateEntriesAction({payload: this.fetchedCombinedModel}))
        this.store.select(dashboardSelector)
          .subscribe((entries: CombinedModel[]) => this.combinedModel$ = new Promise(res => res(entries))); //refactor
      })
    } catch (err) {
      console.error('Error from server', err)
    }
  }

  // to add in delete for s3 as well
  deleteRow(pid: number){
    this.apiSvc.deleteDataFromServer(pid).then(
      resp=> {
      this.populateView()
      console.log(resp)
    }).catch(err=>{
      console.error('Error with deleting...', err)
    })
  }

  //TODO to display all the things input from form
}
