import React from "react";
import { FlatList } from "react-native";
import PostCard from "./PostCard";

export default function FeedList({ posts }) {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
