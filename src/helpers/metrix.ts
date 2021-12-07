import { Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info'
import tailwind from "tailwind-rn";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_IPHONE_X = DeviceInfo.hasNotch();

export const IS_IOS = Platform.OS === 'ios';

export const style = (styles: string) => tailwind(styles)

export const saveData = async (key: string, value: any) => {
    try {
        return AsyncStorage.setItem(key, typeof value === 'string'
            ? value
            : JSON.stringify(value))
    } catch (error) {
        return
    }
}

export const getData = async (key: string = '', type: 'string' | 'object' = 'object') => {
    try {
        let data: any = await AsyncStorage.getItem(key)
        console.log(key, 'async storage get data', JSON.parse(data))
        data = type === 'string'
            ? data
            : JSON.parse(data)
        return data
    } catch (error) {
        return 'error'
    }
}

export const deleteItem = async (key: string) => {
    try {
        console.log('data removed')
        return AsyncStorage.removeItem(key);
    } catch (error) {
        return
    }
}