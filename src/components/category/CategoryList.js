import React from 'react';
import { FlatList } from 'react-native';

// Local components
import Category from './Category.js';

export default CategoryList = ({ categoriesData, navigation }) => {
    return (
        <FlatList
            data={categoriesData}
            renderItem={({ item }) => <Category category={item} navigation={navigation}/>}
            keyExtractor={(item) => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    );
};
