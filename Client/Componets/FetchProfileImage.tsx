import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../utils/styleSheet";

const fetchImage = async () => {
  const imageIds = ["237", "238", "239", "1", "2"];
  const ImageUrls: string[] = [];
  for (const id of imageIds) {
    try {
      const response = await fetch(`https://picsum.photos/id/${id}/info`);
      const data = await response.json();
      const imageUrl = `https://picsum.photos/id/${id}/${data.width}/${data.height}`;
      ImageUrls.push(imageUrl);
    } catch (error) {
      Alert.alert("Problem att ladda upp bild, försök igen!");
    }
  }

  return ImageUrls;
};

const FetchProfileImage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await fetchImage();
      setImageUrls(urls);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const getSelectedImage = async () => {
      try {
        const selectedImage = await AsyncStorage.getItem("selectedImage");
        if (selectedImage !== null) {
          setSelectedImageUrl(selectedImage);
        }
      } catch (error) {
        Alert.alert("Problem att ladda upp bild, försök igen!");
      }
    };
    getSelectedImage();
  }, []);

  const handleImageSelect = async (imageUrl: string) => {
    try {
      await AsyncStorage.setItem("selectedImage", imageUrl);
      setSelectedImageUrl(imageUrl);
    } catch (error) {
      Alert.alert("Problem att ladda upp bild, försök igen!");
    }
  };

  return (
    <View style={{marginBottom: 50}}>
      {selectedImageUrl ? (
        <TouchableOpacity onPress={() => setSelectedImageUrl(null)}>
          <Image
            style={styles.selectedImage}
            source={{ uri: selectedImageUrl }}
          />
          <TouchableOpacity onPress={() => setSelectedImageUrl(null)}>
            <Text style={styles.titleProfile}>Ändra profilbild</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <View style={styles.fetchContainer}>
          <Text style={styles.fetchtext}>Välj profilbild:</Text>
          {imageUrls.map((url) => (
            <TouchableOpacity key={url} onPress={() => handleImageSelect(url)}>
              <Image style={styles.imageProfile} source={{ uri: url }} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default FetchProfileImage;
