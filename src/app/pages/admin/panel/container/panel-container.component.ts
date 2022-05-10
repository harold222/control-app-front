import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.html',
})
export class PanelContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // pasar informacion del localstorage a ngrx aca y no cargar el componente hasta que se cargue esta
    // info mientras crear un loading
  }

}
