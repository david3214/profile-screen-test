import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'

// Styles
import styles from './Styles/FakeScreenStyles.js'

class ScheduleScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schedule Screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)