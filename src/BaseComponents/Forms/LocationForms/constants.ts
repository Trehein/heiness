export type LocationFormStateObj = {
    locationName: string,
    uiId: string, // ex - 1.1.2 or grid square A2...
    locationType: string, // todo - update to locationType enum
    desc: string,
    possibleEnvironmentInteractives: Array<any>, // todo update to interactive enums
    possibleItems: Array<any>, // todo update to item ids
    possibleMaterials: Array<any>, // todo update to material enums
    possibleUnitGroups: Array<any> // todo update to unit group ids
}