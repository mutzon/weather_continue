import { s } from "./ForecastListItem.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useState } from "react";
import { Image, View } from "react-native";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image}></Image>
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  );
}
