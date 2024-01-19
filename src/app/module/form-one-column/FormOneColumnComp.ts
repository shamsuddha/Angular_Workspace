import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertComp} from "../../widget/alert/AlertComp";

@Component({
  selector: 'FormOneColumnComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComp],
  templateUrl: 'FormOneColumnComp.html',
  styleUrls: ['FormOneColumnComp.scss']
})
export class FormOneColumnComp {

  title = 'FormOneColumnComp';
  
}
