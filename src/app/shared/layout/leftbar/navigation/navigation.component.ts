import { Component, OnInit } from '@angular/core';
import * as menu from 'src/assets/data/menu-options.json';
import { MenuOption } from 'src/app/data-model/model/navigation/menu-option';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ './navigation.component.scss']
})

export class NavigationComponent implements OnInit
{
    public options: MenuOption[] ;

    ngOnInit(): void {
        this.options = menu.options;
    }
}
