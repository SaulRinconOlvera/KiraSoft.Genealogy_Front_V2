import { NgModule } from '@angular/core';
import { LayOutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { RightBarComponent } from './rightbar/right-bar.component';
import { LeftBarModule } from './leftbar/left-bar.module';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule ({
    declarations: [
        LayOutComponent,
        RightBarComponent,
        FooterComponent
    ],
    imports: [
        HeaderModule,
        LeftBarModule,
        WrapperModule
    ],
    exports: [
        LayOutComponent
    ]
})
export class LayOutModule { }
