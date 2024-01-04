import {Component} from '@angular/core';
import {OverlayAlertComp} from "./overlay_alert/OverlayAlertComp";

@Component({
  selector: 'AlertComp',
  standalone: true,
  imports: [
    OverlayAlertComp
  ],
  template: `<OverlayAlertComp></OverlayAlertComp>`
})
export class AlertComp {

  constructor() { }

}
