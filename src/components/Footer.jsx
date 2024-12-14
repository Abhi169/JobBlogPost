import React from "react";

const Footer = ( {setListOfJobs, setFilteredJobs, setLoading } ) => {
  /* AllOrigin Proxy Code
  const handleRegion = async (countryCode) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobdataapi.com/api/jobs/?country_code=${countryCode}`
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        setListOfJobs(parsedData?.results);
        setFilteredJobs(parsedData?.results);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTechnology = async (technology) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobdataapi.com/api/jobs/?title=${technology.toLowerCase()}`
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);

        setListOfJobs(parsedData?.results);
        setFilteredJobs(parsedData?.results);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  */

  const handleRegion = async (countryCode) => {
      setLoading(true);
      try {
          const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobdataapi.com/api/jobs/?country_code=${countryCode}`);
          const data = await response.json();
          setListOfJobs(data.results);
      } catch (error) {
          console.error("Error fetching jobs:", error);
      } finally {
          setLoading(false);
      }
  }

  const handleTechnology = async (technology) => {
      setLoading(true);
      try {
          const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobdataapi.com/api/jobs/?title=${technology.toLowerCase()}`);
          const data = await response.json();
          setListOfJobs(data.results);
      } catch (error) {
          console.error("Error fetching jobs:", error);
      } finally {
          setLoading(false);
      }
  }

  const countriesByRegion = [
    {
      region: "Africa",
      countries: [
        { code: "DZ", name: "Algeria" },
        { code: "AO", name: "Angola" },
        { code: "BJ", name: "Benin" },
        { code: "BW", name: "Botswana" },
        { code: "BF", name: "Burkina Faso" },
        { code: "BI", name: "Burundi" },
        { code: "CV", name: "Cabo Verde" },
        { code: "CM", name: "Cameroon" },
        { code: "TD", name: "Chad" },
        { code: "KM", name: "Comoros" },
        { code: "CG", name: "Congo" },
        { code: "CI", name: "Côte d'Ivoire" },
        { code: "DJ", name: "Djibouti" },
        { code: "GQ", name: "Equatorial Guinea" },
        { code: "SZ", name: "Eswatini" },
        { code: "ET", name: "Ethiopia" },
        { code: "GA", name: "Gabon" },
        { code: "GM", name: "Gambia" },
        { code: "GH", name: "Ghana" },
        { code: "GN", name: "Guinea" },
        { code: "GW", name: "Guinea-Bissau" },
        { code: "KE", name: "Kenya" },
        { code: "LS", name: "Lesotho" },
        { code: "LR", name: "Liberia" },
        { code: "MG", name: "Madagascar" },
        { code: "MW", name: "Malawi" },
        { code: "ML", name: "Mali" },
        { code: "MU", name: "Mauritius" },
        { code: "MA", name: "Morocco" },
        { code: "MZ", name: "Mozambique" },
        { code: "NA", name: "Namibia" },
        { code: "NE", name: "Niger" },
        { code: "NG", name: "Nigeria" },
        { code: "RE", name: "Réunion" },
        { code: "RW", name: "Rwanda" },
        { code: "SN", name: "Senegal" },
        { code: "SC", name: "Seychelles" },
        { code: "SL", name: "Sierra Leone" },
        { code: "SO", name: "Somalia" },
        { code: "ZA", name: "South Africa" },
        { code: "SS", name: "South Sudan" },
        { code: "SD", name: "Sudan" },
        { code: "TZ", name: "Tanzania" },
        { code: "TG", name: "Togo" },
        { code: "TN", name: "Tunisia" },
        { code: "UG", name: "Uganda" },
        { code: "ZM", name: "Zambia" },
        { code: "ZW", name: "Zimbabwe" },
      ],
    },
    {
      region: "Asia/Pacific",
      countries: [
        { code: "AM", name: "Armenia" },
        { code: "AU", name: "Australia" },
        { code: "AZ", name: "Azerbaijan" },
        { code: "BD", name: "Bangladesh" },
        { code: "BT", name: "Bhutan" },
        { code: "BN", name: "Brunei" },
        { code: "KH", name: "Cambodia" },
        { code: "CC", name: "Cocos Islands" },
        { code: "CK", name: "Cook Islands" },
        { code: "FJ", name: "Fiji" },
        { code: "PF", name: "French Polynesia" },
        { code: "GU", name: "Guam" },
        { code: "HK", name: "Hong Kong" },
        { code: "IN", name: "India" },
        { code: "ID", name: "Indonesia" },
        { code: "JP", name: "Japan" },
        { code: "KZ", name: "Kazakhstan" },
        { code: "KI", name: "Kiribati" },
        { code: "LA", name: "Laos" },
        { code: "MO", name: "Macao" },
        { code: "MY", name: "Malaysia" },
        { code: "MV", name: "Maldives" },
        { code: "MH", name: "Marshall Islands" },
        { code: "FM", name: "Micronesia" },
        { code: "MN", name: "Mongolia" },
        { code: "NR", name: "Nauru" },
        { code: "NP", name: "Nepal" },
        { code: "NC", name: "New Caledonia" },
        { code: "NZ", name: "New Zealand" },
        { code: "NU", name: "Niue" },
        { code: "PK", name: "Pakistan" },
        { code: "PW", name: "Palau" },
        { code: "PS", name: "Palestine" },
        { code: "PG", name: "Papua New Guinea" },
        { code: "PH", name: "Philippines" },
        { code: "WS", name: "Samoa" },
        { code: "SG", name: "Singapore" },
        { code: "SB", name: "Solomon Islands" },
        { code: "KR", name: "South Korea" },
        { code: "LK", name: "Sri Lanka" },
        { code: "TW", name: "Taiwan" },
        { code: "TJ", name: "Tajikistan" },
        { code: "TH", name: "Thailand" },
        { code: "TL", name: "Timor-Leste" },
        { code: "TO", name: "Tonga" },
        { code: "TV", name: "Tuvalu" },
        { code: "UZ", name: "Uzbekistan" },
        { code: "VU", name: "Vanuatu" },
        { code: "VN", name: "Vietnam" },
      ],
    },
    {
      region: "Europe",
      countries: [
        { code: "AL", name: "Albania" },
        { code: "AD", name: "Andorra" },
        { code: "AT", name: "Austria" },
        { code: "BE", name: "Belgium" },
        { code: "BA", name: "Bosnia" },
        { code: "BG", name: "Bulgaria" },
        { code: "HR", name: "Croatia" },
        { code: "CZ", name: "Czechia" },
        { code: "DK", name: "Denmark" },
        { code: "EE", name: "Estonia" },
        { code: "FO", name: "Faroe Islands" },
        { code: "FI", name: "Finland" },
        { code: "FR", name: "France" },
        { code: "DE", name: "Germany" },
        { code: "GI", name: "Gibraltar" },
        { code: "GR", name: "Greece" },
        { code: "GG", name: "Guernsey" },
        { code: "HU", name: "Hungary" },
        { code: "IS", name: "Iceland" },
        { code: "IE", name: "Ireland" },
        { code: "IT", name: "Italy" },
        { code: "XK", name: "Kosovo" },
        { code: "LV", name: "Latvia" },
        { code: "LI", name: "Liechtenstein" },
        { code: "LT", name: "Lithuania" },
        { code: "LU", name: "Luxembourg" },
        { code: "MT", name: "Malta" },
        { code: "MD", name: "Moldova" },
        { code: "MC", name: "Monaco" },
        { code: "ME", name: "Montenegro" },
        { code: "NL", name: "Netherlands" },
        { code: "MK", name: "North Macedonia" },
        { code: "NO", name: "Norway" },
        { code: "PL", name: "Poland" },
        { code: "PT", name: "Portugal" },
        { code: "RO", name: "Romania" },
        { code: "SM", name: "San Marino" },
        { code: "RS", name: "Serbia" },
        { code: "SK", name: "Slovakia" },
        { code: "SI", name: "Slovenia" },
        { code: "ES", name: "Spain" },
        { code: "SE", name: "Sweden" },
        { code: "CH", name: "Switzerland" },
        { code: "UA", name: "Ukraine" },
        { code: "GB", name: "United Kingdom" },
      ],
    },
    {
      region: "Middle East",
      countries: [
        { code: "BH", name: "Bahrain" },
        { code: "CY", name: "Cyprus" },
        { code: "EG", name: "Egypt" },
        { code: "IQ", name: "Iraq" },
        { code: "IL", name: "Israel" },
        { code: "JO", name: "Jordan" },
        { code: "KW", name: "Kuwait" },
        { code: "LB", name: "Lebanon" },
        { code: "OM", name: "Oman" },
        { code: "QA", name: "Qatar" },
        { code: "TR", name: "Turkey" },
        { code: "AE", name: "UAE" },
      ],
    },
    {
      region: "North America",
      countries: [
        { code: "AW", name: "Aruba" },
        { code: "BS", name: "Bahamas" },
        { code: "BB", name: "Barbados" },
        { code: "BZ", name: "Belize" },
        { code: "BM", name: "Bermuda" },
        { code: "CA", name: "Canada" },
        { code: "KY", name: "Cayman Islands" },
        { code: "CR", name: "Costa Rica" },
        { code: "CW", name: "Curaçao" },
        { code: "DO", name: "Dominican Republic" },
        { code: "SV", name: "El Salvador" },
        { code: "GL", name: "Greenland" },
        { code: "GD", name: "Grenada" },
        { code: "GP", name: "Guadeloupe" },
        { code: "GT", name: "Guatemala" },
        { code: "HT", name: "Haiti" },
        { code: "HN", name: "Honduras" },
        { code: "JM", name: "Jamaica" },
        { code: "MQ", name: "Martinique" },
        { code: "MX", name: "Mexico" },
        { code: "NI", name: "Nicaragua" },
        { code: "PA", name: "Panama" },
        { code: "PR", name: "Puerto Rico" },
        { code: "US", name: "United States" },
      ],
    },
    {
      region: "South America",
      countries: [
        { code: "AR", name: "Argentina" },
        { code: "BO", name: "Bolivia" },
        { code: "BR", name: "Brazil" },
        { code: "CL", name: "Chile" },
        { code: "CO", name: "Colombia" },
        { code: "EC", name: "Ecuador" },
        { code: "GF", name: "French Guiana" },
        { code: "GY", name: "Guyana" },
        { code: "PY", name: "Paraguay" },
        { code: "PE", name: "Peru" },
        { code: "SR", name: "Suriname" },
        { code: "UY", name: "Uruguay" },
        { code: "VE", name: "Venezuela" },
      ],
    },
  ];

  const renderCountriesByRegion = (region) => {
    const regionCountries =
      countriesByRegion.find((r) => r.region === region)?.countries || [];
    return regionCountries.map((country) => (
      <li key={country.code}>
        <button
          onClick={() => handleRegion(country.code)}
          className="text-white hover:text-blue-500 flex flex-wrap"
        >
          {country.name}
        </button>
      </li>
    ));
  };

  const technologies = ["Python", "JavaScript", "PHP"];

  const renderTechnologies = () => {
    return technologies.map((tech) => (
      <li key={tech}>
        <button
          onClick={() => handleTechnology(tech)}
          className="text-white hover:text-blue-500"
        >
          {tech}
        </button>
      </li>
    ));
  };

  return (
    <div className="footer text-white flex flex-col md:flex-row justify-evenly py-4 bg-gray-800">
      <div className="footer-left md:w-1/4 m-2">
        <h1 className="text-2xl font-bold">
          <a href="https://github.com/Abhi169/JobBlogPost">
            <u>JobBlogPost</u>
          </a>{" "}
          by{" "}
          <a href="https://linkedin.com/in/abhisek169">
            <u>Abhisek </u>
          </a>
        </h1>
        <p className="mt-2 text-sm">
          A final year project made using ReactJS Library and TailwindCSS for
          styling the components.
        </p>
      </div>
      <div className="vertical-line hidden md:block h-auto w-px bg-white mx-4" />
      <div className="footer-right flex flex-wrap md:flex-wrap md:w-3/4">
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">Africa</h1>
          <ul className="space-y-1">{renderCountriesByRegion("Africa")}</ul>
        </div>
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">Asia/Pacific</h1>
          <ul className="space-y-1">
            {renderCountriesByRegion("Asia/Pacific")}
          </ul>
        </div>
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">Europe</h1>
          <ul className="space-y-1">{renderCountriesByRegion("Europe")}</ul>
        </div>
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">North America</h1>
          <ul className="space-y-1">
            {renderCountriesByRegion("North America")}
          </ul>
        </div>
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">South America</h1>
          <ul className="space-y-1">
            {renderCountriesByRegion("South America")}
          </ul>
        </div>
        <div className="footer-section ml-2 mr-8 mb-4 md:mb-0">
          <h1 className="font-semibold mb-2 md:mt-2">Technology</h1>
          <ul className="space-y-1">{renderTechnologies()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
