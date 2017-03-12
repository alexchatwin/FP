import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../chart/data.service';
import { BalanceDTO } from '../chart/balance/balance-dto';
import { ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
import { JCat } from '../category/category-hierarchy/jcat';
import { CatViewerComponent } from '../category/category-hierarchy/cat-viewer/cat-viewer.component';

import { CatNestComponent } from '../category/category-hierarchy/cat-nest/cat-nest.component';
import { CategoryService } from '../category/category.service';
import {CatUpdateService} from '../category/cat-update.Service';
import { CatUpdate } from '../category/cat-update';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers:[DataService, CategoryService, CatUpdateService]
})
export class SummaryComponent implements OnInit {
JCat:JCat[];


  constructor(private _DataService: DataService, private _CategoryService: CategoryService, private _CatUpdateService: CatUpdateService) { }
  @ViewChild('daily') dailyChart;
  @ViewChild('monthnet') monthnetChart;
  @ViewChild('appCatNest') appCatNest;
  ngOnInit() {
      this.monthnetChart.chartType = 'bar';
      this._DataService.getBalances().subscribe(
        items=>
        {
          this.dailyChart.lineChartData=items.data;
          this.dailyChart.lineChartLabels = items.labels;
        });
      this._DataService.monthBalances().subscribe(
        items=>
        {
          this.monthnetChart.lineChartData=items.data;
          this.monthnetChart.lineChartLabels = items.labels;
        });
        this._CategoryService.getCategoryHierarchy().subscribe(
          items=>this.JCat=items
        )

  }

  public chartClicked(message:string):void {
        if (message=="reset")
        {
        this._DataService.getBalances().subscribe(
        items=>
        {
          this.dailyChart.lineChartData=items.data;
          this.dailyChart.lineChartLabels = items.labels;
        });
        this._CategoryService.getCategoryHierarchy().subscribe(
        items=>this.JCat=items
        )
        }
        else
        {
        var months = {jan:1,feb:2,mar:3,apr:4,may:5,jun:6,
        jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
        var p = message.split('-');
        console.log(months[p[0].toLowerCase()]);
        this._DataService.getBalancesMonth(months[p[0].toLowerCase()], Number(p[1])).subscribe(
        items=>
        {
          this.dailyChart.lineChartData=items.data;
          this.dailyChart.lineChartLabels = items.labels;
        });
        this._CategoryService.getCategoryHierarchyMonth(months[p[0].toLowerCase()], Number(p[1])).subscribe(
        items=>this.JCat=items
        )        
        }
      }

      public parentChange(cU: CatUpdate):void {
            console.log(cU);
            this._CatUpdateService.updateParent(cU).subscribe(data => {this._CategoryService.getCategoryHierarchy().subscribe(items=>this.JCat=items)});
            this.appCatNest.childJCat=this.JCat;
      }

  

}
