import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  items = Array.from({ length: 100 }, (_, i) => `Propuesta ${i + 1}`); // Ejemplo de 50 items
  pagedItems: string[] = []; // Items que se muestran en la página actual
  page = 1; // Página inicial
  itemsPerPage = 9; // Número de cards por página
  totalPages = Math.ceil(this.items.length / this.itemsPerPage); // Total de páginas

  constructor() {
    this.setPage(this.page);
    
  }

  // Actualizar los items a mostrar según la página
  setPage(page: number) {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.items.slice(startIndex, endIndex);
  }

  // Manejar el cambio de página
  onPageChange(page: number) {
    this.page = page; // Establecer la página
    this.setPage(page); // Actualizar los items a mostrar
  }
}