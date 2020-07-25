import { IAnswerBase } from './IAnswerBase';
import { ErrorViewModel } from '../implementation/error-view-model';

export interface IErrorAnswerd<T> extends IAnswerBase<T> {
    errorList: ErrorViewModel[];
}
