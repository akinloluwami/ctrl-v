import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default Send = () => {
  const [optionId, setOptionId] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to send?</Text>
      <View style={styles.boxes}>
        <TouchableOpacity
          style={[
            styles.box,
            {
              backgroundColor:
                optionId === 1 ? colors.accent : "rgba(0,0,0,0.25)",
            },
          ]}
          onPress={() => {
            setOptionId(1);
          }}
        >
          <Text style={styles.boxText}>Link</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.box,
            {
              backgroundColor:
                optionId === 2 ? colors.accent : "rgba(0,0,0,0.25)",
            },
          ]}
          onPress={() => {
            setOptionId(2);
          }}
        >
          <Text style={styles.boxText}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setOptionId(optionId);
          }}
        >
          <Text style={styles.boxText}>File</Text>
        </TouchableOpacity>
      </View>
      {!optionId && <Text style={styles.optionText}>Select an option</Text>}
      {optionId === 1 && (
        <View>
          <TextInput
            placeholder="Paste link here"
            placeholderTextColor="grey"
            style={styles.input}
            // onChangeText={(text) => setEmail(text.trim())}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
      {optionId === 2 && (
        <View>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Paste text here"
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    paddingTop: Platform.OS === "android" ? 70 : 0,
    backgroundColor: colors.background,
    width: "100%",
  },
  boxes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  optionText: {
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
    fontSize: 25,
  },
  textArea: {
    color: colors.text,
    width: "90%",
    height: 150,
    marginHorizontal: 20,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    color: "#FFF",
    fontSize: 15,
  },
  box: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.25)",
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  boxText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.accent,
    alignItems: "center",
    color: colors.text,
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  text: {
    color: colors.text,
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 50,
    marginHorizontal: 20,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    color: "#FFF",
    padding: 5,
    fontSize: 15,
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: colors.accent,
    marginHorizontal: 20,
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 20,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  success: {
    color: "#0f0",
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: "rgba(0, 255, 0, 0.2)",
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    margin: 10,
  },
});
