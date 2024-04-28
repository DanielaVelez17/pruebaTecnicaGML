import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { ClientsglobalService } from './clientsglobal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clientes';


  constructor(private clientService:ClientService, private clientsGlobalService: ClientsglobalService){}

  ngOnInit(): void {
    this.getAllClients();
  }

  private getAllClients()
  {
    this.clientService.getAllClients().subscribe(c => {
      this.clientsGlobalService.setListClients(c);
      console.log('Successfully obtained clients');
    },
    error => {
      console.error('Error getting clients: ', error);
      alert(error);
    })
  }
}
