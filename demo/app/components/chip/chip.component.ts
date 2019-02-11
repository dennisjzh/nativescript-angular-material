import {Component, ViewChild} from "@angular/core";
import {TextField} from "tns-core-modules/ui/text-field";
import {Chip, ChipGroup, AngularMaterial} from "nativescript-angular-material";

@Component({
    selector: "chip",
    moduleId: module.id,
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.css"]
})
export class ChipComponent {

    @ViewChild("chipGroup") chipGroup;

    onReturnPress(event) {
        const textField: TextField = event.object;
        const chipGroup: ChipGroup = this.chipGroup.nativeElement;
        chipGroup.add(textField.text);
        textField.text = "";
    }

    onClose(e) {
        let chip: Chip = e.object;
        // const test: Test = new Test();
        console.log("chip close event- " + chip.typeName + " - " );
    }

}