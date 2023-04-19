
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  stylescontainer?: any;
  stylesView?: any;
  stylesimage?: any

}


export default function SelectedImage({stylescontainer,stylesView,stylesimage}: Props) {
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
    <View style={stylescontainer}>
        {selectedImageUrl && (
          <View style={stylesView}>
          <Image
            style={stylesimage}
            source={{ uri: selectedImageUrl }}
          />
          </View>
        )}
    </View>
  );
}

