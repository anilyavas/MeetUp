import { Feather } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

export default function EventListItem({ event }) {
  return (
    <View className="gap-3 p-3">
      <View className="flex-row">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-800">
            Wed 13, Sep · 19:30 CEST
          </Text>
          <Text className="text-xl font-bold" numberOfLines={2}>
            {event.title}
          </Text>
          <Text className="text-grey-700">{event.location}</Text>
        </View>
        {/* Event image */}
        <Image source={{ uri: event.image }} className="aspect-video w-2/5 rounded-xl" />
      </View>
      {/* Footer */}
      <View className="flex-row gap-3">
        <Text className="text-grey-700 mr-auto">16 going</Text>
        <Feather name="share" size={20} color="grey" />
        <Feather name="bookmark" size={20} color="grey" />
      </View>
    </View>
  );
}
