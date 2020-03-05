import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/model/prestation';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State);

  @Output() emitItem: EventEmitter<Prestation> = new EventEmitter();

  @Input() itemPresta = new Prestation();

 public form: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      typePresta: [this.itemPresta.typePresta],
      client: [this.itemPresta.client],
      tjmHt:[this.itemPresta.tjmHt],
      nbJours: [this.itemPresta.nbJours],
      tva: [this.itemPresta.tva],
      state: [this.itemPresta.state],
      comment: [this.itemPresta.comment]

    })
  }

  onSubmit() {
    console.log(this.form.value);
    this.emitItem.emit()
  }

}
