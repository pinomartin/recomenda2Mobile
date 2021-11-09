import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useFade from '../hooks/useFade';

const FadeScreen = () => {

    const {opacity, fadeIn ,fadeOut} = useFade();

    return (
        <View style={styles.fadeScreen__container}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                borderRadius: 10,
                opacity: opacity
            }}>

            </Animated.View>
            <Button 
                onPress={fadeIn}
                title={'Fade In'}
            />
            <Button 
                onPress={fadeOut}
                title={'Fade Out'}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    fadeScreen__container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FadeScreen
