import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { setRevalidateHeaders } from 'next/dist/server/send-payload'
import Header from "../components/Header"
import Banner from "../components/Banner"

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="p-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from a server - api endpoint */}
          {exploreData?.map(( item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}