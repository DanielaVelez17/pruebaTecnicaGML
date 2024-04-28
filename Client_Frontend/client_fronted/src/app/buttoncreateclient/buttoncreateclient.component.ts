import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalformclientComponent } from '../modalformclient/modalformclient.component';

@Component({
  selector: 'app-buttoncreateclient',
  templateUrl: './buttoncreateclient.component.html',
  styleUrl: './buttoncreateclient.component.css'
})
export class ButtoncreateclientComponent {
  constructor(private modalService: NgbModal) { }

  openModal() {
    const modalRef = this.modalService.open(ModalformclientComponent);
  }

}
