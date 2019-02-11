import { Common } from './angular-material.common';
import {ChipCommon} from "./chip.common";
import {ChipGroupCommon} from "./modules/chip/chip.group.common";
// import {TestComm} from "./test.comm";

export declare class AngularMaterial extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
}

export declare class Chip extends ChipCommon {
  isChecked(): boolean;
  newInstance(): ChipCommon;
}

export declare class ChipGroup extends ChipGroupCommon {
  add(chip: string);
}

// export declare class Test extends TestComm {
//   greet();
//   greet2();
// }
