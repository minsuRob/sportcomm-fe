import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { createPost } from "../api/post";

export default function CreatePostScreen({ navigation }) {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    await createPost({ content });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="무엇을 생각하고 계신가요?"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="게시" onPress={handleSubmit} />
    </View>
  );
}
