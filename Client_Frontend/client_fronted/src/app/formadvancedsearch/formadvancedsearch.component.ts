import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ClientsglobalService } from '../clientsglobal.service';

@Component({
  selector: 'app-formadvancedsearch',
  templateUrl: './formadvancedsearch.component.html',
  styleUrl: './formadvancedsearch.component.css'
})
export class FormadvancedsearchComponent {

  openForm: boolean = true;

  constructor(private clientService: ClientService, private clientsGlobalService: ClientsglobalService){}

  client: Client = new Client();
  form = {
    business_id: '',
    phone: null,
    email: '',
    date: '',
    date2: ''
  };

  searchClient()
  {
    this.clientService.advancedSearch(this.form).subscribe(data => {
      console.log(data);
      this.clientsGlobalService.setListClients(data);
      this.openForm = !this.openForm;
      console.log('Successfully obtained clients advanced search');
    }, error => 
      {
        console.error('Error getting clients advanced search: ', error);
        alert(error);
      });
  }

  onSubmit()
  {
    console.log(this.client);
    this.searchClient();
    
  }

  onCancel()
  {
    this.openForm = !this.openForm;
  }

}
