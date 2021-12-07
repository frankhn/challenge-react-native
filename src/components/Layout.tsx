import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { COLORS, METRIX } from '../helpers';

export default ({ children, bg }: any) => {
  return (
    <View style={[styles.wrapper]}>
      <StatusBar
        barStyle={'light-content'}
        translucent={false}
        backgroundColor={bg ?? COLORS.white}
      />
      <SafeAreaView
        style={[
          {
            backgroundColor: bg ?? COLORS.primary,
            height: METRIX.HEIGHT,
          },
        ]}>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
    backgroundColor: COLORS.white,
  },
});
