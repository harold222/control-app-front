import { Component, Input, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TokenService } from '../../../../services/token/token.service';

@Component({
  selector: 'app-error-modal-component',
  templateUrl: './error-modal-component.html',
  styleUrls: ['./error-modal-component.scss']
})
export class ErrorModalComponent {

  public displayClose: boolean = false;
  public errorList: number[] = [];
  public redirectTologIn: boolean = false;
  public iconTimes = faTimes;

  @Input() public close: () => void;

  @Input() set errorListInput(errorList: number[] | null) {
    if (errorList) {
      this.errorList = Array.from(new Set(errorList));
      this.redirectTologIn = this.errorList.includes(1001) || this.errorList.includes(1000);
      this.displayClose = !this.errorList.includes(-1)
          && !this.errorList.includes(1001)
          && !this.errorList.includes(1000);
    }
  }

  @Input() set selectModal(modal: boolean | null) {
    if (modal != null) this.showModal();
  }

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  constructor(private tokenService: TokenService) {}

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
