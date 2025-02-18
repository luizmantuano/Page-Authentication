import Stack from "./src/routes/stack";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontLoaded] = useFonts({
    "DMSans-Bold": require("./src/assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("./src/assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./src/assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
}
