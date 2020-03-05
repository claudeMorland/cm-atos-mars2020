import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
