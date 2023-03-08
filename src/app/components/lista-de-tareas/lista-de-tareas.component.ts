import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.css'],
})
export class ListaDeTareasComponent implements OnInit {
  tareaNueva: string;
  tareas: string[] = [];

  constructor() {}

  ngOnInit() {}

  agregarTarea(): void {
    if (this.tareaNueva.length > 1) {
      this.tareas.push(this.tareaNueva);
      this.tareaNueva = '';
    } else {
      Swal.fire('Debe de ingresar una tarea nueva');
    }
  }

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
  }
}
