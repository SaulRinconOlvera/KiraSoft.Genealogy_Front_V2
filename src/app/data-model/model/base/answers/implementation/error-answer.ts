import { IErrorAnswerd } from '../contracts/IErrorAnswer';
import { ErrorViewModel } from './error-view-model';

export class ErrorAnswer<T> implements IErrorAnswerd<T> {
    ErrorNumber: number;
    errorList: ErrorViewModel[];
    Success: boolean;
    Message: string;
    PayLoad: T;
}
