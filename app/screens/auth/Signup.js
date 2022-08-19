import {
  StyleSheet,
  Text,
  View,
  Button,
  DevSettings,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../utils/colors";
import logo from "../../assets/logo.png";
import { AntDesign } from "@expo/vector-icons";

export default Signup = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <Image source={logo} style={styles.logo} />

      <Text style={[styles.title]}>Signup</Text>
      {error && <Text style={styles.error}>{errorMessage}</Text>}

      <View style={styles.form}>
        <Text style={styles.text}>Email</Text>

        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.text}>Password</Text>
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            placeholder="password"
            secureTextEntry={isHidden}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: "25%",
            }}
            onPress={() => {
              setIsHidden(!isHidden);
            }}
          >
            <Text style={{ color: "#fff" }}>
              {isHidden ? (
                <AntDesign name="eye" size={20} />
              ) : (
                <AntDesign name="close" size={20} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Confirm Password</Text>
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            placeholder="password"
            secureTextEntry={isHidden}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: "25%",
            }}
            onPress={() => {
              setIsHidden(!isHidden);
            }}
          >
            <Text style={{ color: "#fff" }}>
              {isHidden ? (
                <AntDesign name="eye" size={20} />
              ) : (
                <AntDesign name="close" size={20} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              opacity: !email || !password ? 0.3 : 1,
            },
          ]}
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              setError(true);
              setErrorMessage("Invalid email or password");
            }, 1000);
          }}
          disabled={isLoading || !email || !password}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {isLoading ? "Loading..." : "Signup"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text
          style={[
            styles.text,
            {
              textAlign: "center",
              marginBottom: 0,
            },
          ]}
        >
          Already have an account?
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: colors.accent,
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
            },
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  form: {
    width: "85%",
  },
  input: {
    color: "#FFF",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: colors.accent,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    color: "#FFF",
    padding: 5,
    fontSize: 15,
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: colors.accent,
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 20,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 0.3,
    width: 150,
    marginBottom: 50,
    resizeMode: "contain",
  },
  error: {
    color: "#f00",
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    margin: 10,
  },
});
