import React from "react";
import { Text, TouchableWithoutFeedback, Image } from "react-native";
import Animated from "react-native-reanimated";

const CustomTabButton = ({
  onPress,
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? "#fff" : "gray",
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{ marginLeft: 8, fontSize: 16, color: "#fff" }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTabButton;
