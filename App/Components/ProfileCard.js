import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { View, Text, Image, ViewPropTypes } from 'react-native'
import { Badge, Card } from 'react-native-elements'

import styles from './Styles/ProfileCardStyles'
import { SocialMediaBar } from './SocialMediaBar'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Profile Card', () =>
  <ProfileCard
    name='Nathan Garcia'
    isOnline={true}
    position='UI/UX Designer'
    photoUri='https://i.imgur.com/AzgjVLA.jpg?1'
  />
)

export class ProfileCard extends Component{
  static propTypes = {
    person: PropTypes.object,
    isOnline: PropTypes.bool,
    photoUri: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    cardStyle: ViewPropTypes.style
  }

  render(){
    return (
      <Card containerStyle={this.props.cardStyle}>
        <View style={styles.container}>
          <Image 
              style={styles.profilePicture}
              source={{
                uri: 'https://i.imgur.com/AzgjVLA.jpg?1' //The given picture is a bad endpoint now
                // uri: this.props.picture
              }}/>
          <Badge 
            value=" "
            status={this.props.isOnline ? "success" : "error"}
            containerStyle={styles.badgeStyle}
          />
          <Text style={styles.nameStyle}>{this.props.name}</Text>
          <Text style={styles.jobTitle}>{this.props.position}</Text>
        </View>
        <Card.Divider/>
        <SocialMediaBar/>
      </Card>
    )
  }
}