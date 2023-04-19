import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Alert,
  ScrollView,
} from "react-native";

interface Props {
  containerStyle?: object;
  imageStyle?: object;
}


export default function selectedImage({containerStyle, imageStyle}: Props) {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const getSelectedImage = async () => {
      try {
        const selectedImage = await AsyncStorage.getItem("selectedImage");
        if (selectedImage != null) {
          setSelectedImageUrl(selectedImage);
        }
      } catch {
        Alert.alert("Något gick fel, försök igen");
      }
    };
    getSelectedImage();
  }, []);

  return (
    <View style={containerStyle} >
      <ScrollView style={{ width: "90%" }}>
        {selectedImageUrl && (
          <Image
            style={imageStyle}
            source={{ uri: selectedImageUrl }}
          ></Image>
        )}
      </ScrollView>
     
    </View>
  );
}