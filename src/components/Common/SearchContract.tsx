import React, {useState} from 'react';
import BaseButton from "./BaseButton";
import BaseLink from "./BaseLink";

const SearchContract = () => {

    const [search, setSearch] = useState('')

    return (
        <form className="inline-flex gap-1">
            <input
                className="rounded-lg px-5 ring-inset ring-1 focus:outline-0 focus:ring-blue-600 focus:ring-2 w-80"
                placeholder="search by contract name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onSubmit={() => window.open(`/${search}`)}
            />
            <BaseLink title="Search" link={`/${search}`}/>
        </form>
    );
};

export default SearchContract;