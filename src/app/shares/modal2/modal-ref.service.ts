import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalRefService {

  closing?: EventEmitter<any>

  closed?: EventEmitter<any>

  close = (): void => {};

}
