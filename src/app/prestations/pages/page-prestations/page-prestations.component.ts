import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

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
  public title: string;
  public subtitle: string;
  public label:string;
  public route: string;

  public externalLink: string;

  public states = Object.values(State);
  // public states = State; read to use pipe keyvalue

  constructor(private prestationsService: PrestationsService, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.prestationsService.collection.subscribe(
    //     (datas) => {
    //        this.collection = datas;
    //     }

    // );


    this.collection$ = this.prestationsService.collection;

    this.activedRoute.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;

      this.subtitle = datas.subtitle;
    })

    this.label = 'Ajouter une prestation';
    this.route = 'add';
    this.externalLink = 'https://www.google.fr';
  }

  public changeState(item: Prestation, event) {
    console.log(event.target.value);
    this.prestationsService.updateState(item, event.target.value).subscribe((res: Prestation) => {
      item.state = res.state;
    });
  }

}
