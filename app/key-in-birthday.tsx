import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function KeyInBirthday() {
  const [fullName, setFullName] = useState('');
  const [icNumber, setIcNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleVerifyAge() {
    let isEligible = true;
    //do something
    //
    //

    if (isEligible) {
      router.push('/is-eligible');
    } else {
      router.push('/is-not-eligible');
    }
  }

  return (
    <View className="p-8">
      <Text className="mb-10 text-2xl font-semibold">Verify Your Age</Text>

      <Text>
        <Text className="font-semibold">Name</Text> (as in your IC)
      </Text>
      <TextInput
        className="mb-6 border-b-2 p-4 focus:border-blue-700"
        placeholder="Enter fullname"
        value={fullName}
        onChangeText={(value) => setFullName(value)}
      />

      <Text className="font-semibold">MyKad IC Number</Text>
      <TextInput
        className="mb-6 border-b-2 p-4 focus:border-blue-700"
        placeholder="xxxxxxxxxxxx"
        inputMode="numeric"
        value={icNumber}
        onChangeText={(value) => setIcNumber(value)}
      />

      <TouchableOpacity
        className="mx-auto  mb-2 mt-5 w-32 rounded-full bg-blue-700 py-4"
        onPress={handleVerifyAge}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text className="text-center font-semibold text-white">Verify</Text>
        )}
      </TouchableOpacity>

      <Text className="text-center text-sm text-gray-600">
        We only use the back IC number for verification purposes and do not store your
        information{' '}
      </Text>
    </View>
  );
}
