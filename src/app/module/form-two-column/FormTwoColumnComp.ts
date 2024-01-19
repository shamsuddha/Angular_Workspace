import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertComp} from "../../widget/alert/AlertComp";

@Component({
  selector: 'FormTwoColumnComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComp],
  templateUrl: 'FormTwoColumnComp.html',
  styleUrls: ['FormTwoColumnComp.scss']
})
export class FormTwoColumnComp {

  title = 'FormTwoColumnComp';
  
}
