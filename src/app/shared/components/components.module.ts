import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule,
        BrowserModule ],
    exports: [
        LoaderComponent
    ]
})
export class ComponentsModule { }
