import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { NotFoundComponent } from './not-found/not-found.component';

library.add(faTrashAlt, faCheckSquare, faSquare);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
