import {Component} from "@angular/core";
import {AngularMaterial} from "nativescript-angular-material";

@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
})

export class MainComponent {

    public message: string;
    private angularMaterial: AngularMaterial;

    constructor() {
       this.angularMaterial = new AngularMaterial();
       this.message = this.angularMaterial.message;
    }
}
