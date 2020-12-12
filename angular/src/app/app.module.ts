import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {CreatedonComponent} from './createdon/createdon.component';
import {DonListComponent} from './don-list/don-list.component';
import {DonDetalisComponent} from './don-detalis/don-detalis.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AdmindashboardComponent,
        HomeComponent,
        ProfileComponent,
        CreatedonComponent,
        DonListComponent,
        DonDetalisComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
