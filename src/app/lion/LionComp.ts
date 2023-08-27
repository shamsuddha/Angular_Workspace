import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component ({

  selector: 'LionComp',
  templateUrl: './LionComp.html',
  styleUrls: ['./LionComp.scss'],
})
export class LionComp{

lionDtoFg = new FormGroup({
  id: new FormControl<number | null> (null),
  lionName: new FormControl<string | null>(null, Validators.required),
  lionAuthor: new FormControl<string | null> (null, Validators.required)
  
})




}