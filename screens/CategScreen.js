import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/fake-data';

import CateGridTitle from '../components/CateGridTitle'
import HeaderButton from '../components/HeaderButton';

//-----------------------------------------------------------------------------



const CategScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CateGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategMeal', { categID: itemData.item.id })
                }} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    )
}

CategScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName="ios-menu" onPress={() => {
                    console.log('menu opened !');
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    screen: { backgroundColor: '#563128', },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default CategScreen;