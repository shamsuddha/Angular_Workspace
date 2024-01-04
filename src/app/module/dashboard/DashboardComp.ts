import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'DashboardComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './DashboardComp.html',
  styleUrl: './DashboardComp.scss'
})
export class DashboardComp {

  title = 'DashboardComp';



}
