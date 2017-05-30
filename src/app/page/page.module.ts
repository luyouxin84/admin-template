import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {PageRouterModule} from './pageRouter.module';
import {FormsModule} from '@angular/forms';
import {loginComponent} from './component/login/login.component';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, PageRouterModule, FormsModule,MdInputModule,MdButtonModule
  ],
  declarations: [WelcomeComponent, loginComponent]
})
export class PageModule {}