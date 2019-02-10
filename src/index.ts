import {ChipCommon} from "./chip.common";
import {ChipGroupCommon} from "./chip.group.common";

export * from "./chip.module";

export declare class Chip extends ChipCommon {
    isChecked(): boolean;
    newInstance(): ChipCommon;
}

export declare class ChipGroup extends ChipGroupCommon {
    add(chip: string);
}
