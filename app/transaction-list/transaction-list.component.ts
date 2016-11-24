import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transaction } from './transaction';

import {TransactionService} from './Transaction.Service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers: [TransactionService]
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];

  constructor(private _TransactionService: TransactionService) { }

  ngOnInit(): any {
    this._TransactionService.getTransactions().subscribe(items=>this.transactions=items);
    
    }
  }

