import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/model/prestation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { State } from 'src/app/shared/enums/state.enum';


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

   public updateState(item: Prestation, state: State) {
    let obj = new Prestation(item); // copy par valeur
    obj.state = state;
    return  this.update(obj);
  }

  public update(item: Prestation) {
    return this.http.patch<Prestation>(`${environment.urlApi}prestations/${item.id}`, item);
  }

  delete(item: Prestation) {
    return this.http.delete<Prestation>(`${environment.urlApi}prestations/${item.id}`);
  }

  public add(item: any) {
    return this.http.post(`${environment.urlApi}prestations`, item);
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
