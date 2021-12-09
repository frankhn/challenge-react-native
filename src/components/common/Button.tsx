import React from 'react';
import {
    StyleProp,
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native';
import { COLORS, METRIX } from '../../helpers';
interface IInput {
    handleChange(): void
    value?: any,
    styles?: StyleProp<any>
    textStyles?: StyleProp<any>
}

export default ({
    handleChange,
    styles,
    value,
    textStyles
}: IInput) => {
    return (
        <TouchableWithoutFeedback
            onPress={handleChange}>
            <View
                style={[METRIX.style('rounded-md py-3'), { backgroundColor: COLORS.yellow }]}>
                <Text style={[METRIX.style('text-center')]}>{value}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
