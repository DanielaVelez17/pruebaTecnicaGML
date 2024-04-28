import { Injectable } from '@angular/core';
import { Client } from './client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsglobalService {

  private clients: Client[] = [];
  private listClientsSubject = new BehaviorSubject<Array<Client>>([]);

  constructor() { }

  getListClients(): Client[] {
    return this.clients;
  }

  setListClients(clientes: Client[]): void {
    this.clients = clientes;
    this.listClientsSubject.next(clientes);
  }

  getListClientsObservable(): Observable<Array<Client>> {
    return this.listClientsSubject.asObservable();
  }
}
