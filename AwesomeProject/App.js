import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
    return (
        <View style={styles.container}>
            {/* Class Components w/ Props and State */}
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Text>Hello world!</Text>
            <Greeting name="Suyash"/>
            <Blink text="State changes, so this blinks"/>

            {/* Style */}
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
            <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

            {/* Positioning and Size */}
            <FixedDimensionsBasics/>
            <FlexDimensionsBasics/>
        </View>
    );
  }
}

// 1. Class component w/ props
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// 2. Class component w/ state
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
  }, 200);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

// 3. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

// 4. Size - Fixed
class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// 5. Size - Flex
// The larger the flex given, the higher the ratio of space a component will take compared to its siblings.
class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        <Text>"What if our height was fixed?"</Text>
        <View style={{height: 300, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}
// A component can only expand to fill available space if its parent has dimensions greater than 0.
// If a parent does not have either a fixed width and height or flex,
// the parent will have dimensions of 0 and the flex children will not be visible.
