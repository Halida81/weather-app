import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import { showErrorMessage, showSearchMessage, showSuccessMessage } from "./components/helpers";
import Input from "./components/Input";
import Notification from "./components/Notification";
import getFormattedWeatherData from "./components/services/weatherService";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

function App() {
  const [query, setQuery] = useState({ q: "Bishkek" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const message = query.q ? query.q : "current location";

        showSearchMessage("search... " + message);
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          showSuccessMessage(`Succes:  ${data.name}, ${data.country}`);
          setWeather(data);
        });
      } catch (error) {
        showErrorMessage("ups..." + error.name);
      }
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-blue-900 to-gray-900";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-blue-900 to-gray-900 shadow-gray-700";

    return "from-yellow-500 to-orange-900 shadow-orange-500";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl  ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <Notification />
    </div>
  );
}

export default App;
