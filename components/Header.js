import { useState } from "react"
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";
import Image from "next/image"
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon, UsersIcon, HandIcon } from "@heroicons/react/solid"

const Header = ({ placeholder }) => {
    const [searchInput, setSearchInput] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noGuests, setNoGuests] = useState(1)
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        console.log(ranges)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
        setNoGuests(1)
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                search: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noGuests: noGuests
            }
        })
    }


    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    type='text'
                    placeholder={placeholder ? placeholder : "Start your search"}
                    className="pl-5 bg-transparent outline-none flex-1 test-sm text-gray-600 placeholder:text-gray-400" />
                <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

            {searchInput && (
                <div className="flex-col flex col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#fd5b61']}
                        onChange={handleSelect} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input min={1} value={noGuests} onChange={e => setNoGuests(e.target.value)} type="number" className="outline-none w-12 pl-2 text-lg text-red-400" />
                    </div>

                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                        <button className="flex-grow text-red-400" onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header