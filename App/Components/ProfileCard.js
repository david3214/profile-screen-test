import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/ProfileCardStyles'
import { Badge, Card } from 'react-native-elements'
import { SocialMediaBar } from './SocialMediaBar'

export class ProfileCard extends Component{
  render(){
    return (
      <Card>
        <View style={styles.container}>
          <Image 
              style={styles.profilePicture}
              source={{
                uri: 'https://i.imgur.com/AzgjVLA.jpg?1' //The given picture is a bad endpoint now
              }}/>
          <Badge 
            value=" "
            status="success"
            containerStyle={styles.badgeStyle}
          />
          <Text style={styles.nameStyle}>Persons Name</Text>
          <Text style={styles.jobTitle}>Job Title</Text>
        </View>
        <Card.Divider/>
        <SocialMediaBar/>
      </Card>
    )
  }
}