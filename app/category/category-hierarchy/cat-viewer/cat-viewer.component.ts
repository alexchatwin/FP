import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {JCat} from '../jcat';

@Component({
  selector: 'app-cat-viewer',
  templateUrl: './cat-viewer.component.html',
  styleUrls: ['./cat-viewer.component.css']
})
export class CatViewerComponent implements OnInit {
    @Input() public childJCat: JCat[];
    //@Input() visible: boolean;
    showChildren: boolean;
  constructor() { }

  ngOnInit() {
  }

  

}
