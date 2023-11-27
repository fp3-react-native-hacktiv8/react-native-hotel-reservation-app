import { StyleSheet, View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "royalblue",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <ScrollView>
      {route.params.rooms.map((item, index) => (
        <Pressable
          style={{ margin: 10, backgroundColor: "white", padding: 10 }}
          key={index}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ color: "royalblue", fontSize: 17, fontWeight: "500" }}
            >
              {item.name}
            </Text>
            <AntDesign name="infocirlceo" size={24} color="royalblue" />
          </View>
          <Text style={{ marginTop: 3, fontSize: 16 }}>
            pay at the property
          </Text>
          <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
            Free cancellation Available
          </Text>
          <View
            style={{
              marginTop: 3,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice}
            </Text>
            <Text style={{ fontSize: 18 }}>Rp {route.params.newPrice}</Text>
          </View>
          <Amenities />

          <Pressable
            style={{
              borderColor: "royalblue",
              borderWidth: 2,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "700",
                color: "royalblue",
              }}
            >
              SELECT
            </Text>
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({});
