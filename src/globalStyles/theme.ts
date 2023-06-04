import { BaseAttributeEnum } from "../constants/enums/baseAttributeEnums"
import { UseDifficultyEnum } from "../constants/enums/enums"
import { baseColorPalette } from "./colors"

export const baseTheme = {
    attributes: {
        [BaseAttributeEnum.AGILITY]: {
            lightColor: baseColorPalette.base.yellow.light,
            darkColor: baseColorPalette.base.yellow.dark,
            textColor: baseColorPalette.base.white.light
        },
        [BaseAttributeEnum.CONSTITUTION]: {
            lightColor: baseColorPalette.base.orange.light,
            darkColor: baseColorPalette.base.orange.dark,
            textColor: baseColorPalette.base.white.light
        },
        [BaseAttributeEnum.INTELLIGENCE]: {
            lightColor: baseColorPalette.base.blue.light,
            darkColor: baseColorPalette.base.blue.dark,
            textColor: baseColorPalette.base.white.light
        },
        [BaseAttributeEnum.STRENGTH]: {
            lightColor: baseColorPalette.base.red.light,
            darkColor: baseColorPalette.base.red.dark,
            textColor: baseColorPalette.base.white.light
        },
        [BaseAttributeEnum.WILD]: {
            lightColor: baseColorPalette.base.green.light,
            darkColor: baseColorPalette.base.green.dark,
            textColor: baseColorPalette.base.white.light
        },
        [BaseAttributeEnum.WISDOM]: {
            lightColor: baseColorPalette.base.purple.light,
            darkColor: baseColorPalette.base.purple.dark,
            textColor: baseColorPalette.base.white.light
        }
    },
    useDifficulty: {
        [UseDifficultyEnum.EASY]: {
            lightColor: baseColorPalette.base.blue.light,
            darkColor: baseColorPalette.base.blue.dark,
            textColor: baseColorPalette.base.white.light
        },
        [UseDifficultyEnum.VERY_EASY]: {
            lightColor: baseColorPalette.base.green.light,
            darkColor: baseColorPalette.base.green.dark,
            textColor: baseColorPalette.base.white.light
        },
        [UseDifficultyEnum.MODERATE]: {
            lightColor: baseColorPalette.base.yellow.light,
            darkColor: baseColorPalette.base.yellow.dark,
            textColor: baseColorPalette.base.white.light
        },
        [UseDifficultyEnum.DIFFICULT]: {
            lightColor: baseColorPalette.base.orange.light,
            darkColor: baseColorPalette.base.orange.dark,
            textColor: baseColorPalette.base.white.light
        },
        [UseDifficultyEnum.VERY_DIFFICULT]: {
            lightColor: baseColorPalette.base.red.light,
            darkColor: baseColorPalette.base.red.dark,
            textColor: baseColorPalette.base.white.light
        }
    }
}

