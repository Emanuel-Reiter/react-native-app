import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";

import Header from "./src/components/Header/index.js"
import Form from "./src/components/Form/index.js";

const backgroundImage = {uri: "https://e1.pxfuel.com/desktop-wallpaper/793/794/desktop-wallpaper-japanese-aesthetic-list-android-aesthetic-japan.jpg"};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
       <Header />
       <Form />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'hsl(220, 75%, 50%)',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
});
