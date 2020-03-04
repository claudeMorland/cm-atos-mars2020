import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;

  public headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'Total HT',
    'Total TTC',
    'State'
  ];

  public states = Object.values(State);
  // public states = State; read to use pipe keyvalue

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit(): void {
    // this.prestationsService.collection.subscribe(
    //     (datas) => {
    //        this.collection = datas;
    //     }

    // );
    this.collection$ = this.prestationsService.collection;

  }

  public changeState(item: Prestation, event) {
    console.log(event.target.value);
    this.prestationsService.updateState(item, event.target.value).subscribe((res: Prestation) => {
      item.state = res.state;
    });
  }

}
