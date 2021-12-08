import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import Layout from '../components/Layout';
import { NavigatorParamList } from '../navigation/types';

interface IHome {
    navigation: StackNavigationProp<NavigatorParamList, 'Home'>;
}


const SignUp = ({ navigation }: IHome) => {
    return (
        <Layout>
            <View>

            </View>
        </Layout>
    )
}

export default SignUp;
