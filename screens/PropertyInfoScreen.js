import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
// import Icon from "react-native-vector-icons/MaterialIcons";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo, index) => (
            <View key={index} style={{ margin: 6 }}>
              <Image
                style={{
                  //   For Os/Ios //
                  //   width: 120,
                  //   height: pixelNormalize(80),
                  //   borderRadius: pixelNormalize(4),
                  width: 118,
                  height: 80,
                  borderRadius: 4,
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>

        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "royalblue",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 15 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17B169",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Travel sustainable
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults} adults
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            marginTop: 4,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          <Text style={{ fontSize: 20 }}>
            Rp {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 7,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 78,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)} % OFF
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "royalblue" }}
            >
              {route.params.selectedDates.startDate}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "royalblue" }}
            >
              {route.params.selectedDates.endDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guest
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: "royalblue" }}
          >
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        {/* <View>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <View style={styles.wrapperLabel}>
                <Icon
                  name="apartment"
                  size={50}
                  color="royalblue"
                  style={styles.icon}
                />
                <Text style={styles.label}>apartment</Text>
              </View>

              <View style={styles.wrapperLabel}>
                <Icon
                  name="kitchen"
                  size={50}
                  color="royalblue"
                  style={styles.icon}
                />
                <Text style={styles.label}>apartment</Text>
              </View>

              <View style={styles.wrapperLabel}>
                <Icon
                  name="hotel"
                  size={50}
                  color="royalblue"
                  style={styles.icon}
                />
                <Text style={styles.label}>apartment</Text>
              </View>

              <View style={styles.wrapperLabel}>
                <Icon
                  name="wifi"
                  size={50}
                  color="royalblue"
                  style={styles.icon}
                />
                <Text style={styles.label}>apartment</Text>
              </View>
            </View>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({
  //   container: {
  //     paddingHorizontal: 20,
  //   },
  //   wrapper: {
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //   },
  //   wrapperLabel: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   label: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     fontSize: 14,
  //     color: "gray",
  //     marginTop: 3,
  //   },
  //   icon: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
});
