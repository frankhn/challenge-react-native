import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
// Local import
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Layout from '../components/Layout';
import { METRIX, OBJECT, TOAST } from '../helpers';
import { PublicNavigatorList } from '../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { action, clean } from '../redux/Action';
import { AppState } from '../redux';

interface ILogin {
    navigation: StackNavigationProp<PublicNavigatorList, 'Login'>;
}

const Login = ({ navigation }: ILogin) => {
    const [user, setUser] = useState({ email: '', password: '' });
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state: AppState) => state.user)

    const submit = () => dispatch(
        action(
            {
                method: 'post',
                type: 'LOGIN',
                data: user,
                path: '/auth/login'
            }
        ))

    useEffect((): any => {
        return () => dispatch(clean({
            type: 'LOGIN',
        }))
    }, [])

    return (
        <Layout>
            <>
                {error && <TOAST message={error} type={'danger'} />}
                <View style={
                    METRIX.style('w-full py-6 px-4')}>
                    <Input
                        placeholder="Email"
                        handleChange={(email) => setUser(OBJECT.UPDATE(user, { email }))}
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value={user.email}
                        keyboardType='default'
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        handleChange={(password) =>
                            setUser(OBJECT.UPDATE(user, { password }))
                        }
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value={user.password}
                        keyboardType='default'
                    />
                </View>
                <View style={METRIX.style('w-full px-4 py-5')}>
                    <Button
                        handleChange={submit}
                        loading={loading}
                        value={'Login'}
                    />
                </View>
            </>
        </Layout>
    )
}

export default Login;
