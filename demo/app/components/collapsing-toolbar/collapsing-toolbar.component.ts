import {Component} from "@angular/core";


@Component({
    selector: "ns-collapsing-toolbar",
    moduleId: module.id,
    templateUrl: "./collapsing-toolbar.component.html",
    styleUrls: ["./collapsing-toolbar.component.css"]
})

export class CollapsingToolbarComponent {

    constructor() {}

    onClick(e) {
        console.log("click - " + e.object.typeName);
    }

}
