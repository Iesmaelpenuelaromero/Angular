import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { Alumno } from './alumno/alumno';
import { FormsModule } from '@angular/forms';
import { DatosLibro } from './datos-libro/datos-libro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, Alumno, FormsModule, DatosLibro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Clase Angular';
  protected readonly nombre = 'Ismael Peñuela Romero';
  protected readonly edad: number = 18;
  companero: string = '';
  concatenado: string = '';
  name: string = '';
  minus1: string = '';
  minus2: string = '';
  conFondo: boolean = false;
  enlace: string = 'https://www.ceuandalucia.es';
  boton: string = 'Mostrar';
  visible: boolean = true;
  habilitar: string = 'Habilitar';
  habilitado: boolean = true;

  getEdad(): number {
    return this.edad;
  }

  mayorEdad(): string {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    } else {
      return 'Es menor de edad';
    }
  }
  mostrarNombre(evento: any) {
    this.companero = 'Victor Coquelet Salguero';
  }

  concatenar(event: any) {
    this.concatenado += event.target.value + ',';
  }
  valorBoton(event: any) {
    if (this.visible == false) {
      this.boton = 'Mostrar';
      this.visible = true;
    } else {
      this.boton = 'Ocultar';
      this.visible = false;
    }
  }
  habilitarBoton(event: any) {
    if (this.habilitado == false) {
      this.habilitar = 'Habilitar';
      this.habilitado = true;
    } else {
      this.habilitar = 'Deshabilitar';
      this.habilitado = false;
    }
  }
}
