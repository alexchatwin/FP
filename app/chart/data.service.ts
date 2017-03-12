import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { BalanceDTO, lineItem } from './balance/balance-dto';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

    getBalances():Observable<BalanceDTO>
    {
    return this.http.get("http://localhost:61694/api/balance/0/0")
    .map(res => {return res.json();})
    .map((res: BalanceDTO)=> {
      return new BalanceDTO(<lineItem[]>res.data, res.labels);
    })
    }
    getBalancesMonth(month: number, year: number):Observable<BalanceDTO>
    {
    return this.http.get("http://localhost:61694/api/balance/"+month+"/20"+year)
    .map(res => {return res.json();})
    .map((res: BalanceDTO)=> {
      return new BalanceDTO(<lineItem[]>res.data, res.labels);
    })
    }

    monthBalances():Observable<BalanceDTO>
    {
    
    return this.http.get("http://localhost:61694/api/monthbalance/1")
    .map(res => {return res.json();})
    .map((res: BalanceDTO)=> {
      return new BalanceDTO(<lineItem[]>res.data, res.labels);
    })
    }

    budgetSummary(_categoryId: number):Observable<BalanceDTO>
    {
    
    return this.http.get("http://localhost:61694/api/BudgetSummary/" + _categoryId)
    .map(res => {return res.json();})
    .map((res: BalanceDTO)=> {
      return new BalanceDTO(<lineItem[]>res.data, res.labels);
    })
    }


}
