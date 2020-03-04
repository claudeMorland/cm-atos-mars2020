import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;

  @HostBinding('class') classTd: string;

  constructor() { }

  ngOnChanges() {
    console.log(this.appState);
    this.classTd = this.formatClass(this.appState);
  }


  private formatClass(state: any) {
    return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;
  }



}
