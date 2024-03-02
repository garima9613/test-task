import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

// const query = gql`
//   query ListCountriesInNAFTA {
//     countries(filter: { code: { in: ["AD"] }, name: { in: ["Andorra"] } }) {
//       code
//       name
//       languages {
//         name
//       }
//     }
//   }
// `;

const FEED_SEARCH_QUERY = gql`
  query ListCountriesInNAFTA($filter: String!) {
    countries(filter: $filter) {
      code
      name
      languages {
        name
      }
      }
    }
  }
`;

const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);
  return (
    <>
      <div>
        Search
        <input type="text" onChange={(e) => setSearchFilter(e.target.value)} />
        <button
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
          OK
        </button>
      </div>
      {data &&
        data.feed.links.map((link, index) => (
          <link key={link.id} link={link} index={index} />
        ))}
    </>
  );
};

export default Search;
