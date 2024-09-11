import { Stack } from 'expo-router';
import { View, FlatList } from 'react-native';

import events from '../../assets/events.json';

import EventListItem from '~/components/Event';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <EventListItem event={events[2]} />
    </>
  );
}
