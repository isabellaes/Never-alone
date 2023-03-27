import React, { useState, useEffect } from 'react';
import { View , Text} from 'react-native';
import { styles } from "../utils/styleSheet"

interface IData {
  id: number;
  name: string;
  number: string;
  url: string
}

const Contacts: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
 

  const fetchData = async () => {
    try {
      const jsonData = require('./PhoneNumbers.json');
      setData(jsonData.contact);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.card} >
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.citat}>{item.name}  nummer: {item.number}</Text>
          <Text >{item.url}</Text>
        </View>
      ))}
    </View>
  );
};

export default Contacts;


