import { Link } from "@react-navigation/native";
import React from "react";

interface ContactProps {
      name: string,
      number: number,
      url: string
    } 
  
  

const Contacts = ({name, number, url}:ContactProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {number}</p>
      <Link to={url} children={url}></Link>
    </div>
  );
};

export default Contacts;
