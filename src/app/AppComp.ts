import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <a href="/index">index</a> |
    <a href="/login">login</a> |
    <a href="/dashboard">Dashboard</a> |
    <a href="/forest">forest</a> |
    <a href="/river">river</a> |
    <a href="/crud">crud</a>
    <hr/>
    <router-outlet></router-outlet>`,
  providers: [

  ],
})
export class AppComp {

  title = 'AppComp';

}

