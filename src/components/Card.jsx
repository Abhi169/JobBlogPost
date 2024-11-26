import React, {useState} from "react";
import { createPortal } from "react-dom";
import JobDescription from "./JobDescription";

const Card = (props) => {
  const {
    title,
    location,
    has_remote,
    company,
    experience_level,
    published,
    application_url,
    description,
  } = props.jobData;

  const [showDescription, setShowDescription] = useState(false);

  const handleDescriptionClick = () => {
    setShowDescription(!showDescription);
  };

  const handleCloseClick = () => {
    setShowDescription(false);
  }

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowDescription(false);
    }
  };

  return (
    <div className="border-4 border-transparent hover:border-sky-400 m-10 max-w-64 bg-red-100 rounded-lg flex flex-col justify-between transition duration-200 h-96 overflow-hidden">
      {/* Card Header */}
      <div className="card-header flex items-center p-5 flex-wrap">
        <div className="company-logo w-24 h-24 flex-shrink-0">
          <img
            src={company?.logo}
            className="w-full h-full object-cover rounded-lg ml-1.5"
            alt={`${company?.name || "Company"} Logo`}
          />
        </div>
        <div className="company-details mt-2 sm:ml-2">
          <h1 className="font-semibold text-sm">{title}</h1>
          <h2 className="text-xs text-gray-700">{company?.name}</h2>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body p-5 text-sm font-light overflow-auto">
        <div className="job-location">
          <h3>
            {location}, {has_remote ? "Remote" : "On-site"}
          </h3>
        </div>
        <div className="job-details mt-3">
          <h3>Level: {experience_level || "NA"}</h3>
          <h3>Published: {new Date(published).toLocaleDateString()}</h3>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer p-5 flex justify-start">
        <button
          onClick={() => window.open(application_url)}
          className="bg-blue-600 rounded-full px-4 py-2 text-white hover:bg-blue-800"
        >
          Apply Now
        </button>
        <button
          onClick={handleDescriptionClick}
          className="bg-blue-600 rounded-full px-4 py-2 ml-3 text-white hover:bg-blue-800"
        >
          Description
        </button>
      </div>
      {/* {showDescription && (
        <div
          className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative mx-4">
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <JobDescription description={description} />
          </div>
        </div>
      )} */}
      {showDescription &&
        createPortal(
          <div
            className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60"
            onClick={handleOutsideClick}
          >
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative mx-4">
              <button
                onClick={handleCloseClick}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <JobDescription description={description} />
            </div>
          </div>,
          document.getElementById("modal-root") // Ensure this div exists in your HTML
        )}
    </div>
  );
};

export default Card;
