import React, { useEffect } from "react";
import { useToast } from "react-native-toast-notifications";
interface IToast {
    message: string,
    place?: 'bottom' | 'top'
    anim?: 'slide-in' | 'zoom-in'
    type: 'normal' | 'success' | 'warning' | 'danger' | 'custom'
}

const Toast = ({ message, type, place = 'bottom', anim = 'slide-in' }: IToast) => {
    const toast = useToast();
    useEffect(() => {
        toast.show(message, {
            type,
            placement: place,
            duration: 4000,
            animationType: anim
        });
    }, []);

    return <></>
};

export default Toast;
