export interface IAnswerBase<T> {
    Success: boolean;
    Message: string;
    PayLoad: T;
}
