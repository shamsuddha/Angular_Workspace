import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from "@angular/common";

//https://blog.angulartraining.com/how-to-display-an-overlay-with-angular-38345414fdad
@Component({
  selector: 'Overlay3Comp',
  standalone: true,
  imports: [
    CommonModule, FormsModule, OverlayModule
  ],
  providers: [],
  template: `
    <button (click)="isOpen = !isOpen" cdkOverlayOrigin #trigger="cdkOverlayOrigin">Open/close overlay</button>
    <div>This content will be under the overlay</div>
    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="isOpen"
                 (overlayOutsideClick)="isOpen = false">
      <ul class="example-overlay">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </ng-template>

  `,
})
export class Overlay3Comp {

  isOpen = false;

  constructor() {

  }


}
