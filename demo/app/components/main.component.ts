import {Component} from "@angular/core";

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
}
