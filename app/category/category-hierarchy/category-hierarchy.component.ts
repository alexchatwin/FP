import { Component, OnInit, Renderer, ElementRef, Output } from '@angular/core';
import {CategoryService} from '../Category.Service';
import { Category } from '../category';
import { CatUpdate } from '../cat-update';
import {CatUpdateService} from '../cat-update.Service';

import {ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
import {FormGroup, FormBuilder, FormsModule} from '@angular/forms';

import { DemoComponent } from '../../chart/demo/demo.component';

import { DataService } from '../../chart/data.service';
import { BalanceDTO } from '../../chart/balance/balance-dto';
import {JCat} from './JCat';
import{ CatViewerComponent } from './cat-viewer/cat-viewer.component'
import{ CatNestComponent } from './cat-nest/cat-nest.component'
import{ CatDetailComponent } from './cat-detail/cat-detail.component'

@Component({
  selector: 'app-category-hierarchy',
  templateUrl: './category-hierarchy.component.html',
  styleUrls: ['./category-hierarchy.component.css'],
    providers: [CategoryService, CatUpdateService, DataService]
})
export class CategoryHierarchyComponent implements OnInit {

  globalListenFunc: Function;
  categories: Category[];
  cU:CatUpdate;

  @ViewChild('newCat') newCat;
  @ViewChild('catDetail') catDetail;
  //@Output() visible:boolean;
  constructor(private _CategoryService: CategoryService, private _CatUpdateService: CatUpdateService, 
              private _DataService: DataService, elementRef: ElementRef, renderer: Renderer) { 
    this.globalListenFunc = renderer.listenGlobal('document', 'click', (event) => {

    });
    
              }

  ngOnInit(): any {

        this._CategoryService.getCategories().subscribe(items=>this.categories=items);
    }


    updateParent(categoryId: number, parentCategoryId: number)
    {
      this.cU = new CatUpdate({'categoryId':categoryId, 'parentCategoryId':parentCategoryId});
      this._CatUpdateService.updateParent(this.cU).subscribe(data => {this._CategoryService.getCategories().subscribe(items=>this.categories=items);})
    }

    addCategory()
    {

      console.log(this.newCat.nativeElement.value);
      this.cU=new CatUpdate({'transCat1': this.newCat.nativeElement.value});
      this._CatUpdateService.addCategory(this.cU).subscribe(data => {this._CategoryService.getCategories().subscribe(items=>this.categories=items);})
    }

    deleteCategory(_categoryId:number)
    {
      this.cU=new CatUpdate({'categoryId': _categoryId});
      this._CatUpdateService.deleteCategory(this.cU).subscribe(data => {this._CategoryService.getCategories().subscribe(items=>this.categories=items)})
    }


    catClicked(_categoryId:number)
    {
      this.catDetail.updateCat(_categoryId);
    }


}
