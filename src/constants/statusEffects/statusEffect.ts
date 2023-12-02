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
        desc: '-5 chance of success when defending if on equipment, -1 HP at end of turn if on skin, removes armored',
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
        desc: '+3 chance of success when defending',
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
        desc: '+5 chance of success to evade incoming attacks',
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
        desc: 'Lose the power of sight',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.BludgeonArmor,
        desc: 'When dealing Blunt Dmg, deal +1 Blunt Dmg to Armored targets',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Blur,
        desc: 'Your body becomes blurred, shifting and wavering to all who can see you. Gain +5 chance to evade attacks from attackers dependent on sight.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BoneCage,
        desc: 'Increases Physical Armour by [X] and another [X] Physical Armour for each corpse within 2R around you.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BreakingBlock,
        desc: 'If you successfully block an incoming attack with a blunt weapon, roll a d20 for a critical chance. A roll of 15 or higher breaks the blade.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BreathingBubble,
        desc: 'Creates a bubble of clean air around your head, allowing you to ignore effects of cloud surfaces. Immune to suffocation and Silence.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.BroadSwings,
        desc: 'Your attacks can hit multiple enemies in melee range swinging in a 180 degree arc.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Burning,
        desc: '-1 HP at the beginning of the turn. Touching flammable surfaces ignites them.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Chickenified,
        desc: 'Turn the target character into a chicken. Squawk!',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Chilled,
        desc: '+5 Def against Fire Dmg. +5 chance of becoming frozen if targetted by chilling or freezing effects.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Concussed,
        desc: '-5 chance of success when taking any actions.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Crippled,
        desc: '-2 movement speed. -5 chance of success when physically attacking or attempting something acrobatic.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Crushed,
        desc: '-1 HP at the beinning of the turn. +5 difficulty when attempting things related to the affected body part.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Cursed,
        desc: '-3 chance of success when defending against Wild abilities. +3 chance of success when attempting Necromancy skills. Take physical damage from healing spells and potions',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Dazed,
        desc: '-3 chance of success when defending or attacking. Being dazed while already dazed incurs concussed.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Deaf,
        desc: 'Lose the ability to hear',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Decay,
        desc: 'Take physical damage from healing spells and potions',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.DemonFists,
        desc: 'Conjure a demon that will share their Intelligence with you and provide [X] Magic Armour. Grants you power to terrify and protect yourself with demonic fists.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Diseased,
        desc: '-3 chance of success when physically attacking. -3 Constitution.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.Electrified,
        desc: '+5 chance of success when attacking something conductive. If touched, transfer the charge, dealing 1 Dmg and shocking whatever touched you. Electricity travels through most liquids.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.ElementCoating,
        desc: 'Add elemental coating to something',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Enlarged,
        desc: 'Grow in size. +3 Constitution +3 Strength',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Enraged,
        desc: 'Guaranteed to land critical hits with basic attacks and weapon skills, but is muted. Clears Taunted, Terrified, Charmed, Mad and Clear-Minded statuses.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Entangled,
        desc: 'Cannot move or teleport, and they receive 1 Poison Damage each turn.',
        type: StatusTypeEnum.Debuff
    },
    {
        name: StatusEnum.ErraticWisp,
        desc: 'Teleport in a random direction each time they are attacked. Increases Air Resistance by +5',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Evasive,
        desc: '+10 chance of success when trying to dodge',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.EverlastingRest,
        desc: 'Undead cannot be raised within a 5R area. Any undead in the area take 1 Light Dmg per turn.',
        type: StatusTypeEnum.Buff
    },
    {
        name: StatusEnum.Farsighted,
        desc: '+5 success chance of ranged attacks and skills ',
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