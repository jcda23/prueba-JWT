import { Component, OnInit } from '@angular/core';
import { EnviarService } from 'src/app/auth/services/enviar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  datosCliente: any;

  constructor(private enviarService: EnviarService) {}

  ngOnInit() {
    // Llamamos al método del servicio para establecer los datos del cliente
    this.enviarService.setDatosCliente({
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 30,
    });

    // Nos suscribimos al observable del servicio para obtener los datos del cliente
    this.enviarService.getDatosCliente().subscribe((datos) => {
      console.log('DATOS DEL CLIENTE', datos);
      this.datosCliente = datos;
    });
  }
}
