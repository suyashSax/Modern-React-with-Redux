import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
    return (
        <ScrollView>
            <Text style={[styles.title, {fontSize: 35, marginTop: 20}]}>React Native Starter</Text>
            <View style={styles.container}>
                <Text style={[styles.title, {alignItems: 'flex-start'}]}>Class Components w/ Props and State</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text>Hello world!</Text>
                <Greeting name="Suyash"/>
                <Blink text="State changes, so this blinks"/>

                <Text style={styles.title}>Styles</Text>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

                <Text style={styles.title}>Size and Dimension</Text>
                <FixedDimensionsBasics/>
                <FlexDimensionsBasics/>
            </View>

            {/* Flexbox */}
            <Text style={styles.title}>Flexbox - Row</Text>
            <FlexDirectionBasics_Row/>
            <Text style={styles.title}>Flexbox - Column</Text>
            <FlexDirectionBasics_Col/>
            <Text style={styles.title}>Flexbox - Justify Contents</Text>
            <JustifyContentBasics/>
            <Text style={styles.title}>Flexbox - Align Items</Text>
            <AlignItemsBasics/>
        </ScrollView>
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
  },
  title: {
      fontWeight: 'bold',
      color: 'gray',
      marginLeft: 5,
      marginBottom: 10,
      marginTop: 10,
      fontSize: 30
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

// 6. Flexbox for layouts - direction -> Row
class FlexDirectionBasics_Row extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex:1, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex:1, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex:1, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// 7. Flexbox for layouts - direction -> Column
class FlexDirectionBasics_Col extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{flex:1, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex:1, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex:1, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// 8. Flexbox - justifyContent
// We've fixed the dimensions, so where should the extra space go?
// Available options are flex-start, center, flex-end, space-around, and space-between
class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 9. Flexbox Align Items
// We've fixed the dimensions, so where should the extra space go?
// Adding alignItems to a component's style determines the alignment of children along the secondary axis
// (if the primary axis is row, then the secondary is column, and vice versa).
// Should children be aligned at the start, the center, the end, or stretched to fill?
// Available options are flex-start, center, flex-end, and stretch.

class AlignItemsBasics extends Component {
  render() {
    return (
      // Let's center in the row, and also center in column
      <View style={{
        height: 100,
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
