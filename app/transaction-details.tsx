import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function TransactionDetailsPage() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [displayCancelModal, setDisplayCancelModal] = useState(false);

  const productDetail = {
    status: 'Authentic',
    brand: 'Marlboro Red',
    batchNumber: '213-213-MY',
    manufactureDate: new Date(),
    origin: 'Kuala Lumpur, Malaysia',
    compliance: 'Verified',
  };

  const customerDetail = {
    age: 22,
    icStatus: 'Valid',
  };

  return (
    <View className="p-5 py-16">
      <View className="mb-10 rounded-lg border">
        <Text className="mb-3 rounded-t-lg bg-blue-700 p-3 text-center font-semibold text-white">
          Product Detail
        </Text>
        <View className="p-3">
          <Text className="mb-2">
            <Text className="font-semibold">Brand: </Text> {productDetail.brand}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Batch Number: </Text>
            {productDetail.batchNumber}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Manufacture Date: </Text>
            {productDetail.manufactureDate.toString()}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Origin: </Text>
            {productDetail.origin}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Compliance: </Text>
            {productDetail.compliance}
          </Text>
        </View>
      </View>
      <View className="rounded-lg border">
        <Text className="mb-3 rounded-t-lg bg-blue-700 p-3 text-center font-semibold text-white">
          Customer Detail
        </Text>
        <View className="p-3">
          <Text className="mb-2">
            <Text className="font-semibold">Age Verified: </Text> {customerDetail.age} (Eligible) ✅
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">IC Status: </Text>
            {customerDetail.icStatus}
          </Text>
        </View>
      </View>
      <View className="mt-10 flex flex-row gap-x-5">
        <TouchableOpacity className="flex-1 rounded-full bg-blue-700 p-3">
          <Text className="text-center font-semibold text-white">Complete {'\n'}Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDisplayCancelModal(true)}
          className="flex-1 flex-row items-center justify-center rounded-full bg-red-500 p-3">
          <Text className="text-center font-semibold text-white">Cancel</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={displayCancelModal}
          onRequestClose={() => setDisplayCancelModal(false)}>
          <View className="flex-1 items-center justify-center bg-black/50">
            <View className="m-5 w-80 rounded-xl bg-white p-6 shadow-lg">
              <Text className="mb-4 text-center text-lg font-bold text-red-500">
                Are you sure to cancel?
              </Text>
              <Text className="mb-4 text-center">Are you sure to cancel the transaction?</Text>

              <View className="mt-4 flex-row justify-between">
                <Pressable
                  className="mr-2 flex-1 rounded-lg bg-gray-300 px-4 py-2"
                  onPress={() => setDisplayCancelModal(false)}>
                  <Text className="text-center font-semibold">Cancel</Text>
                </Pressable>

                <Pressable
                  className="ml-2 flex-1 rounded-lg bg-red-500 px-4 py-2"
                  onPress={() => {
                    setModalVisible(false);
                    router.replace('/home');
                  }}>
                  <Text className="text-center font-semibold text-white">Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
