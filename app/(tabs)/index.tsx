import { Stack } from 'expo-router';
import { View, FlatList } from 'react-native';

import events from '../../assets/events.json';

import Event from '~/components/Event';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList data={events} renderItem={(event) => <Event event={event} />} />
    </>
  );
}
