import React from "react";
import { View, Text } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function Card({ data }: CardProps) {
  return (
    <View style={styles.card}>
      <Text>
        {data.nome} - {data.data}
      </Text>
      <View>
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
      </View>
    </View>
  );
}
