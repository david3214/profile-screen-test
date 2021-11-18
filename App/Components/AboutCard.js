import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Item, Button, ViewPropTypes } from 'react-native'
import { Card } from 'react-native-elements';
import ExamplesRegistry from '../Services/ExamplesRegistry'

import styles from './Styles/AboutCardStyles'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('About Card', () =>
  <AboutCard
    about='Info on the person'
    skills={['Business', 'PHP', 'etc']}
  />
)

export class AboutCard extends Component{
  static propTypes = {
    about: PropTypes.string,
    skills: PropTypes.array,
    cardStyle: ViewPropTypes.style
  }

  constructor(props) {
    super(props);
    this.state = {
      learnMore: false
    };
    this.toggelLearnMore = this.toggelLearnMore.bind(this)
  }

  toggelLearnMore(){
    this.setState({
      learnMore: !this.state.learnMore
    })
  }

  render(){
    return (
      <Card containerStyle={this.props.cardStyle}>
        <Text style={styles.titleStyle}>About</Text>
        <Text style={styles.bodyText}>{this.props.about}</Text>
        <View style={styles.skillContainer}>
          {this.props.skills?.map((skill, i)=>(
            <Text key={i} style={styles.skills}>{skill}</Text>
          ))}
        </View>
        {
          this.state.learnMore ? (<Text style={styles.bodyText}>He's pretty bland, not much more to learn</Text>) : null
        }
        <Card.Divider />
        <Button 
          title={this.state.learnMore ? "Show Less" : "Learn More"} 
          color="black"
          onPress={this.toggelLearnMore}
        ></Button>
      </Card>
    )
  }
}