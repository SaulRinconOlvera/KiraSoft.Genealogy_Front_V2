import { optionType } from './option-type-enum';

export class MenuOption {
    name: string;
    type: optionType;
    hasChildren: boolean;
    icon?: string;
    link?: string;
    children?: MenuOption[];
}