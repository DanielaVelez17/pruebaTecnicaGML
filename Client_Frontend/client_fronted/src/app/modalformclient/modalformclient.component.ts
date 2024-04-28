import { Component, Input, OnInit, ChangeDetectorRef  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modalformclient',
  templateUrl: './modalformclient.component.html',
  styleUrl: './modalformclient.component.css'
})
export class ModalformclientComponent {
  form: FormGroup;
  client: Client = new Client();
  constructor(public activeModal: NgbActiveModal, private clientService: ClientService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({
      sharedKey: ['', [Validators.required, Validators.pattern(/^[a-zA-ZñÑ]*$/)]],
      businessId: ['', [Validators.required, Validators.pattern(/^[a-zA-ZñÑ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

  }
  
  get f() { return this.form.controls; }

  createClient() {
    this.clientService.createClient(this.client).subscribe(data => {
      console.log('The client was created successfully');
      this.activeModal.close();
      window.location.reload();
    }, error => {
      console.error('Error creating client: ', error);
      alert(error);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('The form is correct. Sent.', this.form.value);
      this.createClient();
    } else {
      console.log('The form is correct, Check the fields.');
    }

  }

  isRequired(controlName: string) {
    const control = this.form.get(controlName);
    return control && control.errors && control?.hasError('required');
  }

}
