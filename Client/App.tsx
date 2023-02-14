import React, { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store, useAppDispatch } from "./store/store";
import { RootNavigator } from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { MD2LightTheme, Provider as PaperProvider } from "react-native-paper";
import { setCurrentUser } from "./store/authSlice";
import { getPersistedAuthValues } from "./utils/startGetUser";
import { getProfile } from "./store/profileSlice";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StartupGate>
        <StatusBar style="auto" />
        <RootNavigator />
      </StartupGate>
    </ReduxProvider>
  );
}

interface Props {
  children: JSX.Element[];
}

function StartupGate({ children }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //let interval: NodeJS.Timeout;

    (async () => {
      const persistedAuth = await getPersistedAuthValues();
      dispatch(setCurrentUser(persistedAuth));

      /*interval = setInterval(() => {
        dispatch(getProfile());
      }, 3000);*/
    })();

    /*return () => {
      clearInterval(interval);
    };*/
  }, [dispatch]);

  return <PaperProvider theme={MD2LightTheme}>{children}</PaperProvider>;
}
