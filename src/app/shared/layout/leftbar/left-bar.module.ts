import { NgModule } from '@angular/core';
import { LeftBarComponent } from './left-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuOptionComponent } from './navigation/menu-option/menu-option.component';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [
        LeftBarComponent,
        UserProfileComponent,
        NavigationComponent,
        MenuOptionComponent
    ],
    imports: [CommonModule],
    exports: [LeftBarComponent ]
})
export class LeftBarModule { }