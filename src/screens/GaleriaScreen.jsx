import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { fetchImagens } from "../api/nasaApi";

export default function GaleriaScreen({ navigation }) {
  const [imagens, setImagens] = useState([]);
  const [astro, setAstro] = useState("earth");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarImagens();
  }, []);

  async function carregarImagens() {
    setLoading(true);
    const dados = await fetchImagens(astro);
    setImagens(dados);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Galeria NASA</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um astro (e.g., moon, mars)"
        value={astro}
        onChangeText={setAstro}
        onSubmitEditing={carregarImagens}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={imagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Detalhes", { imagem: item })}
            >
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
              <Text style={styles.tituloImagem}>{item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    height: 150,
  },
  tituloImagem: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});
