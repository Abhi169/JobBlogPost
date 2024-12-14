import { useState, useEffect } from "react";
import Card from "./Card";
import FilterDropdown from "./FilterDropdown";
import SkeletonCard from "./SkeletonCard";
import { jobList } from "../utils/mockData";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  // const [listOfJobs, setListOfJobs] = useState(jobList.results);
  // const [filteredJobs, setFilteredJobs] = useState(jobList.results); 
  // For local Testing

  const [listOfJobs, setListOfJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  // Comment above to test locally with mockData

  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = filteredJobs && filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchData();
  }, []);

  // Comment above to test locally with mockData

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       `https://api.allorigins.win/get?url=${encodeURIComponent(
  //         "https://jobdataapi.com/api/jobs/"
  //       )}`
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       const parsedData = JSON.parse(data.contents); // Parse the response contents when fetch with allorigin proxy
  //       console.log(parsedData);
  //       setListOfJobs(parsedData?.results);
  //       setFilteredJobs(parsedData?.results);
  //     } else {
  //       throw new Error("Network response was not ok.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://jobdataapi.com/api/jobs/");
      const data = await response.json();
      console.log(data.results);
      setListOfJobs(data.results);
      setFilteredJobs(data.results);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter jobs based on selected filters

  useEffect(() => {
    if (!listOfJobs) return;
    const filtered = listOfJobs.filter((job) => {
      const matchesCategory =
        !selectedCategories.length ||
        selectedCategories.some((category) =>
          job?.types?.map((type) => type?.name).includes(category)
        );

      const matchesType =
        !selectedTypes.length ||
        selectedTypes.some(
          (type) => (job?.has_remote ? "Remote" : "Onsite") === type
        );

      const matchesLocation =
        !selectedLocations.length ||
        selectedLocations.includes(job?.countries[0]?.name);

      const matchesExperience =
        !selectedExperienceLevels.length ||
        selectedExperienceLevels.includes(job?.experience_level);

      const matchesSearchQuery =
        !searchQuery ||
        job?.title.toLowerCase().includes(searchQuery.toLowerCase()) || job?.location.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchQuery.toLowerCase()) || job?.countries[0]?.name.toLowerCase().includes(searchQuery.toLowerCase()) || job?.types.map((type) => type?.name).join(" ").toLowerCase().includes(searchQuery.toLowerCase());

      return (
        matchesCategory &&
        matchesType &&
        matchesLocation &&
        matchesExperience &&
        matchesSearchQuery
      );
    });
    setFilteredJobs(filtered);
  }, [
    selectedCategories,
    selectedTypes,
    selectedLocations,
    selectedExperienceLevels,
    searchQuery,
    listOfJobs,
  ]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterSetter) => (newFilter) => {
    filterSetter(newFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(filteredJobs.length / itemsPerPage) || 1);
  }, [filteredJobs]);

  return (
    <div className="min-h-screen">
      <NavBar onSearch={handleSearch} />
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-800"
        >
          ↑
        </button>
      )}
      <div className="body p-4">
        {/* Filters Section */}
        {listOfJobs && (
          <div className="filter-bar flex flex-wrap justify-around items-center rounded-lg">
            <FilterDropdown
              label="Job Category"
              options={["Full Time", "Internship", "Part Time"]}
              onFilterChange={handleFilterChange(setSelectedCategories)}
            />
            <FilterDropdown
              label="Job Type"
              options={["Onsite", "Remote"]}
              onFilterChange={handleFilterChange(setSelectedTypes)}
            />
            <FilterDropdown
              label="Location"
              options={[
                ...new Set(
                  listOfJobs
                    ?.map((job) => job?.countries[0]?.name)
                    .filter(Boolean) || []
                ),
              ]}
              onFilterChange={handleFilterChange(setSelectedLocations)}
            />
            <FilterDropdown
              label="Experience Level"
              options={[
                ...new Set(
                  listOfJobs
                    ?.map((job) => job.experience_level)
                    .filter(Boolean) || []
                ),
              ]}
              onFilterChange={handleFilterChange(setSelectedExperienceLevels)}
            />
          </div>
        )}
        <div className="job-listing flex flex-wrap justify-center">
          {loading ? (
            Array(itemsPerPage)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          ) : currentJobs && currentJobs.length > 0 ? (
            currentJobs
              .map((result, index) => <Card key={index} jobData={result} />)
          ) : (
            <div className="no-jobs-found text-center mt-10 text-white">
              <h2 className="text-2xl font-bold">No jobs found</h2>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you are looking
                for.
              </p>
            </div>
          )}

          {/* For local testing */}
          {/* {currentJobs.length > 0 ? (
            currentJobs.map((result, index) => (
              <Card key={index} jobData={result} />
            ))
          ) : (
            <div className="no-jobs-found text-center mt-10 text-white">
              <h2 className="text-2xl font-bold">No jobs found</h2>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )} */}
        </div>
        <div className="pagination-controls text-white flex justify-center items-center my-4 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-800 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-xl">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-800 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <Footer
        setListOfJobs={setListOfJobs}
        setFilteredJobs={setFilteredJobs}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Body;
