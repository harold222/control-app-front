import { Component, Input, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TokenService } from '../../../../services/token/token.service';
import { ErrorModalService } from '../../service/error-modal.service';

@Component({
  selector: 'app-error-modal-component',
  templateUrl: './error-modal-component.html',
  styleUrls: ['./error-modal-component.scss']
})
export class ErrorModalComponent {

  public iconTimes = faTimes;

  @Input() public close: () => void;
  @Input() public error: string | null;

  @Input() set selectModal(modal: boolean | null) {
    if (modal != null && modal === true) this.showModal();
  }

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  constructor(private tokenService: TokenService, private ErrorModalService: ErrorModalService) {}

  public showModal() {
    this.modal && this.modal.show();
  }

  public closeModal(): void {
    this.close();
    this.modal.hide();
  }

  public goLogin(): void {
    this.tokenService.removeToken()
    this.closeModal();
  }
}
