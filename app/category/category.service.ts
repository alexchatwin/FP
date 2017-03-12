import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Category } from './category';
import {Observable} from 'rxjs/Rx';
import {JCat} from './category-hierarchy/jcat';
import 'rxjs/Rx';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

getCategories():Observable<Category[]>
{
 return this.http.get("http://localhost:61694/api/categories/")
 .map(res => res.json() as Category[])
}

getCategoryHierarchy():Observable<JCat[]>
{

 return this.http.get("http://localhost:61694/api/categories/hierarchy2")
     .map(res => res.json())
    .map((jcat: Array<JCat>)=> {
    let result:Array<JCat> = new Array<JCat>();
        var arrayLength = jcat.length;
        for (var i = 0; i < arrayLength; i++) {
          result.push(new JCat(jcat[i].id, jcat[i].name, jcat[i].creditAm, jcat[i].debitAm, jcat[i].budgetAm, jcat[i].remainingBudget, jcat[i].netAdjusted, jcat[i].parentNames, jcat[i].newRow, jcat[i].kids, jcat[i].children));
        }
      return result;
    })      
}

getCategoryHierarchyMonth(month: number, year: number):Observable<JCat[]>
{

 return this.http.get("http://localhost:61694/api/categories/hierarchy2/"+month+"/20"+year)
     .map(res => res.json())
    .map((jcat: Array<JCat>)=> {
    let result:Array<JCat> = new Array<JCat>();
        var arrayLength = jcat.length;
        for (var i = 0; i < arrayLength; i++) {
          result.push(new JCat(jcat[i].id, jcat[i].name, jcat[i].creditAm, jcat[i].debitAm, jcat[i].budgetAm, jcat[i].remainingBudget, jcat[i].netAdjusted, jcat[i].parentNames, jcat[i].newRow, jcat[i].kids, jcat[i].children));
        }
      return result;
    })      
}







}
