import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';

import AddressAutoComplete from '~/components/AddressAutoComplete';
import Avatar from '~/components/Avatar';
import { useAuth } from '~/context/AuthProvider';
import { supabase } from '~/utils/supabase';

export default function CreateEvent() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState(null);

  const { user } = useAuth();

  const createEvent = async () => {
    setLoading(true);
    const long = location.features[0].geometry.coordinates[0];
    const lat = location.features[0].geometry.coordinates[1];

    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          date: date.toISOString(),
          title,
          description,
          user_id: user.id,
          location: location.features[0].properties.name,
          location_point: `POINT(${long} ${lat})`,
        },
      ])
      .select()
      .single();

    if (error) {
      Alert.alert('Failed to create the event', error.message);
    } else {
      setTitle('');
      setDescription('');
      setDate(new Date());
      router.push(`/event/${data.id}`);
    }
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1, gap: 10, padding: 10, backgroundColor: 'white' }}>
      <View className="items-center ">
        <Avatar
          size={200}
          url={imageUrl}
          onUpload={(url: string) => {
            setImageUrl(url);
          }}
        />
      </View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        className="rounded-md border border-gray-200 p-3"
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
        className="min-h-32 rounded-md border border-gray-200 p-3"
      />
      <Text
        className="rounded-md border border-gray-200 p-3 text-center"
        onPress={() => setOpen(true)}>
        {date.toLocaleString()}
      </Text>
      <AddressAutoComplete onSelected={(location) => setLocation(location)} />
      <DatePicker
        minimumDate={new Date()}
        minuteInterval={15}
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Pressable
        disabled={loading}
        onPress={() => createEvent()}
        className="mt-auto items-center rounded-md bg-red-500 p-3 px-8">
        <Text className="text-lg font-bold text-white ">Create event</Text>
      </Pressable>
    </ScrollView>
  );
}
