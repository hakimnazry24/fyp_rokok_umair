import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CheckIdPage() {
  const [cigaretteId, setCigaretteId] = useState('');
  const router = useRouter();

  function handleCheckCigaretteId() {
    let isCounterfeit = false;
    // do something
    //
    //

    if (!isCounterfeit) {
      router.push('/is-not-counterfeit');
    } else {
      router.push('/is-counterfeit');
    }
  }

  return (
    <View className="flex h-[80vh] flex-col justify-center p-10">
      <View>
        <View>
          <Text className="text-center">
            Key in the Cigarette Unique ID to determine if counterfeit cigarette or not
          </Text>
          <TextInput
            value={cigaretteId}
            placeholder="Enter ID here"
            onChangeText={(value) => setCigaretteId(value)}
            className="mt-8 rounded-2xl border border-gray-500 p-4"
          />
          <TouchableOpacity
            className="mx-auto mt-6 w-32 rounded-full bg-blue-700 py-4"
            onPress={handleCheckCigaretteId}>
            <Text className="text-center font-semibold text-white">Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
