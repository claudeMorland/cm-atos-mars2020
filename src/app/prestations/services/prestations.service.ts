import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection$: Observable<Prestation[]>;

  constructor(private http: HttpClient) {
      this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).pipe(
        //map(tab => tab.map(objJson => new Prestation(objJson) ))
        map(
          (tab) => {
             return tab.map((objJson) => {
               return new Prestation(objJson);
             })
          }
        )
      );
   }

  public get collection(): Observable<Prestation[]> {
    return this.pCollection$;
  }



   public set collection(col: Observable<Prestation[]>) {
     this.pCollection$ = col;
  }

  // addItemInCollection

  // updateItemInCollection

  // deleteItemInCollection

  // getItemByIdFromCollection
}
