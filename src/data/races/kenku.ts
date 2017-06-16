import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Kenku: RaceModels.Race = {
    name: "Kenku",
    size: "Medium",
    speed: { walk: 30 },
    statMods: { dexterity: +2, wisdom: +1 },
    features: [
        {
            name: "Export Forgery", type: "passive",
            description: `
                    You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce
                    forgeries or duplicates of existing objects.
                `
        }, {
            name: "Kenku Training", type: "singleMod",
            description: `
                    You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.
                `
        }, {
            name: "Mimicry", type: "passive",
            description: `
                    You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are
                    imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.
                `
        }
    ],
    reference: { source: "VGM", page: 110 },
    subraces: null
};

Races[Kenku.name] = Kenku;
