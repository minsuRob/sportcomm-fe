import { View } from "react-native";
import { SamplePostCard } from "./SamplePostCard";

export function SampleFeedList() {
  return (
    <View>
      <SamplePostCard />
      <SamplePostCard />
      <SamplePostCard />
    </View>
  );
}
