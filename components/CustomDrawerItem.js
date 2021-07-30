import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

const CustomDrawerItem = ({
  containerStyle,
  icon,
  label,
  labelStyle,
  onPress,
  isFocused,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: isFocused ? "rgba(0, 0, 0, 0.1)" : null,
        height: 40,
        marginBottom: 8,
        paddingLeft: 10,
        borderRadius: 8,
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Image
        source={icon}
        style={{ height: 20, width: 20, tintColor: "#fff" }}
      />
      <Text
        style={{ color: "#fff", marginLeft: 15, fontSize: 16, ...labelStyle }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
