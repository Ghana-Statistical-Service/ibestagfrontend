'use client'
import { URI } from '@/function/uri';
import IDCARD from '@/page_components/IDCARD';
import LoaderUi from '@/ui/LoaderUi';
import NavBar from '@/ui/NavBar';
import Axios from 'axios';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Profile({ params }) {
  const [data, setData] = useState(null); // Initialize data state to null
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state to true

  useEffect(() => { // Use useEffect to fetch data on component mount
    const fetchData = async () => {
      try {
        const response = await Axios.get(URI + '/profile/' + params.email);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or error
      }
    };

    fetchData();
  }, [params]); // Add params as dependency to refetch on param changes

  if (isLoading) {
    return <LoaderUi />; // Display loading indicator while fetching data
  }

  if (data) {
    return (
      <div>
        <NavBar />
        <div className="margin-top-100">
        <IDCARD data={data}  />
        </div>
      </div>
    );
  }else{
    return <LoaderUi />
  }

  // Handle cases where data is null (e.g., no profile found)
  return <p>Profile not found.</p>;
}
