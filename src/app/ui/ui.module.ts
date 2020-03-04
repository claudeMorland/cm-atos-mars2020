import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageLoginComponent } from './components/login/pages/page-login/page-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent, UiComponent, PageLoginComponent],
  exports: [UiComponent,HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class UiModule { }
