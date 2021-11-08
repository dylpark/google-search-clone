import type { NextPage } from 'next'
import Head from 'next/head'
import SearchHeader from "../components/SearchHeader"

const Search: NextPage = () => {

    return (
        <div className="">
            <Head>
                <title>Search Results</title>
                <meta name="description" content="Generated by create next app" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <SearchHeader />

        </div>
    );
}

export default Search;