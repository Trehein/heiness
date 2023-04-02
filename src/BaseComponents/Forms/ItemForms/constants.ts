export type ItemFormStateObj = {
    itemName: string,
    itemType: string, // todo - update to itemType enum
    desc: string,
    location: string, // todo - update to location id
    purpose: Array<any>, // todo - update to motivation enum
    effects: Array<any>, // todo - update to leadershipStructure enum
}