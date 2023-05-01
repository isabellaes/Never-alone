import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  //contaiers
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3EEF6",
  },

  containertwo: {
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          padding: 40
    
        },

        //profile
        containerProfile: {
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-evenly",
             
            },
            imageProfile: {
              width: 100,
              height: 100,
              margin: 5,
            },

            selectedImage: {
              width: 270,
              height: 270,
              borderRadius: 135,
              marginLeft: 20,
              marginBottom: 50,
              marginTop:20,
              borderWidth: 2,
              borderColor: "#c76392",
            },

            titleProfile: {
              textAlign: "center",
              fontSize: 18,
              padding: 5,
              color: "#404040",
              marginBottom: 50,
              textDecorationLine: "underline",
              textDecorationColor: "#404040",
              borderBottomWidth: 1,
              borderBottomStyle: "solid"
              
            },

            imagesmall: {
              width: 80,
              height:80,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "#c76392",
             
            },
            imagesmalls: {
              width: 50,
              height:50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "#c76392",
              
             
            },
            view: {
              marginTop: 10
            },

           

          
        
   // texts     
  textRegular: {
    fontSize: 20,
    color: "#404040",
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
    color: "#404040",
  },

  titletwo: {
    textAlign: "center",
    fontSize: 18,
    padding: 5,
    color: "#404040",
    marginBottom: 50
    
  },



  citat: {
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 10,
    color: "#404040",
  },

  // buttons
  buttonStandard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#B18DC1",
    widht: "50%",
  },
  
  buttontwo: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fcf0f4",
    color: "#c76392",
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingBottom: 8,
    elevation: 10,
  },
 
  //card
  card: {
    backgroundColor: "#FBF1FB",
    borderRadius: 10,
    marginTop: 25,
    padding: 30
    
  },

  //images
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
  imagetwo: {
        width: "100%",
        height: 180,
        marginBottom: 10,
        borderRadius: 20,
      },

  //appbar      
  appbarHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#404040",
    backgroundColor: "#B69EC3",
  },
  appbarBottom: {
    backgroundColor: "#B69EC3",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
