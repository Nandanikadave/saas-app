import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning your way</div>
      <h2 className='md:text-2xl text-xl font-bold'>Build a Personalized Learning Companion</h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
      </p>
      <Image
        src={'/images/cta.svg'}
        alt='CTA Image'
        width={500}
        height={300}
      />
      <button className='btn-primary'>
        <Image
          src={'/icons/plus.svg'}
          alt='Add Icon'
          width={24}
          height={24}
        />
        <Link href='/companions/new'>
          Create your Companion
        </Link>
      </button>
    </section>
  )
}

export default CTA