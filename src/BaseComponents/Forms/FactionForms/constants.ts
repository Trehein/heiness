export type FactionFormStateObj = {
    factionName: string,
    desc: string,
    commonPersonalityTypes: Array<any>, // todo - update to personality enum
    commonMotivationTypes: Array<any>, // todo - update to motivation enum
    leadershipStructureType: any, // todo - update to leadershipStructure enum
    activeLocations: Array<any>, // todo - update to location id array
    unitTypes: Array<any>, // todo - update to unit id array
}