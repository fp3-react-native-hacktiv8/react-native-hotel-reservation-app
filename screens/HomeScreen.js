import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Alna App",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        // marginLeft: "57%",
      },
      headerStyle: {
        backgroundColor: "royalblue",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  console.log(route.params);

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  return (
    <>
      <ScrollView>
        <Header />

        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#0047AC",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#0047AC",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={
                  route?.params ? route.params.input : "Enter Your Destination"
                }
              />
            </Pressable>

            {/* Selected Dates */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#0047AC",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "royalblue",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="royalblue"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms and Guest */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#0047AC",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="ios-person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
              />
            </Pressable>

            {/* Search Buttom */}
            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#0047AC",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "royalblue",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>

          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "royalblue",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Complete 5 stays to unlock lavel 2
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Enjoy Discounts at participating at properties worldwide
              </Text>
            </Pressable>
          </ScrollView>

          {/* Start Card Top Destination */}
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Top Destination
          </Text>
          <ScrollView
            style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/dki-jakarta/Image1.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Jakarta
              </Text>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/03112735/Tempat-Tinggal-Terbaik-di-Bali.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Bali
              </Text>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Yogyakarta
              </Text>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.okezone.com/content/2022/12/08/337/2722874/ini-5-alasan-kenapa-kota-surabaya-disebut-kota-pahlawan-nWb0plbz3Y.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Surabaya
              </Text>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://blog.antavaya.com/wp-content/uploads/2020/03/Destinasi-Wisata-Lombok-Paling-Populer-Tahun-2020-Sumber-Instagram-kezyayoanas_.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Lombok
              </Text>
            </View>
            {/* paddingRight: 35 */}
            <View
              style={{
                flexDirection: "column",
                marginRight: 40,
                marginLeft: 5,
              }}
            >
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 12,
                  backgroundColor: "black",
                }}
              >
                <Image
                  source={{
                    uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/destinasi/banda-aceh/image-1.jpg",
                  }}
                  style={{ width: 66, height: 66, borderRadius: 12 }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                Aceh
              </Text>
            </View>
          </ScrollView>
          {/* End Card Top Destination */}

          {/* Start Card Popular Destination */}
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: "500",
              marginTop: 15,
            }}
          >
            Popular Destination
          </Text>
          <ScrollView
            style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width: 140,
                height: 147,
                borderRadius: 16,
                borderColor: "black",
                borderWidth: 0.3,
                borderRadius: 8,
                // shadowOffset: { width: 0, height: 1 },
                backgroundColor: "white",
                // shadowOpacity: 0.2,
                // shadowRadius: 2,
                // elevation: 3,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5, // for Android
              }}
            >
              <View style={{}}>
                <View
                  style={{
                    width: 120,
                    height: 110,
                    backgroundColor: "yellow",
                    marginTop: 9,
                    borderRadius: 12,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/east-nusa-tenggara/labuan-bajo/LB2.jpg",
                    }}
                    style={{ width: 120, height: 110, borderRadius: 8 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 14,

                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Labuan Bajo
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 140,
                height: 147,
                borderRadius: 16,
                borderColor: "black",
                borderWidth: 0.3,
                borderRadius: 8,
                shadowOffset: { width: 0, height: 1 },
                backgroundColor: "white",
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                marginLeft: 10,
              }}
            >
              <View style={{}}>
                <View
                  style={{
                    width: 120,
                    height: 110,
                    backgroundColor: "yellow",
                    marginTop: 9,
                    borderRadius: 12,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revision-2019/4.jpg",
                    }}
                    style={{ width: 120, height: 110, borderRadius: 8 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 14,

                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Borobudur
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 140,
                height: 147,
                borderRadius: 16,
                borderColor: "black",
                borderWidth: 0.3,
                borderRadius: 8,
                shadowOffset: { width: 0, height: 1 },
                backgroundColor: "white",
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                marginLeft: 10,
              }}
            >
              <View style={{}}>
                <View
                  style={{
                    width: 120,
                    height: 110,
                    backgroundColor: "yellow",
                    marginTop: 9,
                    borderRadius: 12,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/going-on-a-bleisure-trip-to-danau-toba-try-these-5-feel-good-resorts/thumbnail.jpg",
                    }}
                    style={{ width: 120, height: 110, borderRadius: 8 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 14,

                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Danau Toba
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 140,
                height: 147,
                borderRadius: 16,
                borderColor: "black",
                borderWidth: 0.3,
                borderRadius: 8,
                shadowOffset: { width: 0, height: 1 },
                backgroundColor: "white",
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                marginLeft: 10,
              }}
            >
              <View style={{}}>
                <View
                  style={{
                    width: 120,
                    height: 110,
                    backgroundColor: "yellow",
                    marginTop: 9,
                    borderRadius: 12,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://www.paradisepartiesbali.com/wp-content/uploads/2023/07/Screenshot-2023-07-17-at-3.12.56-pm-1024x447.png",
                    }}
                    style={{ width: 120, height: 110, borderRadius: 8 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 14,

                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Atlas Beach Fest
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 140,
                height: 147,
                borderRadius: 16,
                borderColor: "black",
                borderWidth: 0.3,
                borderRadius: 8,
                shadowOffset: { width: 0, height: 1 },
                backgroundColor: "white",
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                marginLeft: 10,
                marginRight: 40,
              }}
            >
              <View style={{}}>
                <View
                  style={{
                    width: 120,
                    height: 110,
                    backgroundColor: "yellow",
                    marginTop: 9,
                    borderRadius: 12,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://hellolombok.id/wp-content/uploads/2023/03/circuit-mandalika.jpg",
                    }}
                    style={{ width: 120, height: 110, borderRadius: 8 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 14,

                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Mandalika
                </Text>
              </View>
            </View>
          </ScrollView>
          {/* End Card Popular Destination */}

          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </ScrollView>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "royalblue",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guest" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontVariant: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontVariant: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontVariant: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontVariant: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontVariant: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontVariant: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontVariant: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
