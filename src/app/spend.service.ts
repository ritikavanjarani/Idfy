import { Injectable } from '@angular/core';
import { Spend } from './shared/interfaces/spend.interface';

@Injectable({
  providedIn: 'root'
})
export class SpendService {
  spends :Spend[]=[
    {
      "company_name":"IVP",
      "no_of_employees":20,
      "loan":1000000,
      "no_of_investors":10,
      "percentage_average":60,
      "frequency_of_hiring":65,
      "clients":50,
      "cost":100000,
      
    }
  ]
  fetchDetail():Spend[]{
    return this.spends
  }
  

  constructor() { }
}
