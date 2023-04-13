import { Component } from '@angular/core';
import { EnviarService } from '../../services/enviar.service';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styles: [],
})
export class EnviarComponent {
  constructor(private enviarService: EnviarService) {}

  enviarDatosCliente() {
    // Datos del cliente a enviar
    const datos = { nombre: 'Juan', apellido: 'Pérez', edad: 30 };

    // Llamamos al método del servicio para establecer los datos del cliente
    this.enviarService.setDatosCliente(datos);
  }
}
