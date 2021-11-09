import { useRef } from "react";
import { Animated } from "react-native";

const useFade = () => {
    const opacity = useRef( new Animated.Value(0) ).current;

    const fadeIn = (callback?: Function, duration:number = 1000) => {
       
        Animated.timing(
            opacity, 
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start( () => callback ? callback() : null );
    };

    const fadeOut = (duration:number = 300) => {
        Animated.timing(
            opacity, 
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }
}

export default useFade
