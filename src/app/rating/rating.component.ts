import { Component, Input, OnInit } from '@angular/core';
import { Spend } from '../shared/interfaces/spend.interface';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() ss!: Spend;
  // ap=this.ss.percentage_average
  
  constructor() { }

  ngOnInit(): void {
  }

}
