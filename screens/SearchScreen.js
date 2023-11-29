import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const data = [
    {
      id: "0",
      place: "Jakarta",
      placeImage:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/dki-jakarta/Image1.jpg",
      shortDescription: "Jakarta Province, Indonesia",
      properties: [
        {
          id: "10",
          name: "OYO 93261 Fresh Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
          rating: 3.6,
          address: "Jakarta Barat • 4,9 km dari pusat",
          oldPrice: 370000,
          newPrice: 180000,
          latitude: "-6.150875193897439",
          longitude: "106.81760239535717",

          photos: [
            {
              id: "100",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
            },
            {
              id: "101",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845633.jpg?k=19a43441c40e9c9ff3b57d6a1a7c379c4def04730e34f76fd4a298eaefcd23d1&o=&hp=1",
            },
            {
              id: "102",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845621.jpg?k=52411b8fb2fe37edf07da6d3dfb145cc85288ac210f28ff19608ba101f1bba0e&o=&hp=1",
            },
            {
              id: "103",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845650.jpg?k=36bbad9d47f2db957eddbf922e711fbfc9ab2bf901ceaa1bd5d1ca4dc857f21c&o=&hp=1",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845660.jpg?k=0db1ba8f8f2c1de0ded8b1dc30d4f181a52b898b0a9107c5a24f86688cc24c5e&o=&hp=1",
            },
            {
              id: "105",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845662.jpg?k=94bdc326cbec92e658a262a7d81387e65ede9d250489b1a3cc6d22d6b9c935ff&o=&hp=1",
            },
            {
              id: "106",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845665.jpg?k=637ae74710f45147445e49211d54d63a6200b6857f1bd03e38e41cceb0b931eb&o=&hp=1",
            },
            {
              id: "107",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845623.jpg?k=dc33256ff9ff9eda46683c776c1cf9af04910364ec8d1d9523b8cf80d18cca65&o=&hp=1",
            },
            {
              id: "108",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845673.jpg?k=24dd44dc2ac1bfda8aabdbff24571d211f42a4b5cf175fc9043113b61f57f670&o=&hp=1",
            },
            {
              id: "109",
              image: "2",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "11",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
          name: "Ashley Sabang Jakarta",
          rating: 4.2,
          address: "Jakarta Pusat • 1,3 km dari pusat",
          oldPrice: 999000,
          newPrice: 850000,
          latitude: "-6.184043601594098",
          longitude: "106.82467713686948",

          photos: [
            {
              id: "110",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
            },
            {
              id: "111",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495252.jpg?k=46de660c903dde8a4250610e13a17241645853c4088d76e7a7741b6bc52ad8ea&o=&hp=1",
            },
            {
              id: "112",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494915.jpg?k=b1c09ff0ff09bd86d06861cfebb76a937090f7339a09ca5d53662db340d90cba&o=&hp=1",
            },
            {
              id: "113",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498294.jpg?k=445b45130c2315805662dd6df9ad44009097b06e89d01aa0afc473b54ba04af5&o=&hp=1",
            },
            {
              id: "114",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497917.jpg?k=10ebeb3f85490fd2cc9fd3d6f8389ea7f1a35c9e4b29b219bccd6eb89c6a1cd5&o=&hp=1",
            },
            {
              id: "115",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498097.jpg?k=51244caaa9e4e33ad7d1580b0a1fcf4795c0db3a0fb3d625720e2f0ec7646a1c&o=&hp=1",
            },
            {
              id: "116",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498063.jpg?k=7b456a08a5becb5bf3f9b181719cb9d8d61c8a9e193ab07fe1b5a2c8887da3b6&o=&hp=1",
            },
            {
              id: "117",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497742.jpg?k=7d87188e85821b7b9e1871f898ffe1b8817b1620f3dac4207be18d8946e40d56&o=&hp=1",
            },
            {
              id: "118",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495166.jpg?k=fc2ba7c31b133d48a0b8c1fce679ef3957de259f4ca0d23534b8e32f983fe9c4&o=&hp=1",
            },
            {
              id: "119",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494890.jpg?k=4cd3feffb3dd3343be0bd6644a69d070c27824860af763ef7e0490b454799e1b&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "12",
          name: "Bobobox ITC Kuningan",
          rating: 4.2,
          address: "Jakarta Selatan • 3 km dari pusat",
          oldPrice: 380000,
          newPrice: 350000,
          latitude: "-6.223815815627502",
          longitude: "106.82638647144078",

          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695517.jpg?k=c2559cc321dd56a7beb32262c84d60bc1760430a4a49ac6f8713a2fa03cd0d36&o=&hp=1",
          photos: [
            {
              id: "120",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695517.jpg?k=c2559cc321dd56a7beb32262c84d60bc1760430a4a49ac6f8713a2fa03cd0d36&o=&hp=1",
            },
            {
              id: "121",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695562.jpg?k=ca777d889f58838b1158a9e264b18d8f4ceff509a9fb89d345ef84151fd461b0&o=&hp=1",
            },
            {
              id: "122",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695518.jpg?k=240da3b294b015aa9268ba4bb8f09c9120bfabd6668ba55678fa5afda1582930&o=&hp=1",
            },
            {
              id: "123",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695521.jpg?k=99fffb6766013b84bc4780be3de5d7a73837062b99501f2cb3b039ebfb957d04&o=&hp=1",
            },
            {
              id: "124",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695792.jpg?k=c434efe348180f5a1a292b31432f46277bf5e43c7b85bce486665e3f424d0549&o=&hp=1",
            },
            {
              id: "125",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695791.jpg?k=ad248a728c71fffa384e1961e72b5a77462ab58da88c6f3074d5ff20ded68e51&o=&hp=1",
            },
            {
              id: "126",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695896.jpg?k=84734c40aaf7e6960b01e3eb931c24318119d61494ce05cf50831a88b10026cf&o=&hp=1",
            },
            {
              id: "128",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430696362.jpg?k=41296a49d0c2f96dc4a72eddb9e42fc4b648408dcf5b1ceed2e73add6c5daf5d&o=&hp=1",
            },
            {
              id: "129",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430696348.jpg?k=0a2f5bd39e71a59ae2554974021c8ef8540795758961baf3b48ee9a1b1548bd7&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Lombok",
      placeImage:
        "https://blog.antavaya.com/wp-content/uploads/2020/03/Destinasi-Wisata-Lombok-Paling-Populer-Tahun-2020-Sumber-Instagram-kezyayoanas_.jpg",
      shortDescription: "Indonesia",
      properties: [
        {
          id: "10",
          name: "Villa Coco Republic",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
          rating: 3.6,
          address: "Gili Air • 33 km dari pusat",
          oldPrice: 610000,
          newPrice: 470000,
          latitude: "-8.35464140971046",
          longitude: "116.08699060209025",

          photos: [
            {
              id: "100",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
            },
            {
              id: "101",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845633.jpg?k=19a43441c40e9c9ff3b57d6a1a7c379c4def04730e34f76fd4a298eaefcd23d1&o=&hp=1",
            },
            {
              id: "102",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845621.jpg?k=52411b8fb2fe37edf07da6d3dfb145cc85288ac210f28ff19608ba101f1bba0e&o=&hp=1",
            },
            {
              id: "103",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845650.jpg?k=36bbad9d47f2db957eddbf922e711fbfc9ab2bf901ceaa1bd5d1ca4dc857f21c&o=&hp=1",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845660.jpg?k=0db1ba8f8f2c1de0ded8b1dc30d4f181a52b898b0a9107c5a24f86688cc24c5e&o=&hp=1",
            },
            {
              id: "105",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845662.jpg?k=94bdc326cbec92e658a262a7d81387e65ede9d250489b1a3cc6d22d6b9c935ff&o=&hp=1",
            },
            {
              id: "106",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845665.jpg?k=637ae74710f45147445e49211d54d63a6200b6857f1bd03e38e41cceb0b931eb&o=&hp=1",
            },
            {
              id: "107",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845623.jpg?k=dc33256ff9ff9eda46683c776c1cf9af04910364ec8d1d9523b8cf80d18cca65&o=&hp=1",
            },
            {
              id: "108",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845673.jpg?k=24dd44dc2ac1bfda8aabdbff24571d211f42a4b5cf175fc9043113b61f57f670&o=&hp=1",
            },
            {
              id: "109",
              image: "2",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "11",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
          name: "Mowies Gili Air",
          rating: 4,
          address: "Gili Air • 33 km dari pusat",
          oldPrice: 999000,
          newPrice: 810000,
          latitude: "-8.363624700171778",
          longitude: "116.07798933973537",
          photos: [
            {
              id: "110",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
            },
            {
              id: "111",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495252.jpg?k=46de660c903dde8a4250610e13a17241645853c4088d76e7a7741b6bc52ad8ea&o=&hp=1",
            },
            {
              id: "112",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494915.jpg?k=b1c09ff0ff09bd86d06861cfebb76a937090f7339a09ca5d53662db340d90cba&o=&hp=1",
            },
            {
              id: "113",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498294.jpg?k=445b45130c2315805662dd6df9ad44009097b06e89d01aa0afc473b54ba04af5&o=&hp=1",
            },
            {
              id: "114",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497917.jpg?k=10ebeb3f85490fd2cc9fd3d6f8389ea7f1a35c9e4b29b219bccd6eb89c6a1cd5&o=&hp=1",
            },
            {
              id: "115",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498097.jpg?k=51244caaa9e4e33ad7d1580b0a1fcf4795c0db3a0fb3d625720e2f0ec7646a1c&o=&hp=1",
            },
            {
              id: "116",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498063.jpg?k=7b456a08a5becb5bf3f9b181719cb9d8d61c8a9e193ab07fe1b5a2c8887da3b6&o=&hp=1",
            },
            {
              id: "117",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497742.jpg?k=7d87188e85821b7b9e1871f898ffe1b8817b1620f3dac4207be18d8946e40d56&o=&hp=1",
            },
            {
              id: "118",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495166.jpg?k=fc2ba7c31b133d48a0b8c1fce679ef3957de259f4ca0d23534b8e32f983fe9c4&o=&hp=1",
            },
            {
              id: "119",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494890.jpg?k=4cd3feffb3dd3343be0bd6644a69d070c27824860af763ef7e0490b454799e1b&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "places");

      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
    };

    fetchProducts();
  }, [items]);
  console.log(items);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          marginTop: 75,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "royalblue",
          borderWidth: 4,
          borderRadius: 10,
        }}
      >
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Enter Your Destination"
        ></TextInput>
        <Feather name="search" size={24} color="black" />
      </View>

      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
