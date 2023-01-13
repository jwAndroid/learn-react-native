import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const A = () => {
  const data = [
    '777777777',
    '777777777777777',
    '77777777',
    '777777777',
    '7777777',
    '7777777777',
    '777777777',
    '7777777777',
    '7777777777',
    '77777777777',
    '77777777',
    '777777777777',
    '7777777',
    '777777777777',
    '777777777777',
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <ScrollView>
        {data.map((item, index) => (
          <Text style={{fontSize: 50}} key={`${index + 1}`}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default A;
