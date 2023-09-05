import React, { useState } from "react";
import Grid from "./Grid";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Separator = () => <View style={styles.separator} />;

const users = [
  {
    id: 1,
    name: "Anil1"
  },
  {
    id: 2,
    name: "Anil2"
  },
  {
    id: 3,
    name: "Anil3"
  },
  {
    id: 4,
    name: "Anil4"
  }
];
const List = () => {
  return (
    <View>
      <Text style={{ fontSize: 31 }}>List with Flat list component </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const ListMap = () => {
  return (
    <View>
      <Text style={{ fontSize: 31 }}>List with Map</Text>
      {users.map((item) => (
        <Text style={styles.itemMap}>{item.name}</Text>
      ))}
    </View>
  );
};

function App() {
  const [font, setFont] = useState(30);
  const [color, setColor] = useState("green");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  function changeFont() {
    setFont(font === 30 ? 20 : 30);
  }
  function changeColor() {
    setColor(color === "green" ? "yellow" : "green");
  }
  const togglePass = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const resetFormData = () => {
    setDisplay(false);
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: font, backgroundColor: color }}>
          This is mobile app
        </Text>
        <View style={styles.button}>
          <Button title="Font" onPress={changeFont} />
        </View>

        <View style={styles.button}>
          <Button title="Color" onPress={changeColor} />
        </View>
        <Button
          title="Pop"
          onPress={() => {
            alert("you pressed the pop!!");
          }}
        />
        <Separator />
        <Button
          title="Right button"
          onPress={() => alert("Right button pressed")}
        />
        <Separator />
        <Text style={{ fontSize: 30 }}>Form </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={secureTextEntry}
          />
          <Pressable onPress={togglePass} style={{ padding: 10 }}>
            <Icon
              name={secureTextEntry ? "eye-slash" : "eye"}
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={{ margin: 10 }}>
          <Button
            color={"green"}
            title="print details"
            onPress={() => {
              setDisplay(true);
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="clear details" onPress={resetFormData} />
        </View>
        <View style={{ margin: 10 }}>
          {display ? (
            <View>
              <Text>Name is: {name}</Text>
              <Text>password is: {password}</Text>
              <Text>email is: {email}</Text>
            </View>
          ) : null}
        </View>
        <List />
        <ListMap />
      </View>
      <Grid users={users} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: "5px"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textInput: {
    fontSize: 18,
    color: "gray",
    borderWidth: 2,
    borderColor: "black",
    margin: 10
  },
  item: {
    fontSize: 24,
    padding: 10,
    color: "white",
    backgroundColor: "green",
    borderWidth: 1,
    margin: 10
  },
  itemMap: {
    fontSize: 24,
    padding: 10,
    color: "black",
    backgroundColor: "cyan",
    borderWidth: 5,
    borderRadius: 50,
    margin: 10,
    textAlign: "center"
  }
});

export default App;
