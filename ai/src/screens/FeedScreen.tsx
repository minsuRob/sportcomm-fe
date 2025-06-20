import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getFeedPosts } from "../api/post";
import FeedList from "../components/FeedList";

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeedPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <ActivityIndicator />;

  return <FeedList posts={posts} />;
}
