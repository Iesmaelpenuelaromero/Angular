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
  miTexto: string = '';
  dehsabilitado: boolean = true;
  checkeado: boolean = false;
  alerta: string = '';
  par:string = "";

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

  mostrarTexto(evento: any) {
    this.miTexto = evento.target.value;
  }
  marcado(evento: any) {
      alert("El checkbox está marcado");
    
  }
  marcados(evento:any){
    if(evento.target.value === "P"){

      this.par = "Pulsado par"

    }else{

      this.par = "Pulsado impar"

    }
  }
}
