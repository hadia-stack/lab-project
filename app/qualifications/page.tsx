import AssessmentGradingSection from '@/component/qualifications/assesment'
import BusinessCourseSection from '@/component/qualifications/courses'
import DeliveryModelSection from '@/component/qualifications/deliverymodel'
import EntryRequirementsSection from '@/component/qualifications/entry'
import ProgrammeStructureSection from '@/component/qualifications/modules'
import QualificationOverviewSection from '@/component/qualifications/overview'
import LearningOutcomesSection from '@/component/qualifications/programeovervierw'
import ProgrammeSuitabilitySection from '@/component/qualifications/programme'
import React from 'react'

function page() {
  return (
    <div>
        <BusinessCourseSection/>
        <QualificationOverviewSection/>
        <ProgrammeSuitabilitySection/>
        <EntryRequirementsSection/>
        <LearningOutcomesSection/>
        <DeliveryModelSection/>
        <ProgrammeStructureSection/>
        <AssessmentGradingSection/>
    </div>
  )
}

export default page