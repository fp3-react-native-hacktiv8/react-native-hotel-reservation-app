import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("Ali"); // Ganti nilai default sesuai kebutuhan
  const [email, setEmail] = useState("Ali@gmail.com"); // Ganti nilai default sesuai kebutuhan

  const handleUpdateProfile = () => {
    // Implementasi logika update profil disini
    console.log("Profile updated:", { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default ProfileScreen;

// import { StyleSheet, View, Text } from "react-native";
// import React from "react";

// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({});
