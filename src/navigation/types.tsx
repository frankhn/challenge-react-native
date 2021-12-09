import { NavigatorScreenParams } from '@react-navigation/native';

export type NavigatorParamList = {
  Home: undefined;
};

export type PublicNavigatorList = {
  Login: undefined;
  Getstarted: undefined
  Signup: undefined
  Verify: undefined
};

export type RootNavigatorParamList = {
  Tab: NavigatorScreenParams<NavigatorParamList>;
};

export type PublicNavigatorParamList = {
  Tab: NavigatorScreenParams<PublicNavigatorList>;
};
