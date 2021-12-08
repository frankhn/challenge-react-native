import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Layout from '../components/Layout';
import { COLORS, METRIX } from '../helpers';
import { PublicNavigatorList } from '../navigation/types';

interface IHome {
    navigation: StackNavigationProp<PublicNavigatorList, 'Getstarted'>;
}


const Getstarted = ({ navigation }: IHome) => {
    return (
        <Layout>
            <View style={METRIX.style('flex-1 justify-end')}>
                <View>
                    <Text style={METRIX.style('self-center text-white')}>GARAGE</Text>
                    <Text style={METRIX.style('self-center text-gray-400')}>some information here</Text>
                </View>
            </View>
            <View style={METRIX.style('flex-1 justify-end px-4 pb-10')}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Login')}
                    style={[METRIX.style('py-3 rounded-md'), { backgroundColor: COLORS.yellow }]}>
                    <Text style={METRIX.style('text-center')}>Login</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Login')}
                    style={[METRIX.style('mt-5 py-3 rounded-md'), { backgroundColor: COLORS.yellowOut }]}>
                    <Text style={[METRIX.style('text-center text-yellow-400')]}>Create Account</Text>
                </TouchableWithoutFeedback>
            </View>
        </Layout>
    )
}

export default Getstarted;
