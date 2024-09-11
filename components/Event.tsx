import { View, Text } from 'react-native';

import events from '../assets/events.json';

export default function Event() {
  return (
    <View className="flex">
      <Text>{events[0].datetime}</Text>
    </View>
  );
}
