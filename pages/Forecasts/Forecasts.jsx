import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem.jsx";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return (
    <>
      <Header city={params.city}></Header>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={32}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      ></ForecastListItem>
    </>
  );
}
