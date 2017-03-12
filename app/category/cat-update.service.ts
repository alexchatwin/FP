import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CatUpdate } from './cat-update';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class CatUpdateService {

  constructor(private http: Http) { }
///api/changecategory/{type}/{transactionId}/{payload}
  updateCatgeory(catUpdate) {
    let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/txncatchange/' + catUpdate.transId+'/'+catUpdate.categoryId, headers).map((res: Response) => res.json());
  }

    updateIsRefund(catUpdate) {
    let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/refund/' + catUpdate.transId+'/'+catUpdate.isRefund, headers).map((res: Response) => res.json());
  }

    updateEffectiveDate(catUpdate) {
    let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/effectivedt/' + catUpdate.transId+'/'+catUpdate.effectiveDt, headers).map((res: Response) => res.json());
  }

  updateParent(catUpdate)
  {
     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/parent/' + catUpdate.categoryId+'/'+catUpdate.parentCategoryId, headers).map((res: Response) => res.json());
  }

  addCategory(catUpdate){
     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/add/0/'+catUpdate.transCat1, headers).map((res: Response) => res.json());
  }

    deleteCategory(catUpdate){
     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(catUpdate);
    return this.http.put('http://localhost:61694/api/changecategory/delete/'+catUpdate.categoryId+'/del', headers).map((res: Response) => res.json());
  }

}
