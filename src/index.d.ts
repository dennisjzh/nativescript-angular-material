import {Common} from './angular-material.common';
import {ChipCommon} from "./modules/chip/chip.common";
import {ChipGroupCommon} from "./modules/chip/chip.group.common";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export declare class AngularMaterial extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
}

export declare class Chip extends ChipCommon {
  readonly text: string;
  isChecked(): boolean;
}

export declare class ChipGroup extends ChipGroupCommon {
  add(chip: string);
  readonly chips: BehaviorSubject<string[]>;
}

