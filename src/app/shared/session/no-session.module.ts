import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [
    LoginComponent,
    RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        HttpClientModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NoSessionModule { }
