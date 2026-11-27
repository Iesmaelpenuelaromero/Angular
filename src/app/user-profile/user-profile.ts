import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  protected readonly nombre: string = 'Ismael Peñuela Romero';
  protected readonly rol: string = 'Informático';
  protected readonly titulo: string ='Este es el título';
  imagen: string = '/images.jpg';
  naranja: string = 'naranja';
  marcado: boolean = true;
  deshabilitado: boolean = true;
  @Input()
  namee: string = '';

  @Input()
  role: string = '';
  asignatura = {
    nombre: "Ismael Peñuela Romero",
    codigo: 123456789
  };
}

