//
//
import Pagination from "./Pagination"

interface Props {
    results: any;
}

const SearchResults: React.FC<Props> = ({ results }) => {

    const totalResults = results.searchInformation?.formattedTotalResults
    const timeTaken = results.searchInformation?.searchTime

    return (
        <div className="mx-auto w-full pl-7 pr-7 sm:pl-10 md:pl-20 lg:pl-52">
            <p className="text-grey-text text-xs mb-5 mt-3">
                About {totalResults} results ({timeTaken} seconds)
            </p>

            {results.items?.map((result: {
                link: any;
                formattedUrl: any;
                snippet: any;
                title: any;
            }) => (

                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm">
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}

            <Pagination />
        </div>
    );
}

export default SearchResults;