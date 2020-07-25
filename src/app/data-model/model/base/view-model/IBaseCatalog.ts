import { IBaseViewModel } from './IBaseViewModel';

export interface IBaseCatalog<T> extends IBaseViewModel<T> {
    Name: string;
    ShortName: string;
}
