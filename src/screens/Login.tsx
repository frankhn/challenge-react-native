import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Layout from '../components/Layout';
import {METRIX } from '../helpers';
import { PublicNavigatorList } from '../navigation/types';

interface ILogin {
    navigation: StackNavigationProp<PublicNavigatorList, 'Login'>;
}

const Login = ({ navigation }: ILogin) => {
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
                </View>
                <View style={METRIX.style('w-full px-4 py-5')}>
                    <Button
                        handleChange={() => null}
                        value={'Login'}
                    />
                </View>
            </>
        </Layout>
    )
}

export default Login;
