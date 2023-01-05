import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebViewScreen} from 'screens';
import {color} from 'theme';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white,
      }}>
      <WebViewScreen />
    </SafeAreaView>
  );
};

export default App;
