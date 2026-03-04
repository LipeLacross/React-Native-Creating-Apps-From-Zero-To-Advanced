import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ProductProps = {
  data: {
    id: string;
    name: string;
    price: number;
  };
  addToCart: () => void;
}

export default function Product({ data, addToCart }: ProductProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold'
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#168fff',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

