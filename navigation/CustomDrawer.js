import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated from "react-native-reanimated";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { connect } from "react-redux";

//icons
import icons from "../constants/icons";
import dummyData from "../constants/dummyData";

//Components
import CustomDrawerItem from "../components/CustomDrawerItem";

//Screens
import MainLayout from "../screens/MainLayout";

//Action
import { setSelectedTab } from "../store/tab/tabAction";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, selectedTab, userSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        {/* Close */}
        <View>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: "#fff" }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <View>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: "row" }}>
            <Image
              source={dummyData.myProfile?.profile_image}
              style={{ width: 50, height: 50, borderRadius: 12 }}
            />
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>
                {dummyData.myProfile?.name}
              </Text>
              <Text style={{ color: "#fff", fontSize: 16 }}>
                View Your Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Drawer item */}
        <View style={{ flex: 1, marginTop: 24 }}>
          <CustomDrawerItem
            label="Home"
            icon={icons.home}
            onPress={() => userSelectedTab("Home")}
            isFocused={selectedTab == "Home"}
          />
          <CustomDrawerItem label="My Wallet" icon={icons.wallet} />
          <CustomDrawerItem
            label="Notification"
            icon={icons.notification}
            onPress={() => userSelectedTab("Notification")}
            isFocused={selectedTab == "Notification"}
          />
          <CustomDrawerItem
            label="My Favourites"
            icon={icons.favourite}
            onPress={() => userSelectedTab("Favourite")}
            isFocused={selectedTab == "Favourite"}
          />
          {/* Line */}
          <View
            style={{
              backgroundColor: "#DDDDDD",
              height: 1,
              marginVertical: 8,
            }}
          />
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
          <View style={{ marginBottom: 24 }}>
            <CustomDrawerItem label="Logout" icon={icons.logout} />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

//MAIN
const CustomDrawer = ({ selectedTab, userSelectedTab }) => {
  //state
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8], //scale from 1 - 0.8
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View style={{ flex: 1, backgroundColor: "#FF6C44" }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        //initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress); //represents current state of drawer i.e open & close
          }, 0);

          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              userSelectedTab={userSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout drawerAnimationStyle={animatedStyle} {...props} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
