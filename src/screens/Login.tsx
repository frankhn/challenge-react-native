import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { View } from 'react-native'
import auth from '@react-native-firebase/auth';

// Local import
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Layout from '../components/Layout';
import { METRIX, OBJECT } from '../helpers';
import { PublicNavigatorList } from '../navigation/types';

interface ILogin {
    navigation: StackNavigationProp<PublicNavigatorList, 'Login'>;
}

const Login = ({ navigation }: ILogin) => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    
    return (
        <Layout>
            <>
                <View style={
                    METRIX.style('w-full py-6 px-4')}>
                    <Input
                        placeholder="Names"
                        handleChange={(name) => setUser(OBJECT.UPDATE(user, { name }))}
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value={user.name}
                        keyboardType='default'
                    />
                    <Input
                        placeholder="Email"
                        handleChange={(email) =>
                            setUser(OBJECT.UPDATE(user, { email }))
                        }
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value={user.email}
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
