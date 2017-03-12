import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { BalanceDTO } from './balance-dto';

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  providers:[DataService]
})
export class BalanceComponent implements OnInit {
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  balDTO: BalanceDTO;
  rawBalDTO: any;
  public lineChartData:Array<any>=[{data: [], label: ''}];
  public lineChartLabels:Array<any>;
  public lineChartOptions:any;
  public lineChartColors:Array<any>;
  public lineChartLegend:boolean = true;
  public chartType:string = 'line';

  constructor(private _DataService: DataService) { }
 
  ngOnInit() {


    this.lineChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
  };
  this.lineChartColors = [
    { // grey
      backgroundColor: 'rgba(0,256,0,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(256,0,0,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  }
  public chartClicked(e:any):void {
    if (e.active[0] != null)
    {
    this.clicked.emit(e.active[0]._view.label);
    }
    else{
      this.clicked.emit('reset');
    }
  }

}
