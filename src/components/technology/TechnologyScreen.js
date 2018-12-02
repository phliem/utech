import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import SectionGithub from './section/SectionGithub.js';
import SectionStackoverflow from './section/SectionStackoverflow.js';

// import axios from 'axios';
import TechnologyItemConstant from '../../data/TechnologyListConstant.js';

export default class TechnologyInfo extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.navigation.getParam('itemId', '01')
        }
    }

    componentDidMount() {
        // const onSuccess = (response) => {
        //     console.log('response', response);
        // };

        // const onError = (error) => {
        //     console.log('error', error);
        // };

        // axios.get('../../data/technology/ItemConstant01.js')
        //     .then(onSuccess)
        //     .catch(onError);

        const currentTechnology = TechnologyItemConstant[1];

        this.setState({
            ...currentTechnology,
            imageUrl: require('../../asset/logo/logo_react.png')
        });

    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    {this.state.imageUrl &&
                        <View style={styles.logo}>
                            <Image source={this.state.imageUrl} style={styles.img} />
                        </View>
                    }

                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.subTitle}>{this.state.author}</Text>
                        <Text>{this.state.url}</Text>
                    </View>
                </View>

                {this.state.githubUrl && 
                    <SectionGithub apiUrl={this.state.githubUrl} />
                }
                
                <Text style={styles.desc}>Bacon ipsum dolor amet kielbasa spare ribs pork, burgdoggen capicola short loin boudin pig. Shoulder bacon turducken jerky tongue, cow leberkas short ribs ham hock. Shank swine hamburger strip steak ball tip. Pork pastrami pork loin kevin, tongue biltong frankfurter. Short ribs brisket fatback meatball, flank ground round prosciutto tri-tip cupim andouille jerky t-bone. Andouille pastrami buffalo spare ribs pancetta jerky, pig jowl t-bone sausage.</Text>
                <Text style={styles.desc}>Ball tip venison cow beef ribs leberkas picanha meatloaf ground round salami. Pork loin jerky ham hock, pork belly short loin flank ribeye short ribs pancetta turducken sausage hamburger venison cow. Burgdoggen hamburger sausage spare ribs pastrami. Venison burgdoggen filet mignon turducken shoulder. Beef ground round biltong beef ribs flank venison tail pork capicola corned beef meatloaf cupim t-bone. Tenderloin beef ribs ham hock, flank leberkas drumstick picanha. Hamburger flank spare ribs pork belly ball tip ribeye pork chop turkey meatloaf short loin shoulder t-bone rump beef sirloin.</Text>
                <Text style={styles.desc}>Buffalo shoulder ham alcatra ribeye. Bresaola jowl venison spare ribs porchetta. Spare ribs turkey chuck pork meatloaf bresaola, brisket pastrami. Prosciutto shank ribeye, turducken picanha tail pig. Chicken ground round porchetta, meatball tenderloin ham hock rump pork prosciutto.</Text>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#EBE7E4'
    },
    head: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 2,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    desc: {
        fontSize: 14,
        marginBottom: 15,
    }
});

