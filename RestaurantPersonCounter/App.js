import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [limite, setLimite] = useState(10);

  function mudarContador(contador){

    if(contador <= 0) return;

    if(contador >= limite){
      setContador(10)
      return;
    }
    
    setContador(contador)
  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Pessoas no restaurante:
      </Text>
      <Text style={styles.counterText}>
        {contador}
      </Text>

      {contador >= limite && (
        <Text style={styles.warning}>
          Restaurante está no seu limite de pessoas.
        </Text>
      )}


      <View style={styles.buttonContainer}>
        <Pressable
          disabled={contador >= limite}
          style={[
            styles.button,
            contador >= limite && { backgroundColor: "#DDD"}
          ]}
          onPress={() => mudarContador(contador + 1)}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            contador === 0 && { backgroundColor: "#DDD"}
          ]}
          onPress={() => mudarContador(contador - 1)}
        >
          <Text style={styles.buttonText}>Remover</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: "#121212",
    color: "#FFF",
    padding: 14,
    borderRadius: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  warning:{
    backgroundColor: "#F8B135",
    padding: 4,
    borderRadius:4,
  }
});
