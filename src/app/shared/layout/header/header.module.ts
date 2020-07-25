import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

@NgModule ({
    declarations: [
        HeaderComponent,
        SearchComponent,
        NotificationsComponent,
        MegaMenuComponent,
        MessagesComponent,
        LogoComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }