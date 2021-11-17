import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Item, Button } from 'react-native'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/RecentActivityCardStyles'

export class RecentActivityCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      data: [
        {
          "icon": "calendar",
          "date": "28 February",
          "details": "Meeting with client"
        },
        {
          "icon": "briefcase",
          "date": "1 March",
          "details": "New incoming request"
        },
        {
          "icon": "calendar",
          "date": "2 March",
          "details": "Meeting with client"
        },
        {
          "icon": "check-circle",
          "date": "8 March",
          "details": "Marked 12 Tasks Done"
        },
        {
          "icon": "briefcase",
          "date": "13 March",
          "details": "New incoming request"
        },
        {
          "icon": "credit-card",
          "date": "16 March",
          "details": "Payout processed"
        },
        {
          "icon": "briefcase",
          "date": "20 March",
          "details": "Marked 12 Tasks Done"
        }
      ]
    };

    this.toggleShowAll = this.toggleShowAll.bind(this)
  }

  //In Production this would not be used, but the date data is bad, and can't sort at all without a year
  fixDateData(obj){
    if (!obj.sortDate)
      obj.sortDate = obj.date + " 2021"
    return obj
  }

  sortMostRecent(){
    // sort in descending order
    return this.state.data.sort((first, second)=>{
      const firstDate = new Date(this.fixDateData(first).sortDate)
      const secondDate = new Date(this.fixDateData(second).sortDate)
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
      <Card>
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