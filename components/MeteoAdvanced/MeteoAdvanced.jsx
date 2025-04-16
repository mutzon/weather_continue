import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./MeteoAdvanced.style";
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./MeteoAdvanced.style";

export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>asdasd{sunrise}</StyledLabel>
        <StyledValue>sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>asdasd{sunset}</StyledLabel>
        <StyledValue>sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>adas{windspeed}</StyledLabel>
        <StyledValue>windspeed</StyledValue>
      </StyledContainer>
    </View>
  );
}
