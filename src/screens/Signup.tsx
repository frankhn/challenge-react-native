import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native'
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Layout from '../components/Layout';
import { METRIX } from '../helpers';
import { NavigatorParamList } from '../navigation/types';

interface IHome {
    navigation: StackNavigationProp<NavigatorParamList, 'Home'>;
}

const Signup = ({ navigation }: IHome) => {
    return (
        <Layout>
            <>
                <View style={
                    METRIX.style('w-full py-6 px-4')}>
                    <Input
                        placeholder="Names"
                        handleChange={() => null}
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value=''
                        keyboardType='default'
                    />
                    <Input
                        placeholder="Email"
                        handleChange={() => null}
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value=''
                        keyboardType='default'
                    />
                    <View style={METRIX.style('flex-row justify-between')}>
                        <Input
                            placeholder="+30"
                            handleChange={() => null}
                            returnKeyType='next'
                            styles={METRIX.style('w-1/5 mr-2')}
                            value='+30'
                            keyboardType='default'
                        />
                        <Input
                            placeholder="067 102 7590"
                            handleChange={() => null}
                            returnKeyType='next'
                            styles={METRIX.style('w-4/5')}
                            value=''
                            keyboardType='default'
                        />
                    </View>

                </View>
                <View style={METRIX.style('w-full px-4 py-10')}>
                    <Button
                        handleChange={() => null}
                        value={'Create Account'}
                    />
                </View>
            </>
        </Layout>
    )
}

export default Signup;
