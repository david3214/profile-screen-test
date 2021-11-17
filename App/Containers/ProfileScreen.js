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
import user from '../../api/users/4932.json'

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.fixDateData(user)
    }
  }

  //In Production this would not be used, but the date data is bad, and can't sort at all without a year
  fixDateData(person){
    person.recentActivity = person.recentActivity.map(activity=>{
      activity.sortDate = activity.date + " 2021"
      return activity
    })
    return person
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ProfileCard person={this.state.user}/>
          <AboutCard person={this.state.user}/>
          <RecentActivityCard person={this.state.user}/>
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
