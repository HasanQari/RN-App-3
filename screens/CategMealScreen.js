import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/fake-data';
import MealList from '../components/MealList';
import CustomText from '../components/Style/CustomText';
//-----------------------------------------------------------------------------

const CategMealScreen = props => {

    const categID = props.navigation.getParam('categID');
    const avaMeals = useSelector(state => state.meals.filteredMeals);
    const displayMeals = avaMeals.filter(meal => meal.categoryIds.indexOf(categID) >= 0);

    if (displayMeals.length === 0) {
        return (
          <View style={styles.content}>
            <CustomText>No meals found, maybe check your filters?</CustomText>
          </View>
        );
      }

    return (
        <MealList listData={displayMeals} navigation={props.navigation} />
    );
}

CategMealScreen.navigationOptions = navigationData => {
    const categID = navigationData.navigation.getParam('categID')
    const selectedCateg = CATEGORIES.find(categ => categ.id === categID)
    return { headerTitle: selectedCateg.title, }
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  
export default CategMealScreen;