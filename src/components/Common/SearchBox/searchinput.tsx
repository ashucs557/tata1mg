import React from 'react'
import {useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import SVGIcon from '@const/SvgIcon';


const people = [
    { id: 1, name: "Blood Test" },
    { id: 2, name: "Intradermal Test" },
    { id: 3, name: "Food Challenge Test" },
    { id: 4, name: "Spirometry Test" },
    { id: 5, name: "Elimination Diet" },
    { id: 6, name: "Patch Test" },
    { id: 7, name: "Urine Drug Test" },
    { id: 8, name: "Blood Test for Drug Allergies" },
    { id: 9, name: "Serum Sickness Test" },
    { id: 10, name: "Liver Function Tests (LFTs)" },
  ];

const Searchinput = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);
    const [query, setQuery] = useState("");
    // console.log(query)
    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(query?.toLowerCase())
    );

    return (
        <div>
            <Combobox onChange={(person: any) => {
                setSelectedPerson(person);
                setQuery(person?.name);
            }}>
                <div className="relative">
                    <ComboboxButton className="absolute start-2 top-[0.67rem]">
                        <SVGIcon.Search_Icon />
                    </ComboboxButton>
                    <ComboboxInput
                        className="w-48 search-place"
                        placeholder="Search Test"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <ComboboxOptions
                    className="search-box z-50 transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 w-[var(--input-width)]"
                    anchor="bottom"
                    transition
                >
                    {filteredPeople.map((person) => (
                        <ComboboxOption
                            key={person.id}
                            value={person}
                            className="search-list  group flex cursor-default items-center gap-2 py-1.5 px-3 select-none"
                        >
                            <div className="text-sm/6 text-black">
                                {person.name}
                            </div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    )
}

export default Searchinput;