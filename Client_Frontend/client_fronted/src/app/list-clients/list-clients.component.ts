import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ClientsglobalService } from '../clientsglobal.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {

  clients: Client[];

  constructor(private clientService:ClientService, private clientsGlobalService: ClientsglobalService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.clientsGlobalService.getListClientsObservable().subscribe(
      clientes => {
        this.clients = clientes;
        console.log('Successfully obtained clients (observable)');
      },
      error => {
        console.error('Error getting clients (observable): ', error);
        alert(error);
      }
    );


  }

  

  getClientsGlobal()
  {
    this.clients = this.clientsGlobalService.getListClients();
  }
  
}
