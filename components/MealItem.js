import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import CustomText from './Style/CustomText'

const MealItem = props => {

    let TchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) { TchableCmp = TouchableNativeFeedback; }

    return (
        <View style={styles.mealItem} >
            <TchableCmp onPress={props.onSelectMeal} >
                <View>
                    <View style={{ ...styles.meaRow, ...styles.mealHeader }} >
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImg} >
                            <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={1} >{props.title}</Text></View>
                        </ImageBackground>
                    </View>

                    <View style={{ ...styles.meaRow, ...styles.meaDetail }} >
                        <CustomText>{props.duration}m</CustomText>
                        <CustomText>{props.complexity.toUpperCase()}</CustomText>
                        <CustomText>{props.affordability.toUpperCase()}</CustomText>
                    </View>
                </View>
            </TchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {},
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#FFCEC3',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10,
    },
    meaRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '80%'
    },
    meaDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height: '15%'
    },
    bgImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-s-b',
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
    }
});

export default MealItem;