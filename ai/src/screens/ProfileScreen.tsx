import React from "react";
import { View } from "react-native";
import ProfileHeader from "../components/ProfileHeader";

const dummyUser = {
  avatar: "https://placehold.co/80x80",
  nickname: "홍길동",
  bio: "스포츠를 사랑하는 유저",
};

export default function ProfileScreen() {
  return (
    <View>
      <ProfileHeader user={dummyUser} />
      {/* 유저의 게시글 목록 등 추가 구현 */}
    </View>
  );
}
