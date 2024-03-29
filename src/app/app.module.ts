import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainImgComponent } from './components/main-img/main-img.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { GreenButtonComponent } from './components/green-button/green-button.component';
import { GoogleButtonComponent } from './components/google-button/google-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainImgComponent,
    FormHeaderComponent,
    FormInputComponent,
    FormFooterComponent,
    GreenButtonComponent,
    GoogleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
