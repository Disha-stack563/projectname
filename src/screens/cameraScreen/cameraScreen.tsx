import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';

class TakePicture extends Component {
  state = {
    imageUri: null,
  };

  requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs camera access to take pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  takePicture = async () => {
    const hasPermission = await this.requestCameraPermission();
    if (!hasPermission) {
      alert('Camera permission denied');
      return;
    }

    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'front',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0].uri;
          console.log('Image URI:', uri);
          this.setState({ imageUri: uri });
        }
      }
    );
  };

  render() {
    const { imageUri } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
          <Text style={styles.captureText}>Take Photo</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#5A45FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  captureText: {
    color: '#fff',
    fontSize: 16,
  },
  previewImage: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default TakePicture;

