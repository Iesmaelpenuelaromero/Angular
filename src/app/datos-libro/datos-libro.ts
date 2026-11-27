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
  

  @Input() numero: number = 1;
@Output() seleccionado = new EventEmitter<Libro>();

libros: Libro[] = [
  { titulo: 'Harry Potter', autor: 'J.K. Rowling', precio: 20, stock: 1000, cantidad: 100, imagen: 'https://m.media-amazon.com/images/I/71QDUNlcUqL._UF1000,1000_QL80_.jpg' },
  { titulo: 'El misterio de Abi', autor: 'J. M. Romero', precio: 15, stock: 1000, cantidad: 100, imagen: 'https://m.media-amazon.com/images/I/61mEUsasD-L._AC_UF1000,1000_QL80_.jpg' },
];

devolver() {
  this.seleccionado.emit(this.libros[this.numero - 1]);   // posición 0 = libro 1
}
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
