import { Component, Input, OnInit } from '@angular/core';
import { InterfaceStations } from '../../store/interfaces/InterfaceStations';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { Router } from '@angular/router';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';
import { IRecord } from '../../../../shared/services/record/model/IRecord';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() public schedule: string | null;

  @Input() public stations: InterfaceStations[] | null;

  @Input() public loading: boolean | null;

  @Input() public usersByStation: InterfaceUser[] | null;

  @Input() public userInfo: InterfaceUserInfo | null;

  public idStation: string;

  @Input() set idSelectedStation(id: string | null) {
    if (id) {
      this.idStation = id;
      this.adminStoreService.getRecordBySupervisor(this.userInfo?.id!!, this.idStation);
    }
  }

  @Input() set record(currentRecord: IRecord | null) {
    if (currentRecord) {
      if (currentRecord._id) {
        // deberia traer todos los usuarios de este historial y guardarlos en usersByStations: response.users tipo InterfaceUser[]
        // deberia enviar id supervisor, id estacion y createdTime al a ruta /api/registration
        // para obtener los usuarios que se crearon de ese registro anterior y con eso los guardo
      }
    } else {
      // create a new register and record by station
      this.adminStoreService.getUsersByStation(this.idStation);
    }
  }

  constructor(
    private adminStoreService: AdminStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  public selectStation(id: string): void {
    this.adminStoreService.setIdSelectedStation(id);
  }

  public selectUser(id: string): void {
    this.router.navigate(
      [`/main/register/${this.idStation}/${id}`],
      {
        queryParams: { schedule: 'ingress' }
      }
    );
  }

  // deberia existir un boton en el listado de escojer usuarios el cual cambie el estado
  // del historial completedIngress a true y igualmente para completedExit

  // con eso para un supervisor solo podra tener un registro de horario abierto es decir
  // si se crea un historial y se recarga la pagina se deberia buscar que exista ese registro
  // si existe y completedIngress es falso deberia cargar los datos nuevamente

}
