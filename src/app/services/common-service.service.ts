import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  addSum(a: number, b: number): number {
    return a + b
  }

}
