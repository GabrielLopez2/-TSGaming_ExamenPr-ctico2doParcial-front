import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.html',
  styleUrls: ['./listado-productos.css']
})
export class ListadoProductosComponent implements OnInit {

  productos: any[] = [];
  productosFiltrados: any[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
      },
      error: (err) => console.error(err)
    });
  }

  verDetalles(idProducto: number) {
    this.router.navigate(['/productos', idProducto]);
  }

}
