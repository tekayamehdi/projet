import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {CreatedonComponent} from './createdon/createdon.component';
import {DonListComponent} from './don-list/don-list.component';




const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdmindashboardComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'createdon', component: CreatedonComponent},
    {path: 'listdons', component: DonListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
