import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertComp} from "../../widget/alert/AlertComp";

@Component({
  selector: 'RiverComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComp],
  template: `
    <h3>RiverComp</h3>
    <AlertComp></AlertComp>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
  `,
  styles: `

  `
})
export class RiverComp {

  title = 'RiverComp';

}
