import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton1 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.playSound} style={styles.button}>
        <Text style={styles.textButton}>Guitar</Text>
      </TouchableOpacity>
    );
  }

  playSound = async () => {
    alert('Music Playing in 5 seconds');
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/grab.php?id=2153&type=mp3' },
      { shouldPlay: true }
    );
    alert('Music Played');
  };
}

class SoundButton2 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.playSound} style={styles.soundButton}>
        <Text style={styles.textButton}>Piano</Text>
      </TouchableOpacity>
    );
  }

  playSound = async () => {
    alert('Music Playing in 6 seconds');
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/grab.php?id=2086&type=mp3' },
      { shouldPlay: true }
    );
    alert('Music Played');
  };
}

class SoundButton3 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.playSound} style={styles.soundButton1}>
        <Text style={styles.textButton}>Drum</Text>
      </TouchableOpacity>
    );
  }

  playSound = async () => {
    alert('Music Playing in 6 seconds');
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/grab.php?id=1512&type=mp3' },
      { shouldPlay: true }
    );
    alert('Music Played');
  };
}
class SoundButton4 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.playSound} style={styles.soundButton2}>
        <Text style={styles.textButton}>Mouth Organ</Text>
      </TouchableOpacity>
    );
  }

  playSound = async () => {
    alert('Music Playing in 6 seconds');
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/grab.php?id=897&type=mp3' },
      { shouldPlay: true }
    );
    alert('Music Played');
  };
}

class SoundButton5 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.playSound} style={styles.soundButton3}>
        <Text style={styles.textButton}>Electric Guitar</Text>
      </TouchableOpacity>
    );
  }

  playSound = async () => {
    alert('Music Playing in 6 seconds');
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/grab.php?id=1466&type=mp3' },
      { shouldPlay: true }
    );
    alert('Music Played');
  };
}

class StopButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Audio.setIsEnabledAsync(false);
        }}
        style={styles.stop}>
        <Text style={styles.textButton}>Stop Music</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={styles.text}> Sound Library </Text>
        <SoundButton1 />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
        <SoundButton5 />
        <StopButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 360,
    height: 60,
    marginLeft: 0,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
  },
  soundButton: {
    backgroundColor: 'green',
    width: 360,
    height: 60,
    marginLeft: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    alignItems: 'center',
  },
  soundButton1: {
    backgroundColor: 'orange',
    width: 360,
    height: 60,
    marginLeft: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundButton2: {
    backgroundColor: 'blue',
    width: 360,
    height: 60,
    marginLeft: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundButton3: {
    backgroundColor: 'purple',
    width: 360,
    height: 60,
    marginLeft: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stop: {
    backgroundColor: 'pink',
    width: 280,
    height: 100,
    marginLeft: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
});
