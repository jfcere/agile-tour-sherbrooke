import { AfterViewInit, Component, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tableContainer') tableContainer: ElementRef

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
    // ugly fix for mobile as fixed column in table was not correctly positioned
    // due to loading time of other element such as fonts and images
    setTimeout(() => {
      this.renderer.setElementClass(this.tableContainer.nativeElement, 'table-container', true);
    }, 1000);
  }
}
