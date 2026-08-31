import BeingAnApprovedCentre from '@/component/Approvedstudycentre/beingapprovedcentre'
import Approvedstudycenters from '@/component/Approvedstudycentre/centres'
import StudyCentresIntro from '@/component/Approvedstudycentre/studycentreintro'
import React from 'react'

function page() {
  return (
    <div>
        <Approvedstudycenters/>
        <StudyCentresIntro/>
        <BeingAnApprovedCentre/>
    </div>
  )
}

export default page