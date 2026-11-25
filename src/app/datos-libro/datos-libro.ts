import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-datos-libro',
  styleUrl: './datos-libro.css',
  templateUrl: './datos-libro.html',
})
export class DatosLibro {
  libro = {
    titulo: 'Your name',
    autor: 'Naoshi Arakawa',
    stock: 1000,
    cantidad: 100,
    imagen:
      'https://www.planetadelibros.com/usuaris/libros/fotos/246/original/portada_your-name-novela_makoto-shinkai_201703091007.jpg',
  };

  anadir(event: any) {
    this.libro.cantidad++;
  }
  disminuir(event: any) {
    if (this.libro.cantidad == 0) {
    } else {
      this.libro.cantidad--;
    }
  }
  mostrarApunte(event:any){
    console.log("X: " + event.clientX + ", Y: " + event.clientY);
  }
}
