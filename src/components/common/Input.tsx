import React from 'react';
import {
    StyleProp,
    ReturnKeyType,
    KeyboardTypeOptions,
    TextInput,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { COLORS } from '../../helpers';
interface IInput {
    handleChange(name: string): void
    value?: any,
    returnKeyType?: ReturnKeyType
    placeholder: string
    keyboardType: KeyboardTypeOptions
    placeholderTextColor?: string
    underlineColorAndroid?: string
    autoCapitalize?: string
    secureTextEntry?: boolean
    onSubmitEditing?: any
    onBlur?: any
    styles: StyleProp<any>
}

export default ({
    placeholder,
    handleChange,
    returnKeyType,
    styles,
    value,
    keyboardType,
    placeholderTextColor,
    underlineColorAndroid = 'transparent',
    onSubmitEditing,
    secureTextEntry = false,
    onBlur
}: IInput) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor ?? COLORS.gray}
            underlineColorAndroid={underlineColorAndroid ?? 'transparent'}
            returnKeyType={returnKeyType ?? 'next'}
            autoCapitalize={'none'}
            onBlur={onBlur}
            defaultValue={value}
            keyboardType={keyboardType ?? 'default'}
            secureTextEntry={secureTextEntry}
            onChangeText={(value: string) => handleChange(value)}
            onSubmitEditing={onSubmitEditing ?? null}
            style={[tailwind(' lowercase'), styles]}
        />
    )
}
