import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from '@/components/custom/CompanionCard'
import CompanionsList from '@/components/custom/CompanionsList'
import CTA from '@/components/custom/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
    <h1 className='text-2xl font-bold'>Popular Companions</h1>

    <section className='home-section'>
      <CompanionCard 
      id="123"
      name="Neura the Brainy Explorer"
      topic="Neural Network of the Brain"
      subject="Science"
      duration={45}
      color="#E5D0FF"
      />
      <CompanionCard 
      id="456"
      name="Countsy the Number Wizard"
      topic="Derivatives & Integrals"
      subject="Maths"
      duration={30}
      color="#FFDA6E"
      />
      <CompanionCard 
      id="789"
      name="Luna the Space Explorer"
      topic="Astrophysics"
      subject="Science"
      duration={60}
      color="#BDE7FF"
      />
    </section>
    
    <section className='home-section'>
      <CompanionsList 
      title="Recent Sessions"
      companions={recentSessions}
      classNames="w-2/3 max-lg:w-full"
      />
      <CTA />
    </section>

  </main>
)
}

export default Page