import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/RootNavigator';
import store from './redux/store';

export const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <Provider store={store}>
            <ThemeProvider>
              <AppNavigator />
            </ThemeProvider>
          </Provider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
});

export default App;
