import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false} // hides the scrolling indicator on the right of the page.
        snapToAlignment={'start'}  // takes to the start of the next component
        decelerationRate={'normal'} // speed of scrolling.
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
