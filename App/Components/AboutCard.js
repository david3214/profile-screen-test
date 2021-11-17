import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Item, Button } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './Styles/AboutCardStyles'

export class AboutCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ["Business", "Management", "Creativity", "Webdesign", "PHP"],
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
        <Text style={styles.bodyText}>Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along. An illustration, image, or picture that does not express a distinct idea is a poor illustration.</Text>
        <View style={styles.skillContainer}>
          {this.state.data.map((skill, i)=>(
            <Text key={i} style={styles.skills}>{skill}</Text>
          ))}
        </View>
        {
          this.state.learnMore ? (<Text style={styles.bodyText}>More Text, Not sure what more we need</Text>) : null
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