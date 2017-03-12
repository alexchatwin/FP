import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CategoryHierarchyComponent } from './category/category-hierarchy/category-hierarchy.component';
import { DemoComponent } from './chart/demo/demo.component';
 
import {  ChartsModule } from 'ng2-charts/ng2-charts';
import { BudgetComponent } from './budget/budget.component';
import { BalanceComponent } from './chart/balance/balance.component';
import { SummaryComponent } from './summary/summary.component';
import { CatViewerComponent } from './category/category-hierarchy/cat-viewer/cat-viewer.component';
import { CatDetailComponent } from './category/category-hierarchy/cat-detail/cat-detail.component';
import { CatNestComponent } from './category/category-hierarchy/cat-nest/cat-nest.component';



@NgModule({
  declarations: [
    AppComponent,

    TransactionListComponent,

    CategoryHierarchyComponent,

    DemoComponent,

    BudgetComponent,

    BalanceComponent,

    SummaryComponent,

    CatViewerComponent,

    CatDetailComponent,

    CatNestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
     ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
 