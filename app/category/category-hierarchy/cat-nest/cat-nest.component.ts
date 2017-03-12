import { Component, OnInit, Input, ElementRef, ViewChild, NgZone, Output, EventEmitter } from '@angular/core';
import {JCat} from '../jcat';
import { CategoryService } from '../../category.service';
import { DomSanitizer, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';
import {CatUpdateService} from '../../cat-update.Service';
import { CatUpdate } from '../../cat-update';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cat-nest',
  templateUrl: './cat-nest.component.html',
  styleUrls: ['./cat-nest.component.css'],
  providers: [CategoryService, CatUpdateService]
})
export class CatNestComponent implements OnInit {
    @Input() public childJCat: JCat[];
    @Output() changed: EventEmitter<CatUpdate> = new EventEmitter<CatUpdate>();  
    @ViewChild('catNest') catNest:ElementRef;
    cU:CatUpdate;    
    outputlist:string;
    JCat:JCat[];
    SafeOutputList:SafeHtml;
    locked:Boolean;

  constructor(private _CategoryService: CategoryService, private sanitizer: DomSanitizer, private _CatUpdateService: CatUpdateService, private zone:NgZone, private router: Router) { }

  ngOnInit() {
      this._CategoryService.getCategoryHierarchy().subscribe(
          items=>
          {
            this.JCat=items;
            this.outputlist="<ul class=\"uk-nestable uk-nestable-list\" data-uk-nestable [style.width.px]=\"150\">";
            var arrayLength = this.JCat.length;
            for (var i = 0; i < arrayLength; i++) { 
              if(this.JCat[i].kids!=0)
              {
                this.outputlist+="<li class=\"uk-nestable-item uk-parent\" data-uk-nestable id=\""+this.JCat[i].id+"\">";
              }
              else
              {
              this.outputlist+="<li class=\"uk-nestable-item\" id=\""+this.JCat[i].id+"\">";
              }
              this.outputlist+="<div class=\"uk-nestable-panel\"  ><div class=\"uk-nestable-toggle\" data-nestable-action=\"toggle\"></div>";
              this.outputlist+=this.JCat[i].name;
              this.outputlist+="</div>";
              if (this.JCat[i].kids!=0)
              {
                this.outputlist+='<ul class="uk-nestable uk-nestable-list" data-uk-nestable>';
                this.returnKids(this.JCat[i], this.outputlist);
                this.outputlist+="</ul>";
              }
              this.outputlist+="</li>";
            }

          
          this.outputlist+="</ul>";
          this.SafeOutputList =
                        this.sanitizer.bypassSecurityTrustHtml
                            (this.outputlist);

          }
        )
        console.log("loaded");
        this.locked=true;

  }

        

 ngAfterViewInit() {
  this.setupListener();
 }

 returnKids(JC:JCat, OL:String) {
  var arrayLength = JC.children.length;
  for (var i = 0; i < arrayLength; i++) {
              if(JC.children[i].kids!=0)
              {
                this.outputlist+="<li class=\"uk-nestable-item uk-parent uk-collapsed\" data-uk-nestable id=\""+JC.children[i].id+"\">";
              }
              else
              {
              this.outputlist+="<li class=\"uk-nestable-item\" id=\""+JC.children[i].id+"\">";
              }
              this.outputlist+="<div class=\"uk-nestable-panel\"><div class=\"uk-nestable-toggle\" data-nestable-action=\"toggle\"></div>";
              this.outputlist+=JC.children[i].name;
              this.outputlist+="</div>";
              if (JC.children[i].kids!=0)
              {
                this.outputlist+='<ul class="uk-nestable uk-nestable-list" data-uk-nestable>';
                this.returnKids(JC.children[i], this.outputlist);
                this.outputlist+="</ul>";
              }
              this.outputlist+="</li>";
  }
  }

  setupListener()
  {
              $(this.catNest.nativeElement).on('stop.uk.nestable', (e, el, type) => {
                if (this.locked)
                {
                console.log('locked')
                }
                else
                {
                this.locked=true;
                console.log('not locked');
                console.log("category ID" + type.attr('id'));
                console.log("new parent ID" + type.parent().parent().attr('id'));
                this.updateParent(type.attr('id'),type.parent().parent().attr('id'));

                }
          });

           $(this.catNest.nativeElement).on('start.uk.nestable', (e, el, type) => {
             this.locked=false;
           });
  }

  updateParent(categoryId: number, parentCategoryId: number)
  {
      this.cU = new CatUpdate({'categoryId':categoryId, 'parentCategoryId':parentCategoryId});
      this.changed.emit(this.cU);

      

  
  }




  
  
 
}
