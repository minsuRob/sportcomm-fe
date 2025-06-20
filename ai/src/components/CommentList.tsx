import React from "react";
import { FlatList, Text } from "react-native";

export default function CommentList({ comments }) {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => (
        <Text>
          {item.user.nickname}: {item.content}
        </Text>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
