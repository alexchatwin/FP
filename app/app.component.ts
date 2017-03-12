import { Component, HostListener, ViewChild, AfterViewInit , ElementRef} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'FP v1';
  @ViewChild('nest') nest:ElementRef;

 ngAfterViewInit() {


 }
  
}
