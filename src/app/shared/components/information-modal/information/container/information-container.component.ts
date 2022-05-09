import { Component, OnInit } from '@angular/core';
import { InformationModalService } from '../../service/information-modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-information-container',
  templateUrl: './information-container.component.html'
})
export class InformationContainerComponent implements OnInit {

  public information$: Observable<{ title: string; message: string; }>;
  public selectModal$: Observable<boolean>;

  constructor(private informationModalService: InformationModalService) { }

  public ngOnInit(): void {
    this.information$ = this.informationModalService.selectInformation();
    this.selectModal$ = this.informationModalService.selectModal();
  }

  public close(): void {
    this.informationModalService.setModal(false);
    this.informationModalService.clearInformation();
  }

}
