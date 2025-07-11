import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:5102/api';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Productos`);
  }

  getProductosPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/Productos/porNombre?nombre=${nombre}`);
  }

  getProductosPorCategoria(idCategoria: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Productos/porCategoria/${idCategoria}`);
  }

  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Categorias`);
  }
}
