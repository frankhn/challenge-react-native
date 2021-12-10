import React, { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native'
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Layout from '../components/Layout';
import { METRIX, OBJECT, TOAST } from '../helpers';
import { PublicNavigatorList } from '../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { action, clean } from '../redux/Action';
import { AppState } from '../redux';

interface ISignup {
    navigation: StackNavigationProp<PublicNavigatorList, 'Signup'>;
}

const Signup = ({ navigation }: ISignup) => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();

    const { loading, error, data } = useSelector((state: AppState) => state.user)

    const submit = () => dispatch(
        action(
            {
                method: 'post',
                type: 'SIGNUP',
                data: {
                    first_name: user.name,
                    last_name: user.name,
                    gender: 'male',
                    password: user.password,
                    email: user.email,
                    phone_number: `25078888${Math.floor(1000 + Math.random() * 9000)}`,
                    username: user.name
                },
                path: '/auth/signup'
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
                {data && <TOAST message={data.message} type={'success'} />}
                <View style={
                    METRIX.style('w-full py-6 px-4')}>
                    <Input
                        placeholder="Names"
                        handleChange={(name) =>
                            setUser(OBJECT.UPDATE(user, { name }))
                        }
                        returnKeyType='next'
                        styles={
                            METRIX.style('w-full')}
                        value=''
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
                        value=''
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
                        loading={loading}
                        handleChange={submit}
                        value={'Create Account'}
                    />
                </View>
            </>
        </Layout>
    )
}

export default Signup;
