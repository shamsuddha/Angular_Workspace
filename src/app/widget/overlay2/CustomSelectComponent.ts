import {Overlay, OverlayConfig, OverlayModule, OverlayRef} from '@angular/cdk/overlay';
import {CdkPortal, PortalModule} from '@angular/cdk/portal';
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {noop} from 'rxjs';
import {BrowserModule, DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {CustomSelectOptionComponent} from "./CustomSelectOptionComponent";
import {CommonModule} from "@angular/common";
import {A11yModule} from "@angular/cdk/a11y";

export interface CustomSelectEvent {
  source: CustomSelectComponent;
  selected: any;
}

@Component({
  selector: 'custom-select',
  templateUrl: './CustomSelectComponent.html',
  styleUrls: ['./CustomSelectComponent.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    A11yModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomSelectComponent,
    },
  ],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor, Validator {

  @Input('id') public inputId: string = '';

  @Input() public label: string = '';
  @Input() public placeholder: string = '';

  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public error = false;
  @Input() public multiple = false;
  @Input() public search = false;

  @Input('aria-label') public ariaLabel = '';
  @Input('aria-labelledby') public ariaLabelledby = '';

  @Output() readonly change = new EventEmitter<CustomSelectEvent>();

  @ViewChild('select') public select!: ElementRef;
  @ViewChild(CdkPortal) public contentTemplate!: CdkPortal;

  @ContentChildren(CustomSelectOptionComponent)
  public options!: QueryList<CustomSelectOptionComponent>;

  public displayText!: SafeHtml;
  public displayX: boolean = false;

  private selectedOption!: CustomSelectOptionComponent;
  private showing: boolean = false;
  private showPlaceholder: boolean = true;
  private overlayRef!: OverlayRef;

  constructor(
    private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private overlay: Overlay
  ) {
  }

  public onChangeFn: any = (_: any) => noop();

  public onTouchedFn: any = () => noop();

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  public ngOnInit(): void {
    if (!this.displayText) {
      this.displayText = this.domSanitizer.bypassSecurityTrustHtml(
        this.placeholder
      );
    }
  }

  public writeValue(obj: any): void {
  }

  public onTouched(): void {
    this.onTouchedFn();
  }

  public mainSelectClasses(): { [key: string]: any } {
    return {
      mainSelect: true,
      error: this.error,
      disabled: this.disabled,
      placeholder: this.showPlaceholder,
    };
  }

  public onDropMenuIconClick(event: UIEvent): void {
    if (!this.disabled) {
      event.stopPropagation();
      this.select.nativeElement.focus();
      this.select.nativeElement.click();
    }
  }

  public onKeyDown(event: KeyboardEvent): void {
  }

  public showDropdown(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.showing = true;
  }

  private hide(): void {
    this.overlayRef.detach();
    this.showing = false;
  }

  private syncWidth(): void {
    if (!this.overlayRef) {
      return;
    }

    const refRectWidth =
      this.select.nativeElement.getBoundingClientRect().width;
    this.overlayRef.updateSize({width: refRectWidth});
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.select.nativeElement)
      .withPush(true)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 4,
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -4,
        },
      ]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }
}
