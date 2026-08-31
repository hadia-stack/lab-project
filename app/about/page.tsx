import StudentJourneyBanner, { StudentJourneyCTA } from '@/component/ABOUT/cta'
import DIBEducationalContext, { EducationalContextSection } from '@/component/ABOUT/edu'
import VisionMissionSection from '@/component/ABOUT/mission'
import DIBVisionMissionSection, { DIBVisionMissionInteractive } from '@/component/ABOUT/vissionmission'
import React from 'react'

function page() {
  return (
    <div>
    <VisionMissionSection/>
    <DIBVisionMissionInteractive/>
    <EducationalContextSection/>
    <StudentJourneyCTA/>
    </div>
  )
}

export default page