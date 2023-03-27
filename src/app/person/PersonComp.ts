import { PersonDtoService } from './PersonDtoService';
import { Component } from "@angular/core";
@Component({
  selector: 'PersonComp',
  templateUrl:'./PersonComp.html',
  styleUrls: ['./PersonComp.scss']
  
})
export class PersonComp {

constructor(private personDtoService: PersonDtoService){}




}

