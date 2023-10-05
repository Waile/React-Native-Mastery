import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../../../../musicPlayerServices';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const togglePlayBack = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" style={styles.icon} size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayBack(playBackState)}>
        <Icon
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          style={styles.icon}
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" style={styles.icon} size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;
const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
