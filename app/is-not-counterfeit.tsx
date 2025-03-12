import NotCounterfeit from '~/components/NotCounterfeit';
import { View } from 'react-native';

export default function isNotCounterfeitPage() {
  return (
    <View className="flex h-screen flex-col justify-center ">
      <NotCounterfeit />
    </View>
  );
}
