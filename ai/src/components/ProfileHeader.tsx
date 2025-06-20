import React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileHeader({ user }) {
  return (
    <View style={{ alignItems: "center", padding: 16 }}>
      <Image
        source={{ uri: user.avatar }}
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.nickname}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
}
