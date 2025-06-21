import { Image, View, Text } from "react-native";

export function SamplePostCard() {
  return (
    <View className="bg-white dark:bg-zinc-900 rounded-xl p-4 mb-4 shadow-sm">
      <View className="flex-row items-center mb-2">
        <Image
          source={{ uri: "https://placehold.co/40x40" }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <Text className="font-semibold text-base text-zinc-900 dark:text-zinc-50">
          홍길동
        </Text>
      </View>
      <Text className="mb-2 text-base text-zinc-800 dark:text-zinc-200">
        오늘 경기 정말 재밌었어요! #스포츠 #응원
      </Text>
      <Image
        source={{ uri: "https://placehold.co/300x200" }}
        className="w-full h-40 rounded-lg mb-2"
      />

      <View className="flex-row items-center gap-4">
        <Text className="text-zinc-600 dark:text-zinc-400">❤️❤️ 12</Text>
        <Text className="text-zinc-600 dark:text-zinc-400">💬 3</Text>
        <Text className="text-zinc-600 dark:text-zinc-400">🔁</Text>
      </View>
    </View>
  );
}
