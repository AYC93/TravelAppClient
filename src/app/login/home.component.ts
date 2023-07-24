import { Component, inject } from '@angular/core';
import { ReduxAppState } from '../redux/state.model';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  store = inject(Store<ReduxAppState>)

  // auth0 injection
// auth=inject(AuthService)
// googleLogin=inject(GoogleApiService)

}
