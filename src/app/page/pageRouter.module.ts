import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { loginComponent } from './component/login/login.component';

const Router : Routes = [
    { path:'',component:WelcomeComponent,pathMatch:'full' },
    { path:'welcome',component:WelcomeComponent,pathMatch:'full' },
    { path:'login',component:loginComponent,pathMatch:'full' },
]

@NgModule({
  imports: [
    RouterModule.forChild(Router)
  ],
  exports:[
    RouterModule
  ],
})
export class PageRouterModule { }
