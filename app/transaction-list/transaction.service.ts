import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Transaction } from './transaction';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


let transactions = [
    {  "transId":298,

    },
    {  "transId":298,

    }
]

@Injectable()
export class TransactionService {

  constructor(private http: Http) { }


getTransactions():Observable<Transaction[]>
{
 return this.http.get("http://localhost:61694/api/TransactionsApi/")
 .map(res => res.json() as Transaction[])
}
}


