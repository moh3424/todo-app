import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksFilterPipe } from '../shared/pipes/tasks-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
