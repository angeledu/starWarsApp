/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useQuery } from "react-query";
import starWarsDB from "../api/starWarsDB";
import { PeopleDB } from "../interfaces/starWarsInterfaces";

export const usePeople = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const fetchPeoplePage = ( pageNumber ) => {
    return starWarsDB.get<PeopleDB>(`/people?page=${pageNumber}`);
   }

   const increment = () => {
       setPageNumber(pageNumber + 1);
   }

   const decrement = () => {
    setPageNumber(pageNumber - 1);
   }

    const {isLoading, data, isFetching } = useQuery(
        ['people', pageNumber],
        () => fetchPeoplePage(pageNumber),
        {
            keepPreviousData: true,
        }
        );
   


    return {
        isLoading,
        data,
        pageNumber,
        increment,
        decrement,
        isFetching,
    }

}