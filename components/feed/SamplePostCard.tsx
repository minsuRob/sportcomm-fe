import { Image, View, Text } from "react-native";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";

export function SamplePostCard() {
  return (
    <Card className="mb-4">
      <CardHeader className="p-4">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://placehold.co/40x40" }}
            className="w-10 h-10 rounded-full mr-4"
          />
          <Text className="font-semibold text-foreground">홍길동</Text>
        </View>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Text className="mb-4 text-base text-foreground">
          오늘 경기 정말 재밌었어요! #스포츠 #응원
        </Text>
        <Image
          source={{ uri: "https://placehold.co/300x200" }}
          className="w-full h-48 rounded-lg"
        />
      </CardContent>
      <CardFooter className="flex-row items-center justify-start gap-4 p-4 pt-0">
        <Text className="text-muted-foreground">❤️ 12</Text>
        <Text className="text-muted-foreground">💬 3</Text>
        <Text className="text-muted-foreground">🔁</Text>
      </CardFooter>
    </Card>
  );
}
