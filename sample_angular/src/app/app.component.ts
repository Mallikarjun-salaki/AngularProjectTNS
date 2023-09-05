import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample_angular';
  Name='puneeth';
  Number1:number=24;
  Number2:number=25;

  addition()
  {
    return this.Number1+this.Number2;
  }

}
