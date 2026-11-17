import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-alumno',
  styleUrl: './alumno.css',
  templateUrl: './alumno.html',
})
export class Alumno {
  protected readonly nombre: string = 'Ismael';
  protected readonly apellido: string = 'Peñuela Romero';
  protected readonly edad: number = 22;
  protected readonly dni: string = '54185856H';

  multi(): number {
    return this.edad * 5;
  }

  mayorEdad(): string {
    if (this.edad >= 18) {
      return 'El alumno es mayor de edad';
    } else {
      return 'El alumno es menor de edad';
    }
  }
}
