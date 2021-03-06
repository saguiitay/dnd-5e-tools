import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Trident: Equipment.Weapon = new Equipment.Weapon({
    name: "Trident",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Thrown, Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6",
    range: { from: 20, to: 60 }
});

WeaponList.push(Trident);
