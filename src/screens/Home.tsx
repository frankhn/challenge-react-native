import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import { NavigatorParamList } from '../navigation/types';

interface IHome {
    navigation: StackNavigationProp<NavigatorParamList, 'Home'>;
}


const Home = ({ navigation }: IHome) => {
    return (
        <View>
            
        </View>
    )
}

export default Home;
