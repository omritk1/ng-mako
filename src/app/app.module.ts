import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

//Material
import {MatToolbarModule} from '@angular/material/toolbar';

//Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
