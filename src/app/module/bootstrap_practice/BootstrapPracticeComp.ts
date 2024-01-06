import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertComp} from "../../widget/alert/AlertComp";

@Component({
  selector: 'BootstrapPracticeComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComp],
  templateUrl: 'BootstrapPracticeComp.html',
  styleUrls: ['BootstrapPracticeComp.scss']
})
export class BootstrapPracticeComp {

  title = 'BootstrapPracticeComp';
  
}
