import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@gmail.com");

  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);

  const handleUpdateProfile = () => {
    setName(tempName);
    setEmail(tempEmail);

    console.log("Profile updated:", { name: tempName, email: tempEmail });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={{
            uri: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zxqfrdxkxaf2d653qb4h",
          }}
          style={styles.userPhoto}
        />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textEmail}>{email}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        // value={tempName}
        onChangeText={(text) => setTempName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        // value={tempEmail}
        onChangeText={(text) => setTempEmail(text)}
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
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textEmail: {
    fontSize: 14,
    color: "gray",
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
