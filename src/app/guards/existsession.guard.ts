import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InformationModalService } from '../shared/components/information-modal/service/information-modal.service';

@Injectable({
  providedIn: 'root'
})
export class ExistsessionGuard implements CanActivate {

  constructor(
    public router: Router,
    public informationModalService: InformationModalService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const user: string | null = localStorage.getItem('userInformation')
    const allowedRoles = ['ADMIN_ROLE', 'OPERATOR_ROLE', 'SUPERVISOR_ROLE', 'HUMAN_RESOURCES_ROLE'];
    let error: boolean = false;

    if (user) {
      try {
        let propertiesUser = JSON.parse(user);
        if (allowedRoles.includes(propertiesUser.rol)) {
          if (Date.now() >= propertiesUser.exp * 1000) {
            this.informationModalService.setInformation('Vuelva a iniciar sesion', 'Su sesion ha expirado')
            this.informationModalService.setModal(true)
          } else error = true;
        }
      } catch (error) { }
    }

    !error && this.returnError()
    return error;
  }

  private returnError(): boolean {
    this.informationModalService.setInformation('Ha ocurrido un error', 'Vuelva a iniciar sesion')
    this.informationModalService.setModal(true)
    this.router.navigateByUrl('')
    return false;
  }
  
}
