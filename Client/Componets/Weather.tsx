import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../utils/styleSheet";

interface Weather {
  name?: string;
  main?: {
    temp: number;
    cloud: string
  };
  weather?: {
    main?: string;
    description?: string;
  }[];
}
 
const api = {
  key: "1ea8bb138d4561028b49eab57b22c08f",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState<string>("");
  const [weather, setWeather] = useState<Weather>({});

  const SearchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result: Weather) => {
        setWeather(result);
      }
      );
  };

  return (
    <View style={styles.containertwo}>
      <View>
        <TextInput 
          placeholder="Skriv stad eller land.."
          onChangeText={(text) => setSearch(text)}
        />
        {typeof weather.main != "undefined" ? (
          <View>
            <Text style={styles.citat}>temperatur: {weather.main.temp} *C</Text>

          </View>
        ) : (
          <></>
          )}
          <Button color="#B18DC1" title="Sök" onPress={SearchPressed} />
      </View>
    </View>
  );
}

