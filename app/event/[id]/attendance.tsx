import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { supabase } from '~/utils/supabase';

export default function EventAttendace() {
  const { id } = useLocalSearchParams();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetchNumberOfAttendees();
  }, []);

  const fetchNumberOfAttendees = async () => {
    const { data, error } = await supabase
      .from('attendance')
      .select('*, profiles(*)')
      .eq('event_id', id);

    setAttendees(data);
  };

  return (
    <FlatList
      data={attendees}
      renderItem={({ item }) => (
        <View className="flex-1 p-3">
          <Text className="text-lg font-bold">{item.profiles.full_name || 'User'}</Text>
        </View>
      )}
    />
  );
}
