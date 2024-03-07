import { CommonActions } from "@react-navigation/native";
import { useEffect } from "react";
import { Container, ContainerMargin } from "../../components/Conatainer";
import { LinearGradienteSplash, LogoBrandWhite } from "./style";
import { HeartAnimated } from "../../components/HeartAnimeted/style";
import { TextSlogan } from "../../components/Texts/style";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      }))
    }, 4000);
  })
  return (
    <Container>

      <LinearGradienteSplash />

      <LogoBrandWhite />

      <ContainerMargin $width="400px" $height="300px" $mb={30} $mt={30}>
        <HeartAnimated />
      </ContainerMargin>

      <TextSlogan>
        Ajudando você a cuidar da sua saúde!
      </TextSlogan>
    </Container>
  )
}