import { Component, OnInit } from '@angular/core';
import { Spend } from '../shared/interfaces/spend.interface';
import { SpendService } from '../spend.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css']
})
export class SpendComponent implements OnInit {
  spends!:Spend[]
  selectedSpend!:Spend
  selectedProfit!:Spend
  constructor(private spendservice:SpendService) { }
  // viewDetails(student:Spend){
  //   this.selectedStudent=student
  // }
  ngOnInit(): void {
    this.getSpendDetails()
  }
  
  getSpendDetails(){
    this.spends=this.spendservice.fetchDetail()
  }
  rating(spend:Spend){
    this.selectedSpend=spend

  }
  profit(spend:Spend){
    this.selectedProfit=spend
  }

}
 