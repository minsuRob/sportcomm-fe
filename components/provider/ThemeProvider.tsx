import { PropsWithChildren, useEffect, useState } from "react";
import { useColorScheme as useNativewindColorScheme } from "nativewind";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { useColorScheme as useReactNativeColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_STORAGE_KEY = "app-theme";

// To align React Navigation's theme with NativeWind, you can customize the theme colors.
// Replace these with colors from your tailwind.config.js for perfect consistency.
DefaultTheme.colors.background = "white";
DarkTheme.colors.background = "#09090B"; // zinc-950

/**
 * This provider component is the single source of truth for the app's theme.
 * It does the following:
 * 1.  Loads the saved theme from AsyncStorage on app startup.
 * 2.  Defaults to the system's color scheme if no theme is saved.
 * 3.  Saves the theme to AsyncStorage whenever it's changed by the user.
 * 4.  Provides the correct theme to both NativeWind (for className styling)
 *     and React Navigation (for components like headers and tab bars).
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const { colorScheme, setColorScheme } = useNativewindColorScheme();
  const systemColorScheme = useReactNativeColorScheme();
  const [isThemeLoaded, setThemeLoaded] = useState(false);

  // Load the theme from storage on initial mount.
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme) {
          setColorScheme(storedTheme as "light" | "dark");
        } else {
          // If no theme is stored, use the system's default.
          setColorScheme(systemColorScheme ?? 'light');
        }
      } catch (e) {
        // You can add error handling here.
      } finally {
        setThemeLoaded(true);
      }
    };

    loadTheme();
  }, [setColorScheme, systemColorScheme]);

  // Save the theme to storage whenever it changes.
  useEffect(() => {
    if (isThemeLoaded) {
      AsyncStorage.setItem(THEME_STORAGE_KEY, colorScheme);
    }
  }, [colorScheme, isThemeLoaded]);

  // Prevents a flash of the wrong theme while the stored theme is loading.
  if (!isThemeLoaded) {
    return null;
  }

  return (
    <RNThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </RNThemeProvider>
  );
}
