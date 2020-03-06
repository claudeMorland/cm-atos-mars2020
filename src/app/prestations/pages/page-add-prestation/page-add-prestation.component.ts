import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  constructor(private prestationService: PrestationsService,
    private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

public addItem(item: any) {
  console.log(item);
  this.prestationService.add(item).subscribe(
    (res) => {
      //redirection avec navigate classic
       // this.router.navigate(['prestations']);

       //example relative redirect (prestations/add => ../ => prestations)
       this.router.navigate(['../'], {relativeTo: this.acRoute});
    }
  );
}

}
