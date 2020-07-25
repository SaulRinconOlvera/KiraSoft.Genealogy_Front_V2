import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IAnswerBase } from '../../data-model/model/base/answers/contracts/IAnswerBase';
import { ApiServiceEnum } from '../../data-model/enum/api-service-enum';
import {  Observable } from 'rxjs';
import { SuccessfullyAnswer } from '../../data-model/model/base/answers/implementation/successfully-answer';
import { ErrorAnswer } from '../../data-model/model/base/answers/implementation/error-answer';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

  private apiServerURL: string = environment.application.configuration.apiServerUrl;
  private apiVersion: string = environment.application.configuration.apiVersion;

  constructor(private httpClient: HttpClient) {
  }

  public getModel = async <TResponse>(modelId: number | string, route: ApiServiceEnum, apiVersion: string = null):
            Promise<IAnswerBase<TResponse>> => {
    const url = `${this.apiServerURL}/${apiVersion ?? this.apiVersion}/${route}/${modelId}`;
    return await this.getResponse<TResponse>(this.httpClient.get<IAnswerBase<TResponse>>(url, this.getHeader()));
  }

  public postModel = async <TRequest, TResponse>(model: TRequest, route: ApiServiceEnum, apiVersion: string = null):
            Promise<IAnswerBase<TResponse>> => {
    const url = `${this.apiServerURL}/${apiVersion ?? this.apiVersion}/${route}`;
    return await this.getResponse<TResponse>(this.httpClient.post<IAnswerBase<TResponse>>(url, model, this.getHeader()));
  }

  private getResponse = async <TResponse>(request: Observable<IAnswerBase<TResponse>>): Promise<IAnswerBase<TResponse>> => {
    return request
      .pipe(
        catchError(async error => { return this.processError<TResponse>(error);})
      )
      .toPromise<SuccessfullyAnswer<TResponse>>();
  }

  private getHeader = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': '*',
      })
    };
  }

  private processError<TResponse>(error: HttpErrorResponse): ErrorAnswer<TResponse> {

    let result = new ErrorAnswer<TResponse>();
    result.ErrorNumber = error.status;

    switch(error.error.constructor) {
      case ProgressEvent: {
        console.log("pasa por aqui");
        result.Message = error.message;
        break;
      }
      default: {
        console.log("pasa por aqui1");
        result = error.error as ErrorAnswer<TResponse>;
        result.ErrorNumber = error.status;
        break;
      }
    }

    return result;
  }
}
