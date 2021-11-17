import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/ProfileCardStyles'
import { Badge, Card } from 'react-native-elements'
import { SocialMediaBar } from './SocialMediaBar'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Profile Card', () =>
  <ProfileCard
    person={PropTypes.object}
  />
)

export class ProfileCard extends Component{
  static propTypes = {
    person: PropTypes.object
  }

  render(){
    return (
      <Card>
        <View style={styles.container}>
          <Image 
              style={styles.profilePicture}
              source={{
                uri: 'https://i.imgur.com/AzgjVLA.jpg?1' //The given picture is a bad endpoint now
                // uri: this.props.person.picture
              }}/>
          <Badge 
            value=" "
            status={this.props.person.isOnline ? "success" : "error"}
            containerStyle={styles.badgeStyle}
          />
          <Text style={styles.nameStyle}>{this.props.person.name}</Text>
          <Text style={styles.jobTitle}>{this.props.person.position}</Text>
        </View>
        <Card.Divider/>
        <SocialMediaBar/>
      </Card>
    )
  }
}