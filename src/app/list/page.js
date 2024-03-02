"use client";
import { useQuery } from "@apollo/client";
import Header from "../components/header/page";
import { useEffect, useState } from "react";
import Pagination from "../components/pagination/page";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_FILTER,
} from "../components/constants/page";

export default function List() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage] = useState(10);
  const [searchFilter, setSearchFilter] = useState();

  let data;
  if (!searchFilter) {
    data = useQuery(GET_COUNTRIES);
  } else {
    data = useQuery(GET_COUNTRIES_BY_FILTER, {
      variables: { cName: searchFilter },
    });
  }

  useEffect(() => {
    setResult(data?.data);
    setLoading(false);
  }, [data && data?.data]);

  // Get current result based on filter/non-filter
  const indexOfLastPost = currentPage * resultPerPage;
  const indexOfFirstPost = indexOfLastPost - resultPerPage;
  let currentResult;
  if (result?.countries?.length > 1) {
    currentResult = result?.countries?.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentResult = result?.countries;
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(result?.countries / resultPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      {/* Search icon */}
      <div className="mb-3 xl:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search by Country Code (ex. AD,Br,AG etc)"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {result && result?.countries && !loading ? (
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        #
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Country
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Code
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Language
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.countries &&
                      currentResult?.map(function (value, index) {
                        return (
                          <tr>
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {value?.name}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {value?.code}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {value?.languages[0]?.name}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="float-right inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}
      </div>
      <Pagination
        resultPerPage={resultPerPage}
        totalPosts={result?.countries?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
