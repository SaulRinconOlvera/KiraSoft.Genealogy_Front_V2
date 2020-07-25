import { Component, ViewEncapsulation, OnDestroy} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-loader',
    template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">Elite admin</p>
        </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
    styleUrls: [ ]
})
export class LoaderComponent implements OnDestroy
{
    public isSpinnerVisible = true;

    constructor( private router: Router )
    {

        this.router.events.subscribe( event => {
            if (event instanceof NavigationStart) {
              this.isSpinnerVisible = true;
              console.log('spinner visible = true');
            }
            else if (
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel ||
              event instanceof NavigationError
            ) {
              this.isSpinnerVisible = false;
              console.log('spinner visible = false');
            }
          },
          () => {
            this.isSpinnerVisible = false;
            console.log('spinner visible = false');
          }
        );
      }

    public ngOnDestroy = (): void => {
      console.log('spinner visible = false');
      this.isSpinnerVisible = false;
    }

}
