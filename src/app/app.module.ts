import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
// import { AuthModule } from '@auth0/auth0-angular';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { MainComponent } from './planner/main/main.component';
import { WeatherComponent } from './planner/weather/weather.component';
import { PlannerService } from './planner.service';
import { EntryComponent } from './planner/entry/entry.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GoogleApiService } from './google-api.service';
import { AuthGuard } from './auth-guard.service';
import { LocalStorageService } from './localstorage.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { NavBarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Home'},
  //figure out why authguard not working for login page
  { path: 'login', component: LoginComponent, title: 'Login Page'},
  { path: 'entry', component: EntryComponent, canActivate:[AuthGuard], title: 'Plan Entry'},
  { path: 'main', component: MainComponent, canActivate:[AuthGuard], title: 'Plans'},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    WeatherComponent,
    EntryComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }), BrowserAnimationsModule, MatButtonModule, MatSelectModule,
    OAuthModule.forRoot(), MatSnackBarModule, GoogleMapsModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatAutocompleteModule, MatCardModule
  ],
  providers: [ApiService, PlannerService, GoogleApiService, AuthGuard, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
