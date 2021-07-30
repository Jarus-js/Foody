import React from "react";
import { View, Text } from "react-native";

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      {/* Left */}
      {leftComponent}
      {/* Title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
