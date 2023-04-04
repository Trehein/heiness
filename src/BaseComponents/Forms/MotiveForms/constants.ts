export type MotiveFormStateObj = {
    motiveName: string,
    motiveType: string, // todo - update to locationType enum
    desc: string,
    realtedSpecialItems: Array<any>, // todo update to specialItems ids
    relatedUnits: Array<any>, // todo update to unit ids
}