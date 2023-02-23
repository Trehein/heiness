import React from 'react'
import NumberField from '../../../FormFields/NumberField'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../CreateSkillController'

export type StatusSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

export enum StatusEnums {
    Acid = 'Acid',
    AnimalSpeak = 'Animal Speak',
    Animated = 'Animated',
    AnimateElement = 'Animate Element',
    AquaticAdaptation = 'AquaticAdaptation',
    Armored = 'Armored',
    Atrophy = 'Atrophy',
    BallOfLight = 'Ball of Light',
    BareBlock = 'Bare Block',
    BarkSkin = 'Bark Skin',
    Befriended = 'Befriended',
    BendLight = 'Bend Light',
    BendSteel = 'Bend Steel',
    Bleeding = 'Bleeding',
    Blinded = 'Blinded',
    BludgeonArmor = 'Bludgeon Armor',
    Blur = 'Blur',
    BoneCage = 'Bone Cage',
    BreakingBlock = 'Breaking Block',
    BreathingBubble = 'Breathing Bubble',
    BroadSwings = 'BroadSwings',
    Burning = 'Burning',
    Chickenified = 'Chickenified',
    Chilled = 'Chilled',
    Crippled = 'Crippled',
    Crushed = 'Crushed',
    Cursed = 'Cursed',
    Dazed = 'Dazed',
    Decay = 'Decay',
    Deaf = 'Deaf',
    DemonFists = 'Demon Fists',
    Diseased = 'Diseased',
    ElementCoating = 'Element Coating',
    Electrified = 'Electrified',
    Enlarged = 'Enlarged',
    Enraged = 'Enraged',
    Entangled = 'Entangled',
    ErraticWisp = 'ErraticWisp',
    Evasive = 'Evasive',
    EverlastingRest = 'Everlasting Rest',
    Farsighted = 'Farsighted',
    Fear = 'Fear',
    FlamingTongues = 'Flaming Tongues',
    FlamingWeapon = 'Flaming Weapon',
    Flight = 'Flight',
    Fortified = 'Fortified',
    FreezingWeapon = 'Freezing Weapon',
    Frozen = 'Frozen',
    GentleRepose = 'Gentle Repose',
    GravityPulled = 'Gravity Pulled',
    GuardianAngel = 'Guardian Angel',
    Hardened = 'Hardened',
    HarnessMomentum = 'Harness Momentum',
    Healing = 'Healing',
    HeartOfSteel = 'Heart of Steel',
    HeavyHitter = 'Heavy Hitter',
    HuntersMark = "Hunter's Mark",
    ImmortalSummon = 'Immortal Summon',
    IncreasedMovement = 'Increased Movement',
    InvestitureOfStone = 'Investiture of Stone',
    Invisible = 'Invisible',
    Juggler = 'Juggler',
    Knocked = 'Knocked',
    LessMass = 'Less Mass',
    Levitate = 'Levitate',
    Light = 'Light',
    MakeshiftWeapon = 'Makeshift Weapon',
    MedusaHead = 'Medusa Head',
    MindControlled = 'Mind Controlled',
    Misdirection = 'Misdirection',
    MoreMass = 'More Mass',
    NightVision = 'Night Vision',
    NimbleFingers = 'Nimble Fingers',
    None = 'None',
    NullifyGravity = 'Nullify Gravity',
    Oiled = 'Oiled',
    Paralysis = 'Paralysis',
    PlantSpeak = 'Plant Speak',
    PoisonResist = 'Poison Resist',
    Poisoned = 'Poisoned',
    Provoked = 'Provoked',
    QuickDraw = 'Quick Draw',
    Rallied = 'Rallied',
    Random = 'Random',
    Regenerate = 'Regenerate',
    Reflect = 'Reflect',
    ReverseGravity = 'Reverse Gravity',
    SensoryCompensation = 'Sensory Compensation',
    ShareDamage = 'Share Damage',
    Shocked = 'Shocked',
    ShortWalk = 'Short Walk',
    Shrapnel = 'Shrapnel',
    Silenced = 'Silenced',
    SkinMod = 'Skin Mod',
    Sleep = 'Sleep',
    SmokeShroud = 'Smoke Shroud',
    SoftHands = 'Soft Hands',
    SoulMate = 'Soul Mate',
    SparkingStrikes = 'Sparking Strikes',
    SpiderLegs = 'Spider Legs',
    Stasis = 'Stasis',
    Stunned = 'Stunned',
    StructuralWeakness = 'Structural Weakness',
    Suffocating = 'Suffocating',
    Supercharged = 'Supercharged',
    Swimmer = 'Swimmer',
    ThickOfTheFight = 'Thick of the Fight',
    ThunderStep = 'ThunderStep',
    TightGrip = 'Tight Grip',
    Tracking = 'Tracking',
    TreeStride = 'TreeStride',
    VampiricAura = 'Vampiric Aura',
    VenomCoating = 'Venom Coating'
} 

