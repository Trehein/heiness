export type PersonalityTraitFormStateObj = {
    name: string,
    desc: string,
    traitType: string, // todo - update to personalityTrait enum
    effects: Array<any> // todo - update to personalityTraitEffectType type (name, desc, stat / focus, amount)
}