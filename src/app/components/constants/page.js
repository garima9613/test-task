import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query ListCountries {
    countries {
      code
      name
      languages {
        name
      }
    }
  }
`;

const GET_COUNTRIES_BY_FILTER = gql`
  query ListCountries($cName: String!) {
    countries(filter: { name: { regex: $cName } }) {
      code
      name
      languages {
        name
      }
    }
  }
`;

export { GET_COUNTRIES, GET_COUNTRIES_BY_FILTER };
