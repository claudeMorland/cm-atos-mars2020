import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-light/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent, NavInlineComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule, ButtonComponent, ReactiveFormsModule,
    FontAwesomeModule,
    NavInlineComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
