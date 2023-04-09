export type StrengthOrWeaknessFormStateObj = {
    name: string,
    desc: string,
    type: string, // todo - update to purposeType enum
    effect: Array<any> // todo - update to effect obj with name, statEffected / actionEffected, amountOfEffect?
}