import { WeaponProperty, WeaponType } from "app/models/equipment";
import * as _ from "lodash";

import { Weapon } from "../../models/equipment/weapon";
import { WeaponList } from "./weapon-list";

export * from "./weapon-list";

export * from "./battleaxe";
export * from "./blowgun";
export * from "./club";
export * from "./dagger";
export * from "./dart";
export * from "./flail";
export * from "./glaive";
export * from "./greataxe";
export * from "./greatclub";
export * from "./greatsword";
export * from "./halberd";
export * from "./hand-crossbow";
export * from "./handaxe";
export * from "./heavy-crossbow";
export * from "./javelin";
export * from "./lance";
export * from "./light-crossbow";
export * from "./light-hammer";
export * from "./longbow";
export * from "./longsword";
export * from "./mace";
export * from "./maul";
export * from "./morningstar";
export * from "./net";
export * from "./pike";
export * from "./quarterstaff";
export * from "./rapier";
export * from "./scimitar";
export * from "./shortbow";
export * from "./shortsword";
export * from "./sickle";
export * from "./sling";
export * from "./spear";
export * from "./trident";
export * from "./war-pick";
export * from "./warhammer";
export * from "./whip";

export const MartialWeapons: Weapon[] = [];
export const SimpleWeapons: Weapon[] = [];
export const SimpleMeleeWeapons: Weapon[] = []

WeaponList.forEach(w => {
    switch (w.type) {
        case WeaponType.Martial: MartialWeapons.push(w); break;
        case WeaponType.Simple:
            SimpleWeapons.push(w);
            if (!_.includes(w.properties, WeaponProperty.Ranged)) {
                SimpleMeleeWeapons.push(w)
            }
            break;
    }
})
