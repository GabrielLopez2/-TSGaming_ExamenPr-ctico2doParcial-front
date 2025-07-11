import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductosService } from '../../servicios/productos';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class DetailsComponent implements OnInit {

  @Input({ required: true }) id!: string;

  producto: any;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    const idNumber = Number(this.id);

    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.producto = data.find((p: any) => p.idProducto === idNumber);
        if (!this.producto) {
          console.warn(`Producto con id ${idNumber} no encontrado.`);
        }
      },
      error: (err) => console.error(err)
    });
  }
}
