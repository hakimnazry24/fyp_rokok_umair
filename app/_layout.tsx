import '../global.css';

import { Stack } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="check-id" options={{ title: 'Check Cigarette ID' }} />
      <Stack.Screen name="key-in-birthday" options={{ headerShown: false }} />
      <Stack.Screen name="is-counterfeit" options={{ headerShown: false }} />
      <Stack.Screen name="is-not-counterfeit" options={{ headerShown: false }} />
      <Stack.Screen name="is-eligible" options={{ headerShown: false }} />
      <Stack.Screen name="is-not-eligible" options={{ headerShown: false }} />
      <Stack.Screen name="transaction-details" options={{ headerShown: false }} />
    </Stack>
  );
}
