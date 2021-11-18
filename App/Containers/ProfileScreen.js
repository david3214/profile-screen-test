import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import { create } from 'apisauce'
import { ScrollView } from 'react-native-gesture-handler'

// Components
import { ProfileCard } from '../Components/ProfileCard'
import { AboutCard } from '../Components/AboutCard'
import { RecentActivityCard } from '../Components/RecentActivityCard'
import { ProfileHeader } from '../Components/ProfileHeader'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    const api = create({baseURL: 'https://raw.githubusercontent.com'})
    api.get('/xomly/profile-screen-test/master/api/users/4932.json')
       .then(req=>{
          this.setState({user: this.fixDateData(req.data)})
       })
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
      <View style={styles.screenContainer}>
        { this.state.user ? (
          <View>
            <ProfileHeader photoUri={this.state.user.photoUri}/>
            <ScrollView>
                <View style={styles.container}>
                  <ProfileCard
                    name={this.state.user.name} 
                    position={this.state.user.position} 
                    isOnline={this.state.user.isOnline} 
                    photoUri={this.state.user.picture}
                    cardStyle={styles.cardStyle}
                  />
                  <AboutCard 
                    about={this.state.user.about}
                    skills={this.state.user.skills}
                    cardStyle={styles.cardStyle}
                  />
                  <RecentActivityCard 
                    person={this.state.user} 
                    cardStyle={styles.cardStyle}
                    recentActivity={this.state.user.recentActivity}
                  />
                </View>
          </ScrollView>
        </View>
        )
        : null}
      </View>
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
