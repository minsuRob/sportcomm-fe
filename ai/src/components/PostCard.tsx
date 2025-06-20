import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PostCard({ post }) {
  return (
    <View style={{ padding: 16, borderBottomWidth: 1, borderColor: "#eee" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: post.user.avatar }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <Text style={{ marginLeft: 8, fontWeight: "bold" }}>
          {post.user.nickname}
        </Text>
      </View>
      <Text style={{ marginVertical: 8 }}>{post.content}</Text>
      {post.images && post.images.length > 0 && (
        <Image
          source={{ uri: post.images[0] }}
          style={{ width: "100%", height: 200, borderRadius: 8 }}
        />
      )}
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <TouchableOpacity>
          <Text>❤️ {post.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Text>💬 {post.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Text>🔁</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
