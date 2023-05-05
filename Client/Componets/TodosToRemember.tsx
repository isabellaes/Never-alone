import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../utils/styleSheet";

interface Todo {
  id: number;
  checked: boolean;
  todo: string;
}

interface TodoProps {
  todos: Todo[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
  handleCreate: (newTodo: string) => void;
  length: string | any;
}

const TodosToRemember = ({
  todos,
  handleCheck,
  handleDelete,
  handleCreate,
  length,
}: TodoProps) => {
  const [newTodo, setNewTodo] = useState("");
  const text = (
    <Text style={{ marginTop: "2rem" }}>Vill du lägga till något?</Text>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10, marginTop:20 }}>
        Komma ihåg!
      </Text>
      <View>
        <TextInput
          style={styles.todoinput}
          onChangeText={(text) => setNewTodo(text)}
          value={newTodo}
          placeholder="Att komma ihåg.."
          onSubmitEditing={() => {
            handleCreate(newTodo);
            setNewTodo("");
          }}
        ></TextInput>
        <TouchableHighlight
        style={[styles.buttonStandard, {width: "25%", marginLeft: 160, marginBottom: 60, padding: 10, borderRadius: 5 }]}
          onPress={() => {
            handleCreate(newTodo);
            setNewTodo("");
          }}
        ><Text>Spara</Text></TouchableHighlight>
      </View>
      <Text style={{ fontSize: 15, textAlign: "center", padding: 10 }}>
        {length} {length === 1 ? "sak" : "saker"} i listan!{" "}
      </Text>
      <View style={styles.todo}>
        {todos.length ? (
          <FlatList
            style={styles.flatlist}
            data={todos}
            keyExtractor={(todo) => todo.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={styles.checbox}>
                  <Checkbox
                    status={item.checked ? "checked" : "unchecked"}
                    onPress={() => handleCheck(item.id)}
                  />
                </View>
                <Text
                  style={
                    item.checked ? { textDecorationLine: "line-through" } : null
                  }
                >
                  {item.todo}
                </Text>
                <View>
                  <Icon
                    style={{ padding: 10, fontSize: 16 }}
                    name="trash-alt"
                    onPress={() => handleDelete(item.id)}
                  />
                </View>
              </View>
            )}
          />
        ) : (
          <Text>{text}</Text>
        )}
      </View>
    </View>
  );
};

export default TodosToRemember;
