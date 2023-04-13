import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnviarService {
  private datosClienteSubject = new BehaviorSubject<any>(null);
  private datosCliente = this.datosClienteSubject.asObservable();

  setDatosCliente(datos: any) {
    this.datosClienteSubject.next(datos);
  }

  getDatosCliente() {
    return this.datosCliente;
  }
}
