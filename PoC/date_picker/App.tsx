/**
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <SafeAreaView>
      <RNDateTimePicker
        value={value}
        mode="date"
        display="spinner"
        locale="ko"
        onChange={(selectedDate: any) => setValue(selectedDate)}
      />
    </SafeAreaView>
  );
};

export default App;
