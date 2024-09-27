import { Stack } from 'expo-router';
import { FlatList } from 'react-native';

import EventListItem from '~/components/Event';
import { useNearbyEvents } from '~/hooks/useNearbyEvents';

export default function Home() {
  const events = useNearbyEvents();

  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
        className="bg-white"
      />
    </>
  );
}
