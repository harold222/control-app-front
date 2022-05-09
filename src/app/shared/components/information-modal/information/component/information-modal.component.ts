import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { InformationModalService } from '../../service/information-modal.service';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.scss']
})
export class InformationModalComponent {

  @Input() public close: () => void;

  @Input() set selectModal(modal: boolean | null) {
    if (modal != null && modal === true) this.showModal();
  }

  @Input() public information: { title: string; message: string } | null;

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  constructor(private informationModalService: InformationModalService) { }

  public showModal() {
    if (this.modal) {
      this.modal.show();
    } else {
      setTimeout(() => {
        this.modal.show();
      }, 350);
    }
  }

  public closeModal(): void {
    this.close();
    this.modal.hide();
  }
}
