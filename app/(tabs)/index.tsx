import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import EventListItem from '~/components/Event';
import { Event, NearbyEvent } from '~/types/db';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const [events, setEvents] = useState<NearbyEvent[]>([]);

  useEffect(() => {
    fetchNearbyEvents();
  }, []);

  {
    /*const fetchAllEvents = async () => {
    const { data, error } = await supabase.from('events').select('*');
    setEvents(data);
  };*/
  }

  const fetchNearbyEvents = async () => {
    const { data, error } = await supabase.rpc('nearby_events', {
      lat: 41.461486,
      long: 32.794617,
    });
    console.log(JSON.stringify(data, null, 2));
    console.log(error);
    if (data) {
      setEvents(data);
    }
  };

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
