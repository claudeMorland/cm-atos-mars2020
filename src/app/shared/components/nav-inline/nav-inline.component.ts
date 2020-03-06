import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-inline',
  templateUrl: './nav-inline.component.html',
  styleUrls: ['./nav-inline.component.scss']
})
export class NavInlineComponent implements OnInit {

  @Input() list: {route: string, label: string}[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

}
