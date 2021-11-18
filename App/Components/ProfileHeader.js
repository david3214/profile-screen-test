import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import {Badge, Icon, Image} from 'react-native-elements'
import styles from './Styles/ProfileHeaderStyles'

export class ProfileHeader extends Component{

  pressButton(){
    Alert.alert(
      "Button Pressed",
      "Do Something",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK" }
      ]
    );
  }

  render(){
      return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Icon 
                type='feather' 
                name='plus-circle'
                onPress={this.pressButton}
              />
            </View>
            <Text style={styles.title}>Contact Details</Text>
            <View style={styles.rightContainer}>
              <Icon 
                type='font-awesome-5' 
                name='bell'
                onPress={this.pressButton}
              />
              <Badge 
                status='error'
                containerStyle={styles.badge}
              />
              <Image 
                source={{
                  // uri: this.props.imageUri
                  uri:'https://i.imgur.com/AzgjVLA.jpg?1'
                }}
                style={styles.cornerImage}/>
            </View>
        </View>
        )
    }
}