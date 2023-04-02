import React from "react";
import { TouchableOpacity, Image } from "react-native";

interface ImageProfileProps {
    imageUrl: string;
    onSelectImage: (imageUrl:string) => void;
  }

const ImageOption = ({imageUrl, onSelectImage}: ImageProfileProps) => {
    return (
      <TouchableOpacity onPress={() => onSelectImage(imageUrl)
      }>
        <Image source={{uri: imageUrl}} style={{width: 100, height: 100}}></Image>
  
      </TouchableOpacity>
    )
  }

  export default ImageOption;