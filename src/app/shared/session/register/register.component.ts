import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators,  ValidatorFn, ValidationErrors } from '@angular/forms';
import { RegisterViewModel } from '../../../data-model/model/session/register.viewmodel';
import { HttpService } from 'src/app/services/shared/http.service';
import { UserViewModel } from 'src/app/data-model/model/session/user.viewmodel';
import { ApiServiceEnum } from 'src/app/data-model/enum/api-service-enum';
import { ErrorHandleService } from '../../../services/shared/error-handle.service';
import { IAnswerBase } from '../../../data-model/model/base/answers/contracts/IAnswerBase';
import { ErrorAnswer } from '../../../data-model/model/base/answers/implementation/error-answer';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.scss' ]
  })
export class RegisterComponent implements OnInit {

  title = 'GenealogyFront';

  public patter: string = `^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[-_!@#$%^&*\(\)+.]){1,}.{8,}$`;
  public form: FormGroup;

  constructor(
    private errorHandle: ErrorHandleService,
    private httpService: HttpService,
    public translate: TranslateService) { }

  public ngOnInit(): void {
    this.configureForm();
  }

  public userRegister = async () => {
    if(this.form.invalid) return;

    let viewModel: RegisterViewModel = this.getViewModel();
    let result = await this.httpService.postModel<RegisterViewModel, UserViewModel>(viewModel, ApiServiceEnum.UserRegister);

    await this.processResult(result);
  }

  private processResult = async (result: IAnswerBase<UserViewModel>) => {
    if(!result.Success)
      this.errorHandle.ShowErrors<UserViewModel>(result as ErrorAnswer<UserViewModel>);

  }

  private getViewModel = (): RegisterViewModel => {
    return {
      name: this.form.value["name"],
      firstFamilyName: this.form.value["firstFamilyName"],
      secondFamilyName: this.form.value["secondFamilyName"],
      email: this.form.value["email"],
      password: this.form.value["password"],
      passConfirmation: this.form.value["confirmPassword"],
      isFacebookAccount: false,
      isGoogleAccount: false,
    } as RegisterViewModel;
  }

  private configureForm = () => {
    this.form = new FormGroup(
      {
        name: new FormControl(
          null,
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(100)
            ]),
        firstFamilyName: new FormControl(
          null,
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(100)
            ]),
        secondFamilyName: new FormControl(
          null,
            [
              Validators.minLength(2),
              Validators.maxLength(100)
            ]),
        email: new FormControl(
          null,
            [
              Validators.required,
              Validators.email
            ]),
        password: new FormControl(
          null,
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(100),
              Validators.pattern(this.patter)
            ]),
          confirmPassword: new FormControl(
            null,
              [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(100),
                Validators.pattern(this.patter)
              ]),
        terms: new FormControl(false)
      }, { validators: areEquals }
    );
  }
}

export const areEquals: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass1 = control.get('password').value;
  const pass2 = control.get('confirmPassword').value;

  const regexp = new RegExp(`^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[-_!@#$%^&*\(\)+.]){1,}.{8,}$`);
  let passDifferent: boolean;
  let isNotCorrect1: boolean;
  let isNotCorrect2: boolean;

  passDifferent = pass1 !== pass2;
  isNotCorrect1 = pass1 && pass1.length > 0 && !regexp.test(pass1);
  isNotCorrect2 = pass2 && pass2.length > 0 && !regexp.test(pass2);

  if (passDifferent || isNotCorrect1 || isNotCorrect2)
    return {passDifferent, isNotCorrect1, isNotCorrect2 };
  else
    return null;
};
