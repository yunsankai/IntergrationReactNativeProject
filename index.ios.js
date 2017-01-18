'use strict';

import React, {Component,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
//添加回调到原生的回调事件。
import { NativeModules } from 'react-native';

var CalendarManager = NativeModules.CalendarManager;
var nextIndex = 0;

export default class RNHighScores extends React.Component {
  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
      // <View style={styles.container}>
      //   <Text style={styles.highScoresTitle}>
      //     2048 High Scores!
      //   </Text>
      //   <Text style={styles.scores}>    
      //     {contents}
      //   </Text>
      // </View>
    );
  }
}


class MyScene extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
  }
  _onForward() {
    console.log("沃日，你在哪打印");
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
    });
   nextIndex ++;

  }
  _onBack() {
    this.props.navigator.pop();
  }

  _onPopToNativeRootViewController() {
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight style={{marginTop: 200, width: 50, height: 50, backgroundColor: 'powderblue'}}
         onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight style={{marginTop: 100, width: 50, height: 50, backgroundColor: 'powderblue'}}
         onPress={this._onBack}>
          <Text>Tap me to pop scene</Text>          
        </TouchableHighlight>

        <TouchableHighlight style={{marginTop: 100, width: 50, height: 50, backgroundColor: 'powderblue'}}
         onPress={this._onPopToNativeRootViewController}>
          <Text>Tap me to native rootViewController</Text>          
        </TouchableHighlight>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 整体js模块的名称
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);



