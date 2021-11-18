import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, ViewPropTypes } from 'react-native'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/RecentActivityCardStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Recent Activity Card', () =>
  <RecentActivityCard
    recentActivity={[{date: "some Date", icon: 'calendar', details: "meeting with people"}]}
  />
)

export class RecentActivityCard extends Component{
  static propTypes = {
    recentActivity: PropTypes.array,
    cardStyle: ViewPropTypes.style
  }
  
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
    this.toggleShowAll = this.toggleShowAll.bind(this)
  }

  sortMostRecent(){
    // sort in descending order
    return this.props.recentActivity.sort((first, second)=>{
      const firstDate = new Date(first.sortDate)
      const secondDate = new Date(second.sortDate)
      return secondDate - firstDate 
    })
  }

  fiveMostRecents(){
    return this.sortMostRecent().slice(0, 5)
  }

  toggleShowAll(){
    this.setState({
      showAll: !this.state.showAll
    })
  }

  mapActivities(activity, key){
    return (
    <View key={key} style={styles.rowContainer}>
      <Icon name={activity.icon} style={styles.icons}/>
      <Text style={styles.dates}>{activity.date}</Text>
      <Text style={styles.details}>{activity.details}</Text>
    </View>
    )
  }

  render(){
    return (
      <Card containerStyle={this.props.cardStyle}>
        <Text style={styles.titleStyle}>Recent Activity</Text>
        <View style={styles.container}>
          { this.state.showAll ? this.sortMostRecent().map(this.mapActivities): this.fiveMostRecents().map(this.mapActivities)}
        </View>
        <Card.Divider />
        <Button 
          title={ this.state.showAll ? "Less Activities" : "All Activities"}
          color="black" 
          onPress={this.toggleShowAll}
        ></Button>
      </Card>
    )
  }
}