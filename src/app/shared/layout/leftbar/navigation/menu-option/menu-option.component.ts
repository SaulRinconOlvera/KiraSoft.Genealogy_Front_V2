import { Component, Input, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/data-model/model/navigation/menu-option';

@Component({
    selector: 'app-menu-option',
    templateUrl: './menu-option.component.html',
    styleUrls: [ ]
})
export class MenuOptionComponent implements OnInit {
    @Input()
    menuOption: MenuOption;

    ngOnInit(): void {

    }
 }
