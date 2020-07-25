import { ISuccessfullyAnswer } from '../contracts/ISuccessfullyAnswer';

export class SuccessfullyAnswer<T> implements ISuccessfullyAnswer<T> {
    Success: boolean;
    Message: string;
    PayLoad: T;
}
