import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { BreadCrumbComponent } from './breadcrumb/bread-crumb.component';
import { RouterModule } from '@angular/router';

@NgModule ({
    declarations: [
        WrapperComponent,
        BreadCrumbComponent
    ],
    imports: [RouterModule],
    exports: [
        WrapperComponent
    ]
})
export class WrapperModule { }