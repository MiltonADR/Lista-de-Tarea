import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaDeTareasComponent } from './components/lista-de-tareas/lista-de-tareas.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ListaDeTareasComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
