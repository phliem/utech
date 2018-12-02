import React, { PureComponent } from 'react';
import { Dimensions, FlatList } from 'react-native';

import TechnologyTile from './TechnologyTile.js';

export default class TechnologyList extends PureComponent {

    constructor() {
        super();
        this.width = Dimensions.get('window').width
    }

    componentDidMount() {
        this.refs.listRef.scrollToOffset({ offset: -50,  animated: false })
    }

    render() {
        return (
            <FlatList
                ref="listRef"
                data={this.props.technologiesData}
                renderItem={({ item }) => <TechnologyTile technologyData={item} navigation={this.props.navigation} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                decelerationRate={0}
                snapToInterval={this.width - (2 * 50)} // element width - (2 * inset) 
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 50,
                    bottom: 0,
                    right: 50,
                }}
            />
        );
    }
};
