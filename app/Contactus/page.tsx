import ContactInfoSection from '@/component/Conactus/contactdetails'
import ContactHeroBanner from '@/component/Conactus/contacthero'
import SendMessageSection from '@/component/Conactus/mail'
import React from 'react'

function page() {
  return (
    <div>
        <ContactHeroBanner/>
        <SendMessageSection/>
        <ContactInfoSection/>
    </div>
  )
}

export default page