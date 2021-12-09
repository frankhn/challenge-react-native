import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Layout from '../components/Layout';
import { METRIX, COLORS } from '../helpers';
import { NavigatorParamList } from '../navigation/types';

interface IHome {
    navigation: StackNavigationProp<NavigatorParamList, 'Home'>;
}

const Home = ({ navigation }: IHome) => {
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
                    onPress={() => null}
                    style={[METRIX.style('py-3 rounded-sm'), { backgroundColor: COLORS.yellow }]}>
                    <Text style={METRIX.style('text-center')}>Login</Text>
                </TouchableWithoutFeedback>
            </View>
        </Layout>
    )
}

export default Home;
