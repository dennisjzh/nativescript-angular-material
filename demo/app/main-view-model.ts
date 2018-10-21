import { Observable } from 'tns-core-modules/data/observable';
import { AngularMaterial } from 'nativescript-angular-material';

export class HelloWorldModel extends Observable {
  public message: string;
  private angularMaterial: AngularMaterial;

  constructor() {
    super();

    this.angularMaterial = new AngularMaterial();
    this.message = this.angularMaterial.message;
  }
}
