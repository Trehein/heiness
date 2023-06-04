import { StatusEnum } from "../enums/statusEnums"

export type StatusEffect = {
    name: StatusEnum,
    desc: string,
    type: StatusTypeEnum,
}

export enum StatusTypeEnum {
    Buff = 'Buff',
    Debuff = 'Debuff',
    Companion = 'Companion'
}

export const statusEffects: Array<StatusEffect> = [
    {
        name: StatusEnum.Acid,
        desc: '+5 use difficulty when defending if on equipment, -1 HP at end of turn if on skin, removes armored',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.AnimalSpeak,
        desc: 'Verbally communicate with beasts',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.AnimateElement,
        desc: "Conjure a personal elemental that matches the ground surface it's summoned onto. Your incarnate can be buffed with Infusions. Once you hit Summoning ability level of 10, a colossal Incarnate Champion will answer your summons!",
        type: StatusTypeEnum.Companion
    },
    {
        name: StatusEnum.Animated,
        desc: 'A corpse, returned to life',
        type: StatusTypeEnum.Companion
    },
    {
        name: StatusEnum.AquaticAdaptation,
        desc: 'Grow gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Armored,
        desc: '-3 use difficulty when defending',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Atrophy,
        desc: 'Flesh rots, slowly decaying away and inflicting -1 HP at end of turn',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.BallOfLight,
        desc: 'A ball of light',
        type: StatusTypeEnum.Companion
    },
    {
        name: StatusEnum.BareBlock,
        desc: 'Block or counter a bladed melee attack with your bare hands.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BarkSkin,
        desc: '+5 Def against Physical and Pyromancy attacks. -1 movement speed.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Befriended,
        desc: "Gain something's trust, it will fight for you",
        type: StatusTypeEnum.Companion
    },
    {
        name: StatusEnum.BendLight,
        desc: '+5 success chance to evade incoming attacks',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BendSteel,
        desc: "Gain a ciritcal chance when blocking a melee attack with a metal weapon that lowers the weapon's success chance.",
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Bleeding,
        desc: '-1 HP at the beginning of turn',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Blinded,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BludgeonArmor,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Blur,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BoneCage,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BreakingBlock,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BreathingBubble,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BroadSwings,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Burning,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Chickenified,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Chilled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Crippled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Crushed,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Cursed,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Dazed,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Deaf,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Decay,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.DemonFists,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Diseased,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Electrified,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ElementCoating,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Enlarged,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Enraged,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Entangled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ErraticWisp,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Evasive,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.EverlastingRest,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Farsighted,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Fear,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.FlamingTongues,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.FlamingWeapon,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Flight,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Fortified,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.FreezingWeapon,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Frozen,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.GentleRepose,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.GravityPulled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.GuardianAngel,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Hardened,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.HarnessMomentum,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Healing,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.HeartOfSteel,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.HeavyHitter,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.HuntersMark,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ImmortalSummon,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.IncreasedMovement,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.InvestitureOfStone,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Invisible,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Juggler,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Knocked,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.LessMass,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Levitate,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Light,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.MakeshiftWeapon,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.MedusaHead,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.MindControlled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Misdirection,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.MoreMass,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.NightVision,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.NimbleFingers,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.NullifyGravity,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Oiled,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Paralysis,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.PlantSpeak,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.PoisonResist,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Poisoned,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Provoked,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.QuickDraw,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Rallied,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Random,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Reflect,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Regenerate,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ReverseGravity,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SensoryCompensation,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ShareDamage,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Shocked,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ShortWalk,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Shrapnel,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Silenced,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SkinMod,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Sleep,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SmokeShroud,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SoftHands,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SoulMate,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SparkingStrikes,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.SpiderLegs,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Stasis,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.StructuralWeakness,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Stunned,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Suffocating,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Supercharged,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Swimmer,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ThickOfTheFight,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ThunderStep,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.TightGrip,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Tracking,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.TreeStride,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.VampiricAura,
        desc: '',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.VenomCoating,
        desc: '',
        type: StatusTypeEnum.Buff
    }
]