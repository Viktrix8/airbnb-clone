import { useRouter } from 'next/router'
import { format } from 'date-fns'

import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

const search = ({ searchResult }) => {
    const router = useRouter()
    const { search, startDate, endDate, noGuests } = router.query

    let formattedEndDate;
    let formattedStartDate;
    let range;

    if (endDate && startDate) {
        formattedEndDate = format(new Date(startDate), 'dd MMM yy')
        formattedStartDate = format(new Date(endDate), 'dd MMM yy')
        range = `${formattedStartDate} - ${formattedEndDate}`
    }

    return (
        <div>
            <Header placeholder={`${search} | ${range} | ${noGuests} guests`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {search}</h1>

                    <div className='flex-wrap gap-2 hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancelation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResult.map(({ location, img, title, description, star, price, total }, index) => (
                            <InfoCard key={index} location={location} img={img} title={title} description={description} star={star} price={price} total={total} />
                        ))}
                    </div>
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResult={searchResult} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default search

export async function getStaticProps() {
    const searchResult = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())

    return {
        props: {
            searchResult
        }
    }
}