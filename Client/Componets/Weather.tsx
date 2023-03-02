import React, { useState } from "react";
import { View, Text, TextInput, Button , StyleSheet} from "react-native";

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
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hur ser vädret ut idag?</Text>
        <TextInput 
          placeholder="Skriv stad eller land.."
          onChangeText={(text) => setSearch(text)}
        />
        <Button color="#B18DC1" title="Sök" onPress={SearchPressed} />
        {typeof weather.main != "undefined" ? (
          <View>
            <Text style={styles.titles}>Graderna i {weather.name} är: {weather.main.temp} *C</Text>

          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-between",
      
    },
  
    title: {
      textAlign: "center",
      fontSize: 20,
      padding: 5,
      margin:5
     
    },
    titles: {
     fontSize: 20,
     margin:5
    },
    image: {
      width: "100%",
      height: 200,
      marginBottom: 40,
    },
  });

