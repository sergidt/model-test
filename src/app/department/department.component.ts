import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Department} from "../models/app.model";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentComponent  {

  @Input() department: Department;

}
