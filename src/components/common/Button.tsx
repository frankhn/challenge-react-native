import React from 'react';
import {
    StyleProp,
    TouchableWithoutFeedback,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { COLORS, METRIX } from '../../helpers';
interface IInput {
    handleChange(): void
    value?: any,
    loading?: boolean
    styles?: StyleProp<any>
    textStyles?: StyleProp<any>
}

export default ({
    handleChange,
    styles,
    loading = false,
    value,
    textStyles
}: IInput) => {
    return (
        <TouchableWithoutFeedback
            onPress={handleChange}>
            <View
                style={[METRIX.style('rounded-md py-3'), { backgroundColor: COLORS.yellow }]}>
                {!loading ?
                    <Text style={[METRIX.style('text-center')]}>{value}</Text>
                    : <ActivityIndicator size="small" color={COLORS.white} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}
