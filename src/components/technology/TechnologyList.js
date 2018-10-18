import React from 'react';
import { FlatList } from 'react-native';

import TechnologyTile from './TechnologyTile.js';

export default TechnologyList = ({ technologiesData, navigation }) => {

    return (
        <FlatList
            data={technologiesData}
            renderItem={({ item }) => <TechnologyTile technologyData={item} navigation={navigation} />}
            keyExtractor={(item) => `${item.id}`}
            horizontal
        />
    );

};
