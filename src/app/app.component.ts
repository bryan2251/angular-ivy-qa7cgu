import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  estudiante = {
    id: 'Ingrese su ID',
    nombre: 'Ingresar Datos',
    apellido: 'Ingresar Datos',
    universidad: 'Ingresar Datos',
    curso: 'Ingresar Datos',
  };
}
