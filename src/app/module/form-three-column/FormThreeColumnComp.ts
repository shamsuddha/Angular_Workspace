import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertComp} from "../../widget/alert/AlertComp";

@Component({
  selector: 'FormThreeColumnComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComp],
  templateUrl: 'FormThreeColumnComp.html',
  styleUrls: ['FormThreeColumnComp.scss']
})
export class FormThreeColumnComp {

  title = 'FormThreeColumnComp';
  
}
