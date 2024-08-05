import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import AnimatedImage from "../components/AnimatedImage";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToPage = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <AnimatedImage source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Evaluar Paciente"
          onPress={() => goToPage("FormScreen")}
        />
        <CustomButton
          title="Ver Historial"
          onPress={() => goToPage("HistorialScreen")}
        />
        <CustomButton
          title="Acerca de la aplicacion"
          onPress={() => goToPage("AboutScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: "25%",
  },
});
