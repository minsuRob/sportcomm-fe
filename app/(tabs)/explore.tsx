import { SafeAreaView, ScrollView } from "react-native";
import { SampleFeedList } from "../../components/feed/SampleFeedList";

export default function SampleFeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <SampleFeedList />
      </ScrollView>
    </SafeAreaView>
  );
}
