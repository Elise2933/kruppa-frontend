import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryButtonSmall from '../components/PrimaryButtonSmall';

//https://blog.logrocket.com/implement-react-native-snap-carousel/

export const slider_width = Dimensions.get('window').width;
export const item_width = Math.round(slider_width);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground
        source={item.image}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>{item.header}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingTop: '155%',
    width: '85%',
  },
  body: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  header: {
    color: 'white',
    width: '85%',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
  }
})

export default CarouselCardItem