export const statusArray: Array<StatusEnums> = [
    StatusEnums.Acid,
    StatusEnums.AnimalSpeak,
    StatusEnums.AnimateElement,
    StatusEnums.Animated,
    StatusEnums.AquaticAdaptation,
    StatusEnums.Armored,
    StatusEnums.Atrophy,
    StatusEnums.BallOfLight,
    StatusEnums.BareBlock,
    StatusEnums.BarkSkin,
    StatusEnums.Befriended,
    StatusEnums.BendLight,
    StatusEnums.BendSteel,
    StatusEnums.Bleeding,
    StatusEnums.Blinded,
    StatusEnums.BludgeonArmor,
    StatusEnums.Blur,
    StatusEnums.BoneCage,
    StatusEnums.BreakingBlock,
    StatusEnums.BreathingBubble,
    StatusEnums.BroadSwings,
    StatusEnums.Burning,
    StatusEnums.Chickenified,
    StatusEnums.Chilled,
    StatusEnums.Crippled,
    StatusEnums.Crushed,
    StatusEnums.Cursed,
    StatusEnums.Dazed,
    StatusEnums.Decay,
    StatusEnums.Deaf,
    StatusEnums.DemonFists,
    StatusEnums.Diseased,
    StatusEnums.ElementCoating,
    StatusEnums.Electrified,
    StatusEnums.Enlarged,
    StatusEnums.Enraged,
    StatusEnums.Entangled,
    StatusEnums.ErraticWisp,
    StatusEnums.Evasive,
    StatusEnums.EverlastingRest,
    StatusEnums.Farsighted,
    StatusEnums.Fear,
    StatusEnums.FlamingTongues,
    StatusEnums.FlamingWeapon,
    StatusEnums.Flight,
    StatusEnums.Fortified,
    StatusEnums.FreezingWeapon,
    StatusEnums.Frozen,
    StatusEnums.GentleRepose,
    StatusEnums.GravityPulled,
    StatusEnums.GuardianAngel,
    StatusEnums.Hardened,
    StatusEnums.HarnessMomentum,
    StatusEnums.Healing,
    StatusEnums.HeartOfSteel,
    StatusEnums.HeavyHitter,
    StatusEnums.HuntersMark,
    StatusEnums.ImmortalSummon,
    StatusEnums.IncreasedMovement,
    StatusEnums.InvestitureOfStone,
    StatusEnums.Invisible,
    StatusEnums.Juggler,
    StatusEnums.Knocked,
    StatusEnums.LessMass,
    StatusEnums.Levitate,
    StatusEnums.Light,
    StatusEnums.MakeshiftWeapon,
    StatusEnums.MedusaHead,
    StatusEnums.MindControlled,
    StatusEnums.Misdirection,
    StatusEnums.MoreMass,
    StatusEnums.NightVision,
    StatusEnums.NimbleFingers,
    StatusEnums.None,
    StatusEnums.NullifyGravity,
    StatusEnums.Oiled,
    StatusEnums.Paralysis,
    StatusEnums.PlantSpeak,
    StatusEnums.PoisonResist,
    StatusEnums.Poisoned,
    StatusEnums.Provoked,
    StatusEnums.QuickDraw,
    StatusEnums.Rallied,
    StatusEnums.Random,
    StatusEnums.Regenerate,
    StatusEnums.Reflect,
    StatusEnums.ReverseGravity,
    StatusEnums.SensoryCompensation,
    StatusEnums.ShareDamage,
    StatusEnums.Shocked,
    StatusEnums.ShortWalk,
    StatusEnums.Shrapnel,
    StatusEnums.Silenced,
    StatusEnums.SkinMod,
    StatusEnums.Sleep,
    StatusEnums.SmokeShroud,
    StatusEnums.SoftHands,
    StatusEnums.SoulMate,
    StatusEnums.SparkingStrikes,
    StatusEnums.SpiderLegs,
    StatusEnums.Stasis,
    StatusEnums.Stunned,
    StatusEnums.StructuralWeakness,
    StatusEnums.Suffocating,
    StatusEnums.Supercharged,
    StatusEnums.Swimmer,
    StatusEnums.ThickOfTheFight,
    StatusEnums.ThunderStep,
    StatusEnums.TightGrip,
    StatusEnums.Tracking,
    StatusEnums.TreeStride,
    StatusEnums.VampiricAura,
    StatusEnums.VenomCoating,
] 

const StatusSection: React.FC<StatusSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {setStatus, statusDuration} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* setStatus */}
            <SingleOptionSelect 
                labelText={'Set Status'}
                fieldValue={setStatus}
                targetField={'setStatus'}
                optionArray={statusArray}
                handleChangeValue={handleChangeValue}             
            />
            {/* statusDuration */}
            <NumberField 
                labelText={'Status Duration'} 
                fieldValue={statusDuration} 
                targetField={'statusDuration'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 5
                }} 
                handleChangeValue={handleChangeValue}            
            />
        </div>
    )
}

export default StatusSection