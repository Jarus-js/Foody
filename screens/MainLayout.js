import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated, {
  useSharedValue, //we provide value i.e flex:1,backgroundColor:'#fff'
  useAnimatedStyle, //function that gives value of userSharedValue
  withTiming,
} from "react-native-reanimated";
import { connect } from "react-redux";

//icons
import icons from "../constants/icons";
//Components
import Header from "../components/Header";
import CustomTabButton from "../components/CustomTabButton";

//Actions
import { setSelectedTab } from "../store/tab/tabAction";

const MainLayout = ({
  drawerAnimationStyle,
  selectedTab,
  userSelectedTab,
  navigation,
}) => {
  //Reanimated Shared Value
  const homeTabFlex = useSharedValue(1); //flex:1
  const homeTabColor = useSharedValue("#fff"); //backgroundColor:'#fff'
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue("#fff");
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue("#fff");
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue("#fff");
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue("#fff");

  //Reanimated Animated Style
  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value };
  });
  const searchFlexStyle = useAnimatedStyle(() => {
    return { flex: searchTabFlex.value };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: searchTabColor.value };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return { flex: cartTabFlex.value };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value };
  });
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return { flex: favouriteTabFlex.value };
  });

  const favouriteColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: favouriteTabColor.value };
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationTabFlex.value };
  });

  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value };
  });
  useEffect(() => {
    userSelectedTab("Home");
  }, []);

  useEffect(() => {
    //Home
    if (selectedTab == "Home") {
      homeTabFlex.value = withTiming(4, { duration: 500 }); //from flex:1 to flex:4 in 500ms
      homeTabColor.value = withTiming("#FF6C44", { duration: 500 }); //from white to orange in 500ms
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming("#fff", { duration: 500 });
    }
    //Notification
    if (selectedTab == "Notification") {
      notificationTabFlex.value = withTiming(4, { duration: 500 }); //from flex:1 to flex:4 in 500ms
      notificationTabColor.value = withTiming("#FF6C44", { duration: 500 }); //from white to orange in 500ms
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming("#fff", { duration: 500 });
    }
    //Favourite
    if (selectedTab == "Favourite") {
      favouriteTabFlex.value = withTiming(4, { duration: 500 }); //from flex:1 to flex:4 in 500ms
      favouriteTabColor.value = withTiming("#FF6C44", { duration: 500 }); //from white to orange in 500ms
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming("#fff", { duration: 500 });
    }
    //Search
    if (selectedTab == "Search") {
      searchTabFlex.value = withTiming(4, { duration: 500 }); //from flex:1 to flex:4 in 500ms
      searchTabColor.value = withTiming("#FF6C44", { duration: 500 }); //from white to orange in 500ms
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming("#fff", { duration: 500 });
    }
    //Cart
    if (selectedTab == "Cart") {
      cartTabFlex.value = withTiming(4, { duration: 500 }); //from flex:1 to flex:4 in 500ms
      cartTabColor.value = withTiming("#FF6C44", { duration: 500 }); //from white to orange in 500ms
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming("#fff", { duration: 500 });
    }
  }, [selectedTab]);
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      <Header
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={icons.menu}
              style={{ height: 25, width: 25, tintColor: "#000000" }}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity>
            <Image
              source={icons.profile}
              style={{
                height: 25,
                width: 25,

                tintColor: "#000000",
              }}
            />
          </TouchableOpacity>
        }
      />
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>Main Layout</Text>
      </View>
      {/* Footer */}
      <View style={{ height: 90, justifyContent: "flex-end" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "gray",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <CustomTabButton
            label="Home"
            icon={icons.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => userSelectedTab("Home")}
            isFocused={selectedTab == "Home"}
          />
          <CustomTabButton
            label="Notification"
            icon={icons.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => userSelectedTab("Notification")}
            isFocused={selectedTab == "Notification"}
          />
          <CustomTabButton
            label="My Favourites"
            icon={icons.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => userSelectedTab("Favourite")}
            isFocused={selectedTab == "Favourite"}
          />
          <CustomTabButton
            label="Search"
            icon={icons.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => userSelectedTab("Search")}
            isFocused={selectedTab == "Search"}
          />
          <CustomTabButton
            label="Cart"
            icon={icons.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => userSelectedTab("Cart")}
            isFocused={selectedTab == "Cart"}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
