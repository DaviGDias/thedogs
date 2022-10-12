import type { NextPage } from 'next'
import Head from 'next/head'
import { CardDogs } from '../components/CardDogs/CardDogs'
import { SectionFour } from '../components/SectionFour'
import { SectionOne } from '../components/SectionOne'
import { SectionToo } from '../components/SectionToo'
import { SectionTree } from '../components/SectionTree'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <SectionOne />
      <SectionToo />
      <SectionTree />
      <SectionFour />
    </div>
  )
}

export default Home
