import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchImage = async () => {
    const imageIds = ["237", "238", "239", "1", "2"];
    const imageUrls: string[] = [];
    for(const id of imageIds) {
        try {
            const response = await fetch(`https://picsum.photos/id/${id}/info`);
            const data = await response.json()
            const imageUrl = `https://picsum.photos/id/${id}/${data.width}/${data.height}`;
            imageUrls.push(imageUrl)
        }catch {
            alert("Kunde inte hämta bild testa igen!")
        }
    }
    return imageUrls;
}



const FetchProfileImage = () => {
    const [image, setImage] = useState<string[]>([]);
    const [selectedImageUrls, setSelectedImageUrl] = useState<string | null>(null)

    useEffect(() => {
        const fetch = async () => {
            const urls = await fetchImage();
            setImage(urls)
        };
        fetchImage();
    }, [])

    useEffect(() => {
        const getselectedImage = async () => {
            try {
                const selectedImage = await AsyncStorage.getItem("selectedImage")
                if(selectedImage !== null) {
                    setSelectedImageUrl(selectedImage);
                }
            }catch{
                alert("något gick galet")
            }
        }
        getselectedImage()
    }, [])

    

  return (
    <View>
      
    </View>
  )
}

export default FetchProfileImage
