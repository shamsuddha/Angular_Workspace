import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'IndexComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './IndexComp.html',
  styleUrl: './IndexComp.scss'
})
export class IndexComp {

  title = 'IndexComp';



}
