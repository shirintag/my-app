import React from 'react';
import { StyleSheet, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import data from '../data.json';

export default function Map() {
  const venues = data.filter(
    x => x.City == 'LYON' && x.Latitude && x.Longitude
  );

  return (
    <Modal visible={true}>
        <MapView
            style={styles.MapContainer}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={{
              latitude: 45.76,
              longitude: 4.83,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.033
            }}
        >
            {venues.map((place, index) => (
            <Marker
                key={index}
                coordinate={{ latitude: place.Latitude, longitude: place.Longitude }}
            />
            ))}
      </MapView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  MapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 'auto' 
  }
});
