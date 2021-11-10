//
//
import Image from 'next/image'
import { useRouter } from "next/router"
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "../Avatar"
import SearchTypes from "./SearchTypes"

const SearchBarMenu: React.FC = () => {

    const router = useRouter()
    const searchInputRef = useRef<HTMLInputElement>(null);

    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (searchInputRef.current != null) {
            const term = searchInputRef.current.value;
            router.push(`/search?term=${term}`)
        } else {
            return
        }
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    className="cursor-pointer"
                    src="https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png"
                    height={40}
                    width={120}
                    alt=""
                    onClick={() => router.push("/")}
                />

                <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">

                    <input className="flex-grow w-full focus:outline-none"
                        ref={searchInputRef}
                        type="text"
                    />

                    <XIcon className="sm:mr-3 h-7 text-grey-text cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => {
                            if (searchInputRef.current != null) {
                                searchInputRef.current.value = ""
                            } else {
                                return
                            }
                        }}
                    />

                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 hidden text-blue-500 sm:inline-flex" />

                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>

                </form>

                <Avatar className="ml-auto" url="https://avatars.githubusercontent.com/u/64296934?v=4" />
            </div>
            <SearchTypes />
        </header>
    );
}

export default SearchBarMenu;