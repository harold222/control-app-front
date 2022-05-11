import { Component, OnInit } from '@angular/core';
import { ErrorModalService } from '../../service/error-modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-modal-container',
  templateUrl: './error-modal-container.html',
})
export class ErrorModalContainer implements OnInit {

  public errorList$: Observable<string>;
  public selectModal$: Observable<boolean>;

  constructor(private ErrorModalService: ErrorModalService) {}
  
  public ngOnInit(): void {
    this.errorList$ = this.ErrorModalService.selectErrors();
    this.selectModal$ = this.ErrorModalService.selectModal();
  }

  public close(): void {
    this.ErrorModalService.setModal(false);
    this.ErrorModalService.clearErrors();
  }
}
