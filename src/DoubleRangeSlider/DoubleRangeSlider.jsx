import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const DoubleRangeSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const min = 0;
  const max = 200; // Adjust the maximum value as needed

  const onValuesChange = newValues => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={values}
        sliderLength={300}
        onValuesChange={onValuesChange}
        min={min}
        max={max}
        step={1}
        allowOverlap={false}
        snapped={true}
        selectedStyle={{
          backgroundColor: 'blue', // Color of the range between thumbs
        }}
        unselectedStyle={{
          backgroundColor: 'lightgray', // Color of the slider track
        }}
        markerStyle={{
          backgroundColor: 'blue', // Color of the thumbs
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          slipDisplacement: 40,
        }}
      />
      <View style={styles.valuesContainer}>
        <Text style={styles.valueText}>{values[0].toFixed(1)}</Text>
        <Text style={styles.valueText}>{values[1].toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  valueText: {
    fontSize: 16,
  },
});

export default DoubleRangeSlider;
