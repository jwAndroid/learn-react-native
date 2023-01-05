/**
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CollapsibleTabBar} from 'react-native-collapsible-component-with-tab-view';

const Tab1Component = () => {
  return <View style={{flex: 1, backgroundColor: 'gray'}} />;
};

const Tab2Component = () => {
  return <View style={{flex: 1, backgroundColor: 'orange'}} />;
};

const App = () => {
  return (
    <SafeAreaView>
      <CollapsibleTabBar
        collasibleComponent={
          <View
            style={{
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 200, 1)',
            }}>
            <Text>Collapse Section</Text>
          </View>
        }
        tabBarItemList={[
          {
            titleComponent: (
              <View style={{padding: 20}}>
                <Text>tab1</Text>
              </View>
            ),
            component: <Tab1Component />,
          },
          {
            titleComponent: (
              <View style={{padding: 20}}>
                <Text>tab2</Text>
              </View>
            ),
            component: <Tab2Component />,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default App;
