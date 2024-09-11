import { Feather } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

export default function Event({ event }) {
  return (
    <>
      <View className="gap-3 p-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-800">
              Wed 13, Sep · 19:30 CEST
            </Text>
            <Text className="text-xl font-bold" numberOfLines={2}>
              This is the title
            </Text>
            <Text className="text-grey-700">City hall</Text>
          </View>
          {/* Event image */}
          <Image
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            className="aspect-video w-2/5 rounded-xl"
          />
        </View>
        {/* Footer */}
        <View className="flex-row gap-3">
          <Text className="text-grey-700 mr-auto">16 going</Text>
          <Feather name="share" size={20} color="grey" />
          <Feather name="bookmark" size={20} color="grey" />
        </View>
      </View>
    </>
  );
}
