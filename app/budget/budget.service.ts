
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { BudgetDTO } from './budget-dto';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class BudgetService {

  constructor(private http: Http) { }

  getBudgets():Observable<BudgetDTO[]>
    {
    return this.http.get("http://localhost:61694/api/budgets/0")
    .map(res => res.json() as BudgetDTO[])
    }
    
  getBudget(_categoryId):Observable<BudgetDTO[]>
    {
    return this.http.get("http://localhost:61694/api/budgets/" + _categoryId)
    .map(res => res.json() as BudgetDTO[])
    }

  updateBudgetDt(cbId, budgetDt)
  {
     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/budgets/update/date/' + cbId+'/'+ budgetDt, headers).map((res: Response) => res.json());
  }

    updateBudgetAm(cbId, budgetAm)
  {
     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:61694/api/budgets/update/amount/' + cbId+'/'+ budgetAm, headers).map((res: Response) => res.json());
  }
    
  addBudgetLike(categoryId){
    let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:61694/api/budgets/update/new/' + categoryId+'/0', headers).map((res: Response) => res.json());

  }

    deleteBudget(cbId){
    let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:61694/api/budgets/update/delete/' + cbId+'/0', headers).map((res: Response) => res.json());

  }



}
