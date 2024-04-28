import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalformclientComponent } from './modalformclient/modalformclient.component';
import { ButtoncreateclientComponent } from './buttoncreateclient/buttoncreateclient.component';
import { ButtonexportComponent } from './buttonexport/buttonexport.component';
import { NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchclientComponent } from './searchclient/searchclient.component';
import { FormadvancedsearchComponent } from './formadvancedsearch/formadvancedsearch.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    SidebarComponent,
    ModalformclientComponent,
    ButtoncreateclientComponent,
    ButtonexportComponent,
    SearchclientComponent,
    FormadvancedsearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration(),
    ListClientsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
