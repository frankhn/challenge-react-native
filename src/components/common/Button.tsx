import React from 'react';
import {
    StyleProp,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import { COLORS, METRIX } from '../../helpers';
interface IInput {
    handleChange(): void
    value?: any,
    styles: StyleProp<any>
}

export default ({
    handleChange,
    styles,
    value,
}: IInput) => {
    return (
        <TouchableWithoutFeedback
            onPress={handleChange}
            style={[METRIX.style('mt-5 py-3 rounded-md'), styles]}>
            <Text style={[METRIX.style('text-center text-yellow-400')]}>{value}</Text>
        </TouchableWithoutFeedback>
    )
}
