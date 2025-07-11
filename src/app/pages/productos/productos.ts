import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  productosFiltrados: any[] = [];

  busqueda: string = '';
  categoriaSeleccionada: number | null = null;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = [...data];
      },
      error: (err) => console.error(err)
    });
  }

  filtrarPorCategoria(idCategoria: number | null) {
    this.categoriaSeleccionada = idCategoria;
    this.aplicarFiltros();
  }

  onBusquedaChange() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.productosFiltrados = this.productos.filter(prod => {
      const categoriaProducto = Number(prod.idCategoria);

      const coincideCategoria =
        this.categoriaSeleccionada !== null
          ? categoriaProducto === this.categoriaSeleccionada
          : true;

      const coincideBusqueda =
        this.busqueda
          ? prod.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
          : true;

      return coincideCategoria && coincideBusqueda;
    });
  }

  verDetalles(idProducto: number) {
    this.router.navigate(['/productos', idProducto]);
  }
}
