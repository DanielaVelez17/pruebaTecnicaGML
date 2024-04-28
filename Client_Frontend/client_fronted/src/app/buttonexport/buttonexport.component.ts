import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ExportarcsvService } from '../exportarcsv.service';
import { DatePipe } from '@angular/common';
import { ClientsglobalService } from '../clientsglobal.service';

@Component({
  selector: 'app-buttonexport',
  templateUrl: './buttonexport.component.html',
  styleUrl: './buttonexport.component.css'
})
export class ButtonexportComponent {

  clientsCsv: Client[];
  headers = ['id', 'sharedKey', 'businessId', 'email', 'phone', 'dataAdded'];

  constructor(private clientService:ClientService, private exportarCsvService: ExportarcsvService, private clientsGlobalService: ClientsglobalService){}

  ngOnInit(): void {
    this.clientsGlobalService.getListClientsObservable().subscribe(
      clientes => {
        this.clientsCsv = clientes;
        console.log('Successfully obtained clients (observable)');
      },
      error => {
        console.error('Error getting clients (observable): ', error);
        alert(error);
      }
    );

    
    
  }

  exportarCsv(): void {
    this.exportarCsvService.exportarCsv(this.clientsCsv, 'clients.csv', this.headers);
  }


  /*Get all the clients*/
  getAllClients()
  {
    this.clientService.getAllClients().subscribe(c => {
      this.exportarCsv();
      console.log('Successfully obtained clients');
    },
    error => {
      console.error('Error getting clients: ', error);
      alert(error);
    })
  }

  

}
