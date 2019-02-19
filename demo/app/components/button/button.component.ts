import {Component} from "@angular/core";


@Component({
    selector: "ns-button",
    moduleId: module.id,
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.css"]
})

export class ButtonComponent {

    constructor() {}

    onTap(e) {
        console.log("tap - " + e.object.typeName);
    }

}
