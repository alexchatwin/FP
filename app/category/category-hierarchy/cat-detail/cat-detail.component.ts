import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, Input } from '@angular/core';
import { BudgetComponent } from '../../../budget/budget.component'
import { DataService } from '../../../chart/data.service';
import { BalanceDTO } from '../../../chart/balance/balance-dto';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
@ViewChild('catBudget') catBudget;
@ViewChild('catChart') catChart;
@Input() public categoryId: number = 0;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
  }

  updateCat(_categoryId: number)
  {
    this.categoryId=_categoryId;
    this.catBudget.categoryId=_categoryId;
    this.catBudget.update();

              this._DataService.budgetSummary(this.categoryId).subscribe(
        items=>
        {
          this.catChart.lineChartData=items.data;
          this.catChart.lineChartLabels = items.labels;
        });
  }

}
