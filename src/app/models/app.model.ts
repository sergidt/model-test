import { BaseModel } from './base.model';
import {Injectable} from '@angular/core';

export interface Employee {
  name: string;
  age: number;
  department: Department;
}

export interface Department {
  name: string;
  numEmployees: number;
  city: string;
}

export interface AppModelState {
  employee?: Employee;
}

@Injectable()
export class AppModel extends BaseModel<AppModelState> {

  constructor() {
    super({});
  }
}
