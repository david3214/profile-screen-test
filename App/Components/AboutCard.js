import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Item, Button } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './Styles/AboutCardStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('About Card', () =>
  <AboutCard
    person={PropTypes.object}
  />
)

export class AboutCard extends Component{
  static propTypes = {
    person: PropTypes.object
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

  renderItems({item}){
    return(
      <Item title={item.title}/>
    )
  }

  render(){
    return (
      <Card>
        <Text style={styles.titleStyle}>About</Text>
        <Text style={styles.bodyText}>{this.props.person.about}</Text>
        <View style={styles.skillContainer}>
          {this.props.person.skills.map((skill, i)=>(
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