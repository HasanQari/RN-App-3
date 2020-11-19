import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import CustomText from '../components/Style/CustomText';



const FavoritesScreen = props => {
    const FavMeals = useSelector(state => state.meals.favoriteMeals);
    if (FavMeals.length === 0 || !FavMeals) {
        return (
            <View style={styles.content}>
                <CustomText>No favorite meals found. Start adding some!</CustomText>
            </View>
        );
    }
    return <MealList listData={FavMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'My Favorite',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName="ios-menu" color={Colors.black} onPress={() => {
                    console.log('menu opened !');
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.yellow : '',
        },
        headerTintColor: Platform.OS === 'android' ? Colors.black : Colors.purple
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;