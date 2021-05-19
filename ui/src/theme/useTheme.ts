import { createContext, Dispatch, useContext } from "react";

export const Theme = createContext<"light" | "dark">("dark");

export function useTheme() {
  return useContext(Theme);
}

export const ThemeDispatch =
  createContext<Dispatch<"light" | "dark"> | null>(null);

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatch);
  if (!dispatch) {
    throw new Error("ThemeDispatch.Provider is not set!");
  }
  return dispatch;
}
