import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable } from 'rxjs';

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

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit(): void {
    // this.prestationsService.collection.subscribe(
    //     (datas) => {
    //        this.collection = datas;
    //     }

    // );
    this.collection$ = this.prestationsService.collection;

  }

}
