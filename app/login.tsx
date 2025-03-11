import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();

  function handleLogin() {
    router.push('/home');
  }

  return (
    <View className="p-6 py-20">
      <Text className=" mb-7 text-3xl font-semibold">Login</Text>
      <Text className="text-lg">If you don't have an account, you can</Text>
      <Text className="mb-16 text-lg font-semibold text-blue-700 underline">
        <Link href="/register">Register now!</Link>
      </Text>

      <Text className="text-gray-500">Email</Text>
      <TextInput
        className="mb-6 border-b-2 p-4 focus:border-blue-700"
        placeholder="Enter your email address"
        value={email}
        onChangeText={(newText) => setEmail(newText)}
      />

      <Text className="text-gray-500">Password</Text>
      <TextInput
        className="mb-2 border-b-2 p-4 focus:border-r-blue-700"
        placeholder="Enter your password"
        value={password}
        secureTextEntry={!isShowPassword}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Text className="text-gray-500" onPress={() => setIsShowPassword(!isShowPassword)}>
        {isShowPassword ? 'Hide' : 'Show'} password
      </Text>

      <TouchableOpacity className="mb-10 mt-20" onPress={handleLogin}>
        <Text className="mx-auto w-full rounded-full bg-blue-700 py-4 text-center font-semibold text-white">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
