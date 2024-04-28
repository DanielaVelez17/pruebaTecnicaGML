import { Component, numberAttribute } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import {Router} from '@angular/router';
import { ClientsglobalService } from '../clientsglobal.service';
import { ListClientsComponent } from '../list-clients/list-clients.component';

@Component({
  selector: 'app-searchclient',
  templateUrl: './searchclient.component.html',
  styleUrl: './searchclient.component.css'
})
export class SearchclientComponent {

  openForm: boolean = false;

  

  client: Client = new Client();
  constructor(private clientService: ClientService, private clientsGlobalService: ClientsglobalService, private router: Router, private listClients: ListClientsComponent) { }

  toggleForm(): void {
    this.openForm = !this.openForm;
  }

  searchClient()
  {
    this.clientService.searchClients(this.client).subscribe(data => {
      console.log('Successfully obtained clients');
      this.clientsGlobalService.setListClients(data);
    }, error => {
      console.error('Error searching clients: ', error);
      alert(error);
    });
  }

  onSubmit()
  {
    console.log(this.client);
    this.searchClient();
  }

}
