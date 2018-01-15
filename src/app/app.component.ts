import { Component } from '@angular/core';
import {AppModel, Department} from "./models/app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public appModel: AppModel) {

    this.appModel.update({employee: {name: 'Sergi dote', age: 38,
        department: <Department>{name: 'I+D', city: 'Bcn', numEmployees: 100}}});
  }

}
