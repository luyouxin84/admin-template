import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PageRouterModule } from './pageRouter.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PageRouterModule,
    FormsModule
  ],
  declarations: [WelcomeComponent]
})
export class PageModule { }
