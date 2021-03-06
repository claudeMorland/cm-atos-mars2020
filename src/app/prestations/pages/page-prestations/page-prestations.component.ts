import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable, BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash, faEdit, faAlignCenter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$ = new BehaviorSubject<Prestation[]>(null);  // on peut utiliser egalement Subject puisque l'on a pas besoin de stocker la valeur

  public faTrash = faTrash;
  public faEdit = faEdit;
  public faAlignCenter = faAlignCenter;
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'Total HT',
    'Total TTC',
    'State',
    'Delete',
    'Edit',
    'details'
  ];
  public title: string;
  public subtitle: string;
  public label:string;
  public route: string;

  public listLinks: {route: string, label: string}[];

  public externalLink: string;

  public states = Object.values(State);
  // public states = State; read to use pipe keyvalue

  constructor(private prestationsService: PrestationsService, private activedRoute : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.prestationsService.collection.subscribe(
    //     (datas) => {
    //        this.collection = datas;
    //     }

    // );


   // this.collection$ = this.prestationsService.collection;   => observable

    this.listLinks =
    [{route: 'details', label: 'détails'},
     {route: 'comments', label: 'comments'}];

    this.reloadDatas();

    this.activedRoute.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;

      this.subtitle = datas.subtitle;
    });

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

  public delete(item: Prestation) {
    this.prestationsService.delete(item).subscribe(
      (res: Prestation) => {
        console.log(res);
        this.reloadDatas();
      }
    )
  }

  public edit(item: Prestation) {
    console.log('edit');
    this.router.navigate(['prestations/edit',item.id]);
  }

  public details(item: Prestation) {
    this.prestationsService.setDetails(item);
  }

  private reloadDatas() {
    this.prestationsService.collection.subscribe((datas) =>
    {
      this.collection$.next(datas);
    });
  }

}
