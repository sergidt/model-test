import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { share, pluck } from 'rxjs/operators';

export abstract class BaseModel<T> {
  protected _model: BehaviorSubject<T>;

  constructor(initialValue: T = null) {
    this._model = new BehaviorSubject<T>(initialValue);
    this._model.pipe(share());
  }

  update(value: T) {
    this._model.next(value);
  }

  updateProperty<K extends keyof T>(propertyName: K, value: any) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());
    currentValue[propertyName] = value;
    this.update(currentValue);
  }

  updatePropertyDeep(path: string[], value: any) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());
    modifyPropDeep(currentValue, path, value);
    this.update(currentValue);
  }

  removeProperty<K extends keyof T>(propertyName: K) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());
    delete currentValue[propertyName];
    this.update(currentValue);
  }

  updateProperties<K extends keyof T>(props: Array<[K, any]>) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());

    props.forEach(([k, v]: [K, any]) => currentValue[k] = v);
    this.update(currentValue);
  }

  get model$(): Observable<T> {
    return this._model.asObservable();
  }

  getPropertyValue(...keys): any {
    return keys.reduce((value, currentKey) => !!value ? value[currentKey] : value, this._model.value);
  }

  getCurrentValue(): T {
    return this._model.value;
  }

  getProperty(...keys): Observable<any> {
    return this._model.pipe(pluck(...keys));
  }
}

const modifyPropDeep = (object: Object, keys: string[], value: any) => {
  if (object.hasOwnProperty(keys[0])) {
    if (keys.length === 1) {
      object[keys[0]] = value;
    } else {
      modifyPropDeep(object[keys[0]], keys.slice(1), value);
    }
  } else {
    console.error(`Property ${keys[0]} is missing on Object`);
  }
};
