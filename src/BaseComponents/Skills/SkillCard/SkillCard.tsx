import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import React from 'react'
import AreaRangeSection from './SkillCardSections/AreaRangeSection'
import DamageSection from './SkillCardSections/DamageSection'
import DescSection from './SkillCardSections/DescSection'
import HeaderSection from './SkillCardSections/HeaderSection'
import RequirementSection from './SkillCardSections/RequirementSection'
import StatusSection from './SkillCardSections/StatusSection'
import TargetSection from './SkillCardSections/TargetSection'
import UseDifficultyCoolDownSection from './SkillCardSections/UseDifficultyCoolDownSection'
import { skillCardStyles } from './skillCardStyles'
import { Link } from 'react-router-dom'

export type SkillCardProps = {
    docSnapshot: QueryDocumentSnapshot<DocumentData>
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
    const skillCardClasses = skillCardStyles()
    const { docSnapshot } = props
    const data = docSnapshot.data();
    console.log('data', data)
    console.log(docSnapshot.id)

    return (
        <div className={'cardContainer'} style={skillCardClasses.cardContainer}>
            <div className={'card'} style={skillCardClasses.card}>
                <HeaderSection title={data.title} actionPointCost={data.actionPointCost} cardCost={data.cardCost} /> 
                <RequirementSection requiredFocus={data.requiredFocus}/>
                <UseDifficultyCoolDownSection coolDown={data.coolDown} useDifficulty={data.useDifficulty} />
                <DescSection desc={data.desc}/>
                <DamageSection damage={data.damage} damageType={data.damageType} />
                <TargetSection affected={data.affected} target={data.target} />
                <StatusSection setStatus={data.setStatus} statusDuration={data.statusDuration} />
                <AreaRangeSection areaOfEffect={data.areaOfEffect} areaType={data.areaType} range={data.range} />
                <Link key={docSnapshot.id} to={`/skills/${docSnapshot.id}`}>
                    <div>
                        {data.title}
                    </div>
                </Link>   
            </div>
        </div>
    )
}

export default SkillCard

