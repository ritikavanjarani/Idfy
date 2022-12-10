import { Component, Input, OnInit } from '@angular/core';
import { Spend } from '../shared/interfaces/spend.interface';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  
  @Input() sf!: Spend;
  // profit=(this.sf.cost*this.sf.clients)-this.sf.loan
  constructor() { }

  ngOnInit(): void {
  }

}
