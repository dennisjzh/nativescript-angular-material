import {Component, ViewChild, OnInit, AfterViewInit, NgZone} from "@angular/core";
import {TextField} from "tns-core-modules/ui/text-field";
import {Chip, ChipGroup, AngularMaterial} from "nativescript-angular-material";

@Component({
    selector: "chip",
    moduleId: module.id,
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.css"]
})
export class ChipComponent implements OnInit {

    @ViewChild("chipGroup") chipGroup;
    chips: string;

    constructor(private zone: NgZone) {}

    ngOnInit(): void {
        const chipGroup: ChipGroup = this.chipGroup.nativeElement;
        chipGroup.chips.subscribe(chips => this.zone.run(() => this.chips = "[" + chips + "]"));
    }

    onReturnPress(event) {
        const textField: TextField = event.object;
        const chipGroup: ChipGroup = this.chipGroup.nativeElement;
        chipGroup.add(textField.text);
        textField.text = "";
    }

    onClose(e) {
        const chipGroup: ChipGroup = this.chipGroup.nativeElement;
    }

}