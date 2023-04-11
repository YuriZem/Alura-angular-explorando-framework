import { Component } from '@angular/core';
import * as internal from 'stream';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;
  transferir() {
    console.log(this.valor)
    console.log(this.destino)
  }
}
