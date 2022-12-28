import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CtfShopService {

  constructor() { }

  public list(): Observable<any[]> {
    return of([
      {
        group: 'Secret Shop',
        items: [
          {
            id: 1,
            title: '[Set] Mystery Box (กล่องสุ่ม)',
            description: '',
          }
        ]
      }
    ])
  }

  public get(id: any): Observable<any> {
    return of({
      id: 1,
      title: '[Set] Mystery Box (กล่องสุ่ม)',
      description: '',
    })
  }

}
