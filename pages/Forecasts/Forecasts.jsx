import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem.jsx";
import { Image, View } from "react-native";
import { getWeatherInterpretation } from "../../utils/meteo-utils.js";

export function Forecasts({}) {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        const day = date.getDay();
        console.log(day);

        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formattedDate}
            temperature={temperature.toFixed(0)}
          ></ForecastListItem>
        );
      })}
    </View>
  );
  console.log(params);
  return (
    <>
      <Header city={params.city}></Header>
      {forecastList}
    </>
  );
}

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
