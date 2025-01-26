import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <section className='container mx-auto select-none w-full h-screen flex justify-center items-center flex-col'>
        <div className="text-6xl md:text-9xl  font-bold text-[#052659] dark:text-[#5483B3]">404</div>
        <div className="text-2xl md:text-3xl font-semibold my-2 text-[#58A6FF] dark:text-[#5483B3]">This Place is not unlocked yet</div>
        <Link href="/" className="rounded-3xl bg-[#052659] text-white shadow-xl px-5 py-3">Now lets head back home</Link>
    </section>
  )
}