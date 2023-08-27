import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BookDtoService } from "../book/BookDtoService";
import { HttpClient } from "@angular/common/http";
import { LionDto } from "./LionDto";

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

lionDtoFgs = new FormGroup({
  id: new FormControl<number | null>(null),
  lionName: new FormControl<string | null> (null, Validators.required),
  lionLeg: new FormControl<string | null> (null, Validators.required)

});

constructor(private bookDtoService: BookDtoService, 
  private http: HttpClient){

}

ngOnInit(){
 // this.search();
}

// save() {
//   console.log(this.lionDtoFgs.value);
//   this.bookDtoService
//     .saveBook(new LionDto(this.lionDtoFgs.value))
//     .subscribe((e) => e);
//   this.search();
// }

// search() {
//   this.bookDtoService.getBookList().subscribe((e: Array<LionDto>) => {
//     this.bookDtoList = e;
//   });
// }


}