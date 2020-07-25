import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayOutModule } from './shared/layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { NoSessionModule } from './shared/session/no-session.module';
import { ErrorsModule } from './shared/error/errors.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './shared/components/components.module';
import { OtherModule } from './shared/other/other.module';
import { SharedServicesModule } from './services/shared-services.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json ');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayOutModule,
    PagesModule,
    NoSessionModule,
    ErrorsModule,
    OtherModule,
    ComponentsModule,
    AppRoutingModule,
    SharedServicesModule,
    TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
