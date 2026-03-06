import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function App() {

  const [photo, setPhoto] = useState<string | null>(null);


  async function openAlbum(){
    // Solicitar permissões
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    // Abrir galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setPhoto(result.assets[0].uri);
    }
  }


  async function openCamera(){
    // Solicitar permissões
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissão para acessar a câmera é necessária!');
      return;
    }

    // Abrir câmera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setPhoto(result.assets[0].uri);
    }
  }

 return (
   <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={openAlbum}>
          <Text style={styles.text}>Abrir album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.text}>Abrir camera</Text>
        </TouchableOpacity>
      </View>


      {photo !== null && (
      <Image
        source={{ uri: photo}}
        style={styles.image}
      />
      )}
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  buttons:{
    marginTop: 44,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 24,
  },
  button:{
    backgroundColor: "#121212",
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  text:{
    color: "#FFF"
  },
  image:{
    width: '90%',
    height: 300,
    objectFit: "cover"
  }
})