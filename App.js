import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GaleriaScreen from "./src/screens/GaleriaScreen";
import DetalhesImagemScreen from "./src/screens/DetalhesImagemScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Galeria NASA" component={GaleriaScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesImagemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
