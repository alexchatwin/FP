import { Route } from '@angular/router';
 
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CategoryHierarchyComponent } from './category/category-hierarchy/category-hierarchy.component';
import { DemoComponent } from './chart/demo/demo.component';
import { BudgetComponent } from './budget/budget.component';
import { SummaryComponent } from './summary/summary.component';
 
export const routes: Route[] = [
  { path: 'trans', component: TransactionListComponent },
  { path: 'category', component: CategoryHierarchyComponent },
  { path: 'chart', component: DemoComponent },
  
  { path: 'budget', component: BudgetComponent },
  { path: 'summary', component: SummaryComponent }
];