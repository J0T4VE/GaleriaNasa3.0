import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function DetalhesImagemScreen({ route }) {
  const { imagem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{imagem.titulo}</Text>
      <Text style={styles.autor}>Autor: {imagem.autor}</Text>
      <Text style={styles.descricao}>{imagem.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  imagem: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  autor: {
    fontSize: 16,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
  },
});
