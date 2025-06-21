import { SafeAreaView, ScrollView } from "react-native";
import { SampleFeedList } from "../../components/feed/SampleFeedList";

export default function SampleFeedScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerClassName="p-4">
        <SampleFeedList />
      </ScrollView>
    </SafeAreaView>
  );
}
