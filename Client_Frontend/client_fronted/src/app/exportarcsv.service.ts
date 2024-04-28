import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportarcsvService {

  constructor() { }

  exportarCsv(data: any[], fileName: string, headers: string[]): void {
    // Crear contenido CSV
    const csvContent = this.generateCsvContent(data, headers);
    
    // Convertir a Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

    // Guardar el archivo
    saveAs(blob, fileName);
  }

  private generateCsvContent(data: any[], headers: string[]): string {
    let csvContent = '';

    // Agregar encabezados
    csvContent += headers.join(',') + '\n';

    // Agregar filas de datos
    data.forEach((item) => {
      const values = headers.map((header) => item[header]);
      csvContent += values.join(',') + '\n';
    });

    return csvContent;
  }
}
