import {Component} from "@angular/core";
import {Chip} from "nativescript-angular-material/modules/chip/chip.android";//FIXME: platform specific 


@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})

export class MainComponent {

    constructor() {}

    onTap() {
        console.log("tap");
    }

    onClose() {
        console.log("close");
    }

    onCheck(e) {
        let chip:Chip = e.object;
        console.log("check - " + chip.isChecked());
    }


}
