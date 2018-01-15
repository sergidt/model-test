import {ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from "@angular/core";
import {Employee} from "../models/app.model";
import {toggleClass} from "../models/utils";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent  {

  private _employee: Employee;

  constructor(private el : ElementRef, private zone: NgZone){}

  @Input() set employee(value: Employee) {
  this._employee = value;
    toggleClass(this.el, this.zone);
  }

  get employee(): Employee {
    return this._employee;
  }

}
