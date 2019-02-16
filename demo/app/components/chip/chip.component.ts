import {Component, ViewChild, OnInit, AfterViewInit, NgZone} from "@angular/core";
import {TextField} from "tns-core-modules/ui/text-field";
import {Chip, ChipGroup, AngularMaterial} from "nativescript-angular-material";
import {EventData} from "tns-core-modules/ui/page/page";

@Component({
    selector: "chip",
    moduleId: module.id,
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.css"]
})
export class ChipComponent implements OnInit {

    @ViewChild("entryChipGroup") entryChipGroup;
    entryChips: string;

    @ViewChild("filterChipGroup") filterChipGroup;
    filterChips: string;

    @ViewChild("choiceChipGroup") choiceChipGroup;
    chosenChips: string;

    actionChip: string;

    constructor(private zone: NgZone) {}

    ngOnInit(): void {
        const entryChipGroup: ChipGroup = this.entryChipGroup.nativeElement;
        entryChipGroup.chips.subscribe(chips => this.zone.run(() => (this.entryChips = "[" + chips + "]")));

        const filterChipGroup: ChipGroup = this.filterChipGroup.nativeElement;
        filterChipGroup.chips.subscribe(chips => this.zone.run(() => this.filterChips = "[" + chips + "]"));

        const choiceChipGroup: ChipGroup = this.choiceChipGroup.nativeElement;
        choiceChipGroup.chips.subscribe(chips => this.zone.run(() => this.chosenChips = "[" + chips + "]"));

    }

    onReturnPress(e) {
        const textField: TextField = e.object;
        const chipGroup: ChipGroup = this.entryChipGroup.nativeElement;
        chipGroup.add(textField.text);
        textField.text = "";
    }

    onClose(e: EventData) {
        const chip: Chip = e.object as Chip;
        console.log("chip '" + chip["text"] + "' closed.");
    }

    onCheck(e: EventData) {
        const chip: Chip = e.object as Chip;
        console.log("chip '" + chip.text + "' " + (chip.isChecked() ? "checked" : "unchecked"));
    }

    onClick(e: EventData) {
        const chip: Chip = e.object as Chip;
        console.log("chip '" + chip.text + "' clicked");
        this.actionChip = chip.text;
    }

}