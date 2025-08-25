import "./Weather.css";
import { useState, useEffect } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import {
  X,
  KeyRound,
  MapPin,
  ArrowBigUp,
  ArrowBigDown,
  Sunset,
  Sunrise,
} from "lucide-react";
import { RiBowlFill } from "react-icons/ri";
import Modal from "../../Modal/Modal.jsx";
import Banner from "../../Banner/Banner.jsx";
import { TbCodeCircle2Filled } from "react-icons/tb";
import Button from "../../Button/Button.jsx";
import { Segment, SegmentOption } from "../../Segment/Segment.jsx";
import SunnyIcon from "../../../assets/icons/Sunny";
import ClearIcon from "../../../assets/icons/Clear";
import CloudyIcon from "../../../assets/icons/Cloudy";
import PartlyCloudyIcon from "../../../assets/icons/PartlyCloudy";
import PartlyCloudyNightIcon from "../../../assets/icons/PartlyCloudyNight";
import ThunderstormIcon from "../../../assets/icons/Thunderstorm";

// ============ Housing component ============
export default function WeatherData() {
  const currentPageData = pages.find((page) => page.link === "weather");

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const handleEditItem = () => {
  //   console.log("Item edited");
  //   setShowModal(false);
  // };

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This weather data component uses 3 different APIs - Weather, Reverse Geocoding and JavaScript's Geolocation API. It includes useEffect so I can practice that as well. To Do: Look at performance issues (delays with re-rendering and fetching data); Local time is not kept in sync; Segement option not highlighting properly."
      />
      <Weather />
    </>
  );
}

const GEO_API_KEY = "26f4a9018a024fb7aa331d60272c59e3";

function Weather() {
  // Coordinates for fixed locations
  const home = [51.0656792, 0.7000632];
  const newYork = [40.712894, -74.013899];
  const dubai = [25.188053, 55.250898];
  const singapore = [1.2868, 103.8545];
  const sydney = [-33.861106, 151.210941];
  const warsaw = [52.2348, 21.009141];

  // State variables
  const [selectedLocation, setSelectedLocation] = useState(home);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentGeolocation, setCurrentGeolocation] = useState([]);
  const [showFahrenheit, setshowFahrenheit] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState("");

  // Function to handle location change
  function handleLocationSelection(selectedLocation) {
    setSelectedLocation(selectedLocation);
  }

  function handleSelectFahrenheit() {
    setshowFahrenheit(!showFahrenheit);
    console.log(showFahrenheit);
  }

  // Fetch current weather data for the selected location
  useEffect(
    function () {
      async function fetchWeather() {
        // Destructure lat and long (position 0 and 1) from currentLocation array
        const [lat, long] = selectedLocation;

        // Only fetch if the array has 2 values (timing logic)
        if (selectedLocation.length === 2) {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&models=ukmo_seamless&current=temperature_2m,weather_code,is_day&${showFahrenheit ? "temperature_unit=fahrenheit" : ""}&timezone=auto`,
          );
          const data = await response.json();

          // Set current temperature to returned temperature
          setCurrentWeather(data);
        }
      }

      // Call function with the data
      fetchWeather();
    },

    // This effect will re-run whenever currentLocation changes
    [selectedLocation, showFahrenheit],
  );

  //Get current position coordinates for dynamic location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Callback for successful geolocation
        const coords = [position.coords.latitude, position.coords.longitude];
        setCurrentGeolocation(coords);
        setSelectedLocation(coords);
      },

      // Callback for geolocation not found
      function () {
        alert("Position not found!");
      },
    );
  }, []);

  useEffect(
    function () {
      async function fetchGeocode() {
        const [lat, long] = selectedLocation;
        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${GEO_API_KEY}`,
        );
        const data = await response.json();

        setCurrentCity(data.features[0].properties.city);
        setCurrentCountry(data.features[0].properties.country);
        setCurrentTimezone(data.features[0].properties.timezone.name);
      }
      fetchGeocode();
    },
    [selectedLocation],
  );

  return (
    <>
      <div style={{ margin: "40px 0px 20px 0px" }}>
        <Segment>
          <SegmentOption
            icon={<MapPin size={12} />}
            text="Current"
            active={selectedLocation === currentGeolocation}
            onClick={() => handleLocationSelection(currentGeolocation)}
          />
          <SegmentOption
            text="🇬🇧 Home"
            active={selectedLocation === home}
            onClick={() => handleLocationSelection(home)}
          />
          <SegmentOption
            text="🇺🇸 New York"
            active={selectedLocation === newYork}
            onClick={() => handleLocationSelection(newYork)}
          />
          <SegmentOption
            text="🇦🇪 Dubai"
            active={selectedLocation === dubai}
            onClick={() => handleLocationSelection(dubai)}
          />
          <SegmentOption
            text="🇸🇬 Singapore"
            active={selectedLocation === singapore}
            onClick={() => handleLocationSelection(singapore)}
          />
          <SegmentOption
            text="🇦🇺 Sydney"
            active={selectedLocation === sydney}
            onClick={() => handleLocationSelection(sydney)}
          />
          <SegmentOption
            text="🇵🇱 Warsaw"
            active={selectedLocation === warsaw}
            onClick={() => handleLocationSelection(warsaw)}
          />
        </Segment>
      </div>
      <WeatherDisplay
        data={currentWeather}
        currentCity={currentCity}
        currentCountry={currentCountry}
        showFahrenheit={showFahrenheit}
        onSelectFahrenheit={handleSelectFahrenheit}
        timezone={currentTimezone}
      />
    </>
  );
}

