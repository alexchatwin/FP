import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './budget-dto';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  providers: [BudgetService]
})

export class BudgetComponent implements OnInit {
  @Input() public categoryId: Number = 0;
  budgets: BudgetDTO[];

  constructor(private _BudgetService: BudgetService) { }

  ngOnInit() {
    if (this.categoryId!=null)
    {
    this._BudgetService.getBudgets().subscribe(items=>this.budgets=items);
    }
    else
    {
    this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);
    }
  }

  updateBudgetDt(cbId: number, budgetDate: string)    {
      this._BudgetService.updateBudgetDt(cbId ,budgetDate).subscribe(data => {this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);})
    }

  updateBudgetAm(cbId: number, budgetAm: Number)    {
    this._BudgetService.updateBudgetAm(cbId ,budgetAm).subscribe(data => {this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);})
  }

  addBudgetLike(categoryId: Number)
  {
    this._BudgetService.addBudgetLike(categoryId).subscribe(data => {this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);})
  }


  deleteBudget(cbId: Number)
  {
    this._BudgetService.deleteBudget(cbId).subscribe(data => {this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);})
  }

  update()
  {
    if (this.categoryId==null)
    {
    this._BudgetService.getBudgets().subscribe(items=>this.budgets=items);
    }
    else
    {
    this._BudgetService.getBudget(this.categoryId).subscribe(items=>this.budgets=items);
    }
  }
}
