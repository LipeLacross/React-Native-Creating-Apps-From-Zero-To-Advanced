import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { getPixel } from './src/utils';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface AppState {
  region: Region | null;
  destLocation: Coordinates | null;
  loading: boolean;
}

export default class App extends Component<{}, AppState> {
  private map: MapView | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      region: null,
      destLocation: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      // Solicita permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão Negada',
          'É necessário permitir o acesso à localização para usar o mapa.'
        );
        this.setState({ loading: false });
        return;
      }

      // Obtém a localização atual
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;

      this.setState({
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0121
        },
        loading: false
      });
    } catch (error) {
      console.error('Erro ao obter localização:', error);
      Alert.alert('Erro', 'Não foi possível obter sua localização.');
      this.setState({ loading: false });
    }
  }

  render() {
    const { region, loading } = this.state;

    if (loading) {
      return (
        <View style={[styles.container, styles.centered]}>
          <Text style={styles.loadingText}>Carregando localização...</Text>
        </View>
      );
    }

    if (!region) {
      return (
        <View style={[styles.container, styles.centered]}>
          <Text style={styles.errorText}>Não foi possível obter sua localização.</Text>
          <Text style={styles.errorSubText}>Verifique as permissões do app.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <MapView
          ref={(map: MapView | null) => { this.map = map }}
          style={styles.mapa}
          region={region}
          loadingEnabled
          showsUserLocation
          showsMyLocationButton>

          {this.state.destLocation && this.state.region &&
            <MapViewDirections
              origin={this.state.region}
              destination={this.state.destLocation}
              apikey="AIzaSyCpdXfzbTuVwwHNNcHLrL66T-to4Fg9EQc"
              strokeWidth={5}
              strokeColor="#000"
              onReady={(result: any) => {
                if (this.map) {
                  this.map.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixel(50),
                      left: getPixel(50),
                      top: getPixel(50),
                      bottom: getPixel(50)
                    }
                  });
                }
              }}
              onError={(errorMessage) => {
                console.error('Erro no MapViewDirections:', errorMessage);
              }}
            />
          }

        </MapView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4634685,
                  longitude: -54.6108303
                }
              });
            }}>
              <Text style={styles.localText}>Burger King</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4625000,
                  longitude: -54.6000000
                }
              });
            }}>
              <Text style={styles.localText}>Shopping</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4615409,
                  longitude: -54.5919008
                }
              });
            }}>
              <Text style={styles.localText}>Farmácia</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4620000,
                  longitude: -54.5950000
                }
              });
            }}>
              <Text style={styles.localText}>Sushi</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4640000,
                  longitude: -54.6050000
                }
              });
            }}>
              <Text style={styles.localText}>Trabalho</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -20.4610000,
                  longitude: -54.6020000
                }
              });
            }}>
              <Text style={styles.localText}>Restaurante</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    fontSize: 16,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  errorSubText: {
    fontSize: 14,
    color: '#666',
  },
  mapa: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    top: 30,
    margin: 10,
    height: 70
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localBtn: {
    backgroundColor: '#FF0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localText: {
    color: '#FFF'
  }
});

