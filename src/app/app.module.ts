import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/dogs/create/create.component';
import { DetailsComponent } from './components/dogs/details/details.component';
import { ListComponent } from './components/dogs/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/dogs/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
