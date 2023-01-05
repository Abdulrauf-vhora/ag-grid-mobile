import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

import {color} from 'theme';
import * as styles from './styles';

export const WebViewScreen = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.full()}>
      {loading && (
        <View style={styles.mainView()}>
          <ActivityIndicator size={'small'} color={color.primary} />
        </View>
      )}
      <WebView
        bounces={false}
        showsVerticalScrollIndicator={false}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: 'https://2805-2405-201-2006-7a06-f8b5-35ea-37ec-5b.ngrok.io',
        }}
        scalesPageToFit
      />
    </View>
  );
};
