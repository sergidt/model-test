import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {AppModel} from "./models/app.model";
import {CommonModule} from "@angular/common";
import {DepartmentComponent} from "./department/department.component";
import {EmployeeComponent} from "./employee/employee.component";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [AppModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
