import React from 'react'
import { getAllCompanions } from '@/lib/actions/companion.actions';
import CompanionCard from '@/components/custom/CompanionCard';
import { getSubjectColor } from '@/lib/utils';
import Searchinput from '@/components/custom/Searchinput';
import SubjectFilter from '@/components/custom/SubjectFilter';

const CompanionsLibrary = async ({searchParams}: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic }); 
  console.log('Companions:', companions);

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-2'> 
          <Searchinput/>
          <SubjectFilter />
        </div>
      </section>
      <section className='companions-grid'>
        {companions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary