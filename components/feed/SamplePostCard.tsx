import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export function SamplePostCard() {
  return (
    <ThemedView style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://placehold.co/40x40" }}
          style={styles.avatar}
        />
        <ThemedText type="defaultSemiBold" style={styles.nickname}>
          홍길동
        </ThemedText>
      </View>
      <ThemedText style={styles.content}>
        오늘 경기 정말 재밌었어요! #스포츠 #응원
      </ThemedText>
      <Image
        source={{ uri: "https://placehold.co/300x200" }}
        style={styles.image}
      />

      <View style={styles.actions}>
        <ThemedText>❤️ 12</ThemedText>
        <ThemedText style={{ marginLeft: 16 }}>💬 3</ThemedText>
        <ThemedText style={{ marginLeft: 16 }}>🔁</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  nickname: {
    fontSize: 16,
  },
  content: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
});