const weatherCodeMap = {
  0: {
    day: "Sunny",
    dayIcon: <SunnyIcon />,
    night: "Clear",
    nightIcon: <ClearIcon />,
  },
  1: {
    day: "Mostly Sunny",
    dayIcon: <SunnyIcon />,
    night: "Mostly Clear",
    nightIcon: <SunnyIcon />,
  },
  2: {
    day: "Partly Cloudy",
    dayIcon: <PartlyCloudyIcon />,
    night: "Partly Cloudy",
    nightIcon: <PartlyCloudyNightIcon />,
  },
  3: {
    day: "Cloudy",
    dayIcon: <CloudyIcon />,
    night: "Cloudy",
    nightIcon: <CloudyIcon />,
  },
  45: { day: "Foggy", night: "Foggy" },
  48: { day: "Rime Fog", night: "Rime Fog" },
  51: { day: "Drizzle", night: "Drizzle" },
  53: { day: "Drizzle", night: "Drizzle" },
  55: { day: "Drizzle", night: "Drizzle" },
  56: { day: "Freezing Drizzle", night: "Freezing Drizzle" },
  57: { day: "Freezing Drizzle", night: "Freezing Drizzle" },
  61: { day: "Light Rain", night: "Light Rain" },
  63: { day: "Rain", night: "Rain" },
  65: { day: "Heavy Rain", night: "Heavy Rain" },
  66: { day: "Freezing Rain", night: "Freezing Rain" },
  67: { day: "Freezing Rain", night: "Freezing Rain" },
  71: { day: "Light Snow", night: "Light Snow" },
  73: { day: "Snow", night: "Snow" },
  75: { day: "Heavy Snow", night: "Heavy Snow" },
  77: { day: "Snow Grains", night: "Snow Grains" },
  80: { day: "Light Showers", night: "Light Showers" },
  81: { day: "Showers", night: "Showers" },
  82: { day: "Heavy Showers", night: "Heavy Showers" },
  85: { day: "Light Snow Showers", night: "Light Snow Showers" },
  86: { day: "Snow Showers", night: "Snow Showers" },
  95: {
    day: "Thunderstorms",
    dayIcon: <ThunderstormIcon />,
    night: "Thunderstorms",
    nightIcon: <ThunderstormIcon />,
  },
  96: {
    day: "Thunderstorms",
    dayIcon: <ThunderstormIcon />,
    night: "Thunderstorms",
    nightIcon: <ThunderstormIcon />,
  },
  99: {
    day: "Thunderstorms",
    dayIcon: <ThunderstormIcon />,
    night: "Thunderstorms",
    nightIcon: <ThunderstormIcon />,
  },
};

function WeatherDisplay({
  data,
  currentCity,
  currentCountry,
  showFahrenheit,
  onSelectFahrenheit,
  timezone,
}) {
  if (!data) {
    return <div>Loading weather data...</div>;
  }

  const weatherCode = data.current.weather_code;
  const isDay = data.current.is_day;
  const sunrise = new Date(data.daily.sunrise[0]).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(data.daily.sunset[0]).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (!timezone) {
    return <div>Loading...</div>;
  }

  const localTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
  });

  const cardStyle = {
    background: isDay
      ? "linear-gradient(rgb(57 133 253 / 20%) 20%, transparent 60%)"
      : "linear-gradient(rgb(0 17 102 / 20%) 20%, transparent 60%)",
    boxShadow: "var(--shadow-stroked-md)",
    padding: "var(--spacing-9)",
    borderRadius: "var(--radius-md)",
    maxWidth: "440px",
  };

  return (
    <div style={cardStyle}>
      <div className="weather__header">
        {data ? <h3>{`${currentCity}, ${currentCountry}`}</h3> : "Loading..."}{" "}
        <Button label="Toggle unit" size="sm" onClick={onSelectFahrenheit} />
      </div>
      <div className="hero">
        <div style={{ height: "80px", width: "80px" }}>
          {isDay
            ? weatherCodeMap[weatherCode].dayIcon
            : weatherCodeMap[weatherCode].nightIcon || `Code ${weatherCode}`}
        </div>
        <h2 className="weather__temp">
          {Math.round(data.current.temperature_2m)}º{showFahrenheit ? "F" : "C"}
        </h2>
      </div>
      <h3>
        {localTime} <span className="bullet__separator">•</span>{" "}
        {isDay
          ? weatherCodeMap[weatherCode].day
          : weatherCodeMap[weatherCode].night || "Invalid code"}
      </h3>
      <div className="weather__additional">
        <div className="weather__minmax">
          <span className="weather__info">
            <ArrowBigUp fill="var(--colour-red-50)" stroke="transparent" />
            {Math.round(data.daily.temperature_2m_max[0])}º
            {showFahrenheit ? "F" : "C"}
          </span>
          <span className="weather__info">
            <ArrowBigDown fill="var(--colour-blue-50)" stroke="transparent" />
            {Math.round(data.daily.temperature_2m_min[0])}º
            {showFahrenheit ? "F" : "C"}
          </span>
        </div>
        <div className="weather__sunrise-sunset">
          <div className="weather__info">
            <Sunrise />
            <span>{sunrise}</span>
          </div>
          <div className="weather__info">
            <Sunset />
            <span>{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
