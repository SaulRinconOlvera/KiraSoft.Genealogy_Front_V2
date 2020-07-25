import { NgModule } from '@angular/core';
import { HttpService } from './shared/http.service';
import { ErrorHandleService } from './shared/error-handle.service';

@NgModule ({
  providers: [
    HttpService,
    ErrorHandleService
  ]
})

export class SharedServicesModule { }
