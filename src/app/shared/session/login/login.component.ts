import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpService } from 'src/app/services/shared/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginViewModel } from '../../../data-model/model/session/login.viewmodel';
import { UserViewModel } from '../../../data-model/model/session/user.viewmodel';
import { ApiServiceEnum } from 'src/app/data-model/enum/api-service-enum';

//declare function help(): any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  title = 'GenealogyFront';
  public form: FormGroup;

  public ngOnInit(): void{
   // help();

    this.form = new FormGroup(
      {
        userName: new FormControl(
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
              Validators.maxLength(100)
            ]),
        terms: new FormControl(false)
      });
  }

  constructor(
    private httpService: HttpService,
    public translate: TranslateService) { }

  public userLogin = async () => {
    if (this.form.invalid) return;

    let model = {
      UserName: this.form.controls["userName"].value,
      Password: this.form.controls["password"].value  } as LoginViewModel;

    let result = await this.httpService.postModel<LoginViewModel, UserViewModel>(model, ApiServiceEnum.Login);
    console.log("Resultado",result);
  }
}
