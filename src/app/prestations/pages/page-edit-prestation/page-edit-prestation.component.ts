import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/model/prestation';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public item: any;
  public itemId: string;
  public item$: Observable<Prestation>;

  constructor(private prestationService: PrestationsService,
    private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;

      this.subtitle = datas.subtitle;
    });

    this.acRoute.paramMap.subscribe(
      (params) => {

        console.log(params.get('id'));

        this.item$ = this.prestationService.getItemById(params.get('id'));

        // this.prestationService.getItemById(params.get('id')).subscribe((item: any) =>
        //   {
        //     this.item = item;
        //   });
      }
    );
    // switchMap fait le subscribe de this.acRoute.paramMap
    this.item$ = this.acRoute.paramMap.pipe(
    switchMap((params: ParamMap) => {
      this.itemId = params.get('id');
       return  this.prestationService.getItemById(params.get('id'));
      }
    ));
  }

public updateItem(item: any) {
  console.log('updateItem');
  console.log(item);
  console.log(this.itemId);

  item.id = this.itemId;

  this.prestationService.update(item).subscribe(
   (res) => {
      //redirection avec navigate classic
      // this.router.navigate(['prestations']);

      // example relative redirect (prestations/add => ../ => prestations)
      this.router.navigate(['../../'], {relativeTo: this.acRoute});
   }
  );
}
}
