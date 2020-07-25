import { NgModule } from '@angular/core';
import { PagePrincipalComponent } from './principal/page-principal.component';

@NgModule({
    declarations: [PagePrincipalComponent],
    exports: [
      PagePrincipalComponent
    ]
  })
  export class PagesModule { }
