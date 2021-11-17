import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {SocialMediaBar} from '../Components/SocialMediaBar'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'
import { Metrics } from '../Themes'
import { Card } from 'react-native-elements'
import { ProfileCard } from '../Components/ProfileCard'
import { AboutCard } from '../Components/AboutCard'
import { RecentActivityCard } from '../Components/RecentActivityCard'
import { ScrollView } from 'react-native-gesture-handler'

class ProfileScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ProfileCard />
          <AboutCard />
          <RecentActivityCard />
        </View>
      </ScrollView>
      )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
