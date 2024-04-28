import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //URL get all clients in backend
  private baseURL="http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  //Method for get all the clients
  getAllClients():Observable<Client[]>
  {
    return this.httpClient.get<Client[]>(`${this.baseURL+'clients'}`).pipe(
      catchError(error => {
        console.error('Error getting clients:', error);
        return throwError('Error getting clients');
      })
    );
  }

  //Method for create a client
  createClient(client:Client):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL+'createClient'}`,client).pipe(
      catchError(error => {
        console.error('Error saving the client', error);
        return throwError('Error saving the client');
      })
    );

  }

  //Method for search clients by parameters
  searchClients(client:Client):Observable<Client[]>
  {
    let params = new HttpParams();
    params = params.append('sharedKey', client.sharedKey);
    return this.httpClient.get<Client[]>(`${this.baseURL+'searchClients'}`, { params: params }).pipe(
      catchError(error => {
        console.error('Error searching clients:', error);
        return throwError('Error searching clients');
      })
    );
  }

  advancedSearch(client: any):Observable<Client[]>
  {
    let params = new HttpParams();
    params = params.append('client', JSON.stringify(client));
    return this.httpClient.get<Client[]>(`${this.baseURL+'advancedSearchClients'}`, { params: params }).pipe(
      catchError(error => {
        console.error('Error advanced search', error);
        return throwError('Error advanced search');
      })
    );

  }
}
