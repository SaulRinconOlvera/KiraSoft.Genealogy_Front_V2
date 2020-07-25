import { Routes, RouterModule } from '@angular/router';
import { LayOutComponent } from './shared/layout/layout.component';
import { PagePrincipalComponent } from './pages/principal/page-principal.component';
import { LoginComponent } from './shared/session/login/login.component';
import { RegisterComponent } from './shared/session/register/register.component';
import { Error400Component } from './shared/error/errors-400/error-400.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { TermsComponent } from './shared/other/terms/terms.component';

const applicationRoutes: Routes = [
    {
        path: '',
        component: LayOutComponent,
        children: [
            { path: '', component: PagePrincipalComponent}
        ]
    } ,
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'terms', component: TermsComponent},
    { path: '**', component: Error400Component}

];

@NgModule
({
    imports: [
      RouterModule.forRoot(applicationRoutes),
      TranslateModule
    ],
    exports: [
      RouterModule,
    ]
  })

  export class AppRoutingModule { }
