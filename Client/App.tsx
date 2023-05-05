import React, { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store, useAppDispatch } from "./store/store";
import { RootNavigator } from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { MD2LightTheme, Provider as PaperProvider } from "react-native-paper";
import { setCurrentUser } from "./store/authSlice";
import { getPersistedAuthValues } from "./utils/startGetUser";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <StartupGate>
          <StatusBar style="auto" />
          <RootNavigator />
        </StartupGate>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}

interface Props {
  children: JSX.Element[];
}

function StartupGate({ children }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const persistedAuth = await getPersistedAuthValues();
      dispatch(setCurrentUser(persistedAuth));
    })();
  }, [dispatch]);

  return <PaperProvider theme={MD2LightTheme}>{children}</PaperProvider>;
}
