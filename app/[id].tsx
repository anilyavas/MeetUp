import dayjs from 'dayjs';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, ActivityIndicator } from 'react-native';

import { useAuth } from '~/context/AuthProvider';
import { supabase } from '~/utils/supabase';

export default function EventPage() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [attendance, setAttendance] = useState(null);
  const { user } = useAuth();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('events').select('*').eq('id', id).single();
    setEvent(data);

    const { data: attendanceData } = await supabase
      .from('attendance')
      .select('*')
      .eq('user_id', user.id)
      .eq('event_id', id)
      .single();
    setAttendance(attendanceData);
    setLoading(false);
  };

  const joinEvent = async () => {
    const { data, error } = await supabase
      .from('attendance')
      .insert({ user_id: user.id, event_id: event.id })
      .select()
      .single();

    setAttendance(data);
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!event) {
    return <Text>Event not found!</Text>;
  }

  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{ title: 'Event', headerBackTitleVisible: false, headerTintColor: 'black' }}
      />
      <Image source={{ uri: event.image_uri }} className="aspect-video w-full rounded-3xl" />
      <Text className="text-3xl font-bold">{event.title}</Text>
      <Text className="text-lg font-semibold uppercase text-amber-800">
        {dayjs(event.date).format('ddd, D MMM')} · {dayjs(event.date).format('h:mm A')}
      </Text>
      <Text className="text-lg">{event.description}</Text>
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between border-t-2 border-gray-400 p-5 pb-10">
        <Text className=" text-xl font-bold">Free</Text>
        {attendance ? (
          <Text className="font-bold text-green-500">You are attending</Text>
        ) : (
          <Pressable className="rounded-md bg-red-500 p-5 px-8" onPress={() => joinEvent()}>
            <Text className="text-lg font-bold text-white">Join and RSVP</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
