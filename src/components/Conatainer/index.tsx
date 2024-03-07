import styled from "styled-components/native";
import Constants from "expo-constants";

export interface ContainerMarginProps {
  $margin?: string;
  $mt?: number;
  $mb?: number;
  $ml?: number;
  $mr?: number;
  $gap?: number;
  $fd?: string;
  $pd?: string;
  $pdL?: number;
  $pdR?: number;
  $pdB?: number;
  $pdT?: number;
  $justContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $alingItens?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  $width?: string;
  $height?: string;
  $bgColor?: "";
  $borderRadius?: number;
  $clickButton?: boolean;
}

export const Container = styled.View<ContainerMarginProps>`
  flex:1;
  justify-content: ${({ $justContent }) =>
    $justContent !== undefined ? `${$justContent}` : "center"};
  align-items: ${({ $alingItens }) =>
    $alingItens !== undefined ? `${$alingItens}` : "center"};
`;

export const ContainerMargin = styled.View<ContainerMarginProps>`
  padding: ${({ $pd }) => ($pd !== undefined ? $pd : "0px")};
  margin: ${({ $margin }) => ($margin !== undefined ? $margin : "0px")};
  margin-top: ${({ $mt }) => ($mt !== undefined ? `${$mt}px` : "0px")};
  margin-bottom: ${({ $mb }) => ($mb !== undefined ? `${$mb}px` : "0px")};
  margin-left: ${({ $ml }) => ($ml !== undefined ? `${$ml}px` : "0px")};
  margin-right: ${({ $mr }) => ($mr !== undefined ? `${$mr}px` : "0px")};
  gap: ${({ $gap }) => ($gap !== undefined ? `${$gap}px` : "0px")};
  flex-direction: ${({ $fd }) => ($fd !== undefined ? `${$fd}` : "column")};
  width: ${({ $width }) => ($width !== undefined ? `${$width}` : "90%")};
  height: ${({ $height }) => ($height !== undefined ? `${$height}` : "100%")};
  justify-content: ${({ $justContent }) =>
    $justContent !== undefined ? `${$justContent}` : "center"};
  align-items: ${({ $alingItens }) =>
    $alingItens !== undefined ? `${$alingItens}` : "center"};
  background-color: ${({ $bgColor }) =>
    $bgColor !== undefined ? `${$bgColor}` : "transparente"};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius !== undefined ? `${$borderRadius}px` : "0px"};
`;

export const ContainerScrollView = styled.ScrollView.attrs<ContainerMarginProps>(
  (props) => ({
    contentContainerStyle: {
      justifyContent: props.$justContent || "center",
      alignItems: props.$alingItens || "center",
    },
  })
)`
  flex: 1;
  margin: ${({ $margin }) => ($margin !== undefined ? $margin : "0px")};
  margin-top: ${({ $mt }) => ($mt !== undefined ? `${$mt}px` : "0px")};
  margin-bottom: ${({ $mb }) => ($mb !== undefined ? `${$mb}px` : "0px")};
  margin-left: ${({ $ml }) => ($ml !== undefined ? `${$ml}px` : "0px")};
  margin-right: ${({ $mr }) => ($mr !== undefined ? `${$mr}px` : "0px")};
  gap: ${({ $gap }) => ($gap !== undefined ? `${$gap}px` : "0px")};
  flex-direction: ${({ $fd }) => ($fd !== undefined ? `${$fd}` : "column")};
  width: ${({ $width }) => ($width !== undefined ? `${$width}` : "100%")};

  /* Estes 2 comandos abaixo deixa o scrollView oculpando apenas o tamanho do conteudeu interno sendo possivel o scrollView ficar no centro */
  flex-grow: 0;
  flex-basis: content;
`;
