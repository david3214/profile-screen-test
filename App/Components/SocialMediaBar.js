import React, { Component } from 'react'
import { View } from 'react-native'
import {SocialIcon} from 'react-native-elements'
import styles from './Styles/SocialMediaBarStyles'
import { Metrics } from '../Themes'

export class SocialMediaBar extends Component{
  render(){
    return (
      <View style={styles.bubblesContainer}>
        <SocialIcon
          iconColor='gray'
          iconSize={Metrics.icons.small}
          button
          type='facebook'
          style={styles.roundButton}
        />
        <SocialIcon
          iconColor='gray'
          iconSize={Metrics.icons.small}
          button 
          type='pinterest'
          style={styles.roundButton}
        />
        <SocialIcon
          iconColor='gray'
          iconSize={Metrics.icons.small}
          button 
          type='twitter'
          style={styles.roundButton}
        />
        <SocialIcon
          iconColor='gray'
          iconSize={Metrics.icons.small}
          button 
          type='instagram'
          style={styles.roundButton}
        />
      </View>
    )
  }
}