import { stringify } from '@angular/compiler/src/util';
import { Injectable } from "@angular/core";
import { ErrorAnswer } from 'src/app/data-model/model/base/answers/implementation/error-answer';
import { UserViewModel } from 'src/app/data-model/model/session/user.viewmodel';
import Swal from 'sweetalert2'


@Injectable()
export class ErrorHandleService {


  public ShowErrors = <TObject>(viewModel: ErrorAnswer<TObject>, errorTitle: string = "Error") => {
    let errorMessage = this.getErrorMessage<TObject>(viewModel);

    Swal.fire({
      icon: 'error',
      title: errorTitle,
      text: errorMessage,
      backdrop: false,
      allowOutsideClick: false
    })
  }

  private getErrorMessage = <TObject>(viewModel: ErrorAnswer<TObject>): string => {
    let result: string;

    if(viewModel.ErrorNumber === 0) {
      result = viewModel.Message;
    }
    else {
      viewModel.errorList.forEach(error => {
        result+= `${error.message}\r\n`;
      })
    }

    return result;
  }

}
