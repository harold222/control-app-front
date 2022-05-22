import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InterfaceUser } from '../../../store/interfaces/InterfaceUser';
import { RecordService } from '../../../../../shared/services/record/record.service';
import { FaultsStoreService } from '../../service/faults.store.service';
import { InterfaceRegistration } from '../../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() public idStation: string | null;

  @Input() public loading: boolean | null;

  @Input() public usersByStation: InterfaceUser[] | null;

  @Input() public recordsByUser: InterfaceRegistration[] | null;

  @Input() public userWithoutRecord: boolean | null;

  public modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private RecordService: RecordService,
    private faultsStoreService: FaultsStoreService
  ) { }

  public ngOnInit(): void {
  }

  public openModal(idUser: string, template: any) {
    this.faultsStoreService.getRecordsByUser({ idOperator: idUser, idStation: this.idStation!! });
    this.modalRef = this.modalService.show(template);
  }

  public closeModal() {
    this.faultsStoreService.setUserWithoutRecords(false);
    this.modalRef?.hide();
  }

}
