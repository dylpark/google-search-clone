//
//
import SearchType from "./SearchType"
import BasicLink from "../BasicLink"

import {
    SearchIcon,
    PhotographIcon,
    PlayIcon,
    NewspaperIcon,
    MapIcon,
    DotsVerticalIcon,
} from "@heroicons/react/outline"

const SearchTypes: React.FC = () => {
    return (
        <div className="flex w-full text-grey-text justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-2">
            {/* Left */}
            <div className="flex space-x-6">
                <SearchType Icon={SearchIcon} title="All" selected />
                <SearchType Icon={PhotographIcon} title="Images" selected={undefined} />
                <SearchType Icon={PlayIcon} title="Videos" selected={undefined} />
                <SearchType Icon={NewspaperIcon} title="News" selected={undefined} />
                <SearchType Icon={MapIcon} title="Maps" selected={undefined} />
                <SearchType Icon={DotsVerticalIcon} title="More" selected={undefined} />
            </div>

            {/* Right */}
            <div className="flex space-x-4">
                <BasicLink name="Settings" />
                <BasicLink name="Tools" />
            </div>
        </div>
    );
}

export default SearchTypes;