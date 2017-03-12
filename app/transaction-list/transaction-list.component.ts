import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transaction } from './transaction';
import { Category } from '../category/category';
import { CatUpdate } from '../category/cat-update';

import {TransactionService} from './Transaction.Service';
import {CategoryService} from '../category/Category.Service';
import {CatUpdateService} from '../category/cat-update.Service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers: [TransactionService, CategoryService, CatUpdateService]
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];
  categories: Category[];
  cU:CatUpdate;
  constructor(private _TransactionService: TransactionService, private _CategoryService: CategoryService, private _CatUpdateService: CatUpdateService) { }

  ngOnInit(): any {
    this._TransactionService.getTransactions().subscribe(items=>this.transactions=items);
    this._CategoryService.getCategories().subscribe(items=>this.categories=items);
    
    }
test;
  updateCategory(transId: number, categoryId: number)
  {
    this.cU= new CatUpdate({'transId':transId, 'categoryId':categoryId});
    this._CatUpdateService.updateCatgeory(this.cU).subscribe(data => {this._TransactionService.getTransactions().subscribe(items=>this.transactions=items);})
  }
  updateIsRefund(transId: number, isRefund: boolean)
  {
    this.cU= new CatUpdate({'transId':transId, 'isRefund':isRefund});
    this._CatUpdateService.updateIsRefund(this.cU).subscribe(data => {this._TransactionService.getTransactions().subscribe(items=>this.transactions=items);})
  }
  updateEffectiveDate(transId: number, effectiveDt: Date)
  {
    console.log(effectiveDt);
    this.cU= new CatUpdate({'transId':transId, 'effectiveDt':effectiveDt});
    this._CatUpdateService.updateEffectiveDate(this.cU).subscribe(data => {this._TransactionService.getTransactions().subscribe(items=>this.transactions=items);})
  }
  }

