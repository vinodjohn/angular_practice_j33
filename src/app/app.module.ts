import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {StudentModule} from './student/student.module';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {appInterceptor} from './shared/interceptor/app.interceptor';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    MatToolbar,
    MatButton
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([appInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
