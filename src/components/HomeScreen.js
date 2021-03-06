import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ImageList from './ImageList';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Unsplash',
        headerStyle: { 
            backgroundColor: '#fff',
            elevation: 0 // remove shadow in android
        },
        headerTitleStyle: { 
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: '#525252'
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                {/* <Button
                    title="Go to Detail Screen"
                    onPress={() => navigate('Detail', { author: 'Dede Hamzah' })}
                /> */}
                <ImageList />
            </View>
        );
    }
}