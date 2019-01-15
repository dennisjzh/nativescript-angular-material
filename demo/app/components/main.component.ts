import {Component} from "@angular/core";
import {Chip} from "nativescript-angular-material/modules/chip/chip.android"; // FIXME: platform specific


@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})

export class MainComponent {

    constructor() {}

    onTap(e) {
        console.log("tap - " + e.object.typeName);
    }

    onClose(e) {
        let chip: Chip = e.object;
        console.log("close - " + chip.typeName);
        // chip.parent._removeView(e.object);
    }

    onCheck(e) {
        let chip: Chip = e.object;
        console.log("check - " + chip.typeName);
    }


}
