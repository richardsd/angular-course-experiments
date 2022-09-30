import { Component } from '@angular/core';

type ClickObj = {numClick: number, timestamp: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible: boolean;
  clickArray: ClickObj[] = [];
  clickCounter: number = 0;

  _toggleDetailsVisibility(): void {
    this.detailsVisible = !this.detailsVisible;
    this.clickCounter += 1;
    this.clickArray.push({ numClick: this.clickCounter, timestamp: new Date().toUTCString() });
  }

  _getClass(clickObj: ClickObj): boolean {
    return clickObj.numClick > 5;
  }
}
