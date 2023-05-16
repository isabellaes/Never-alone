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
      <Text style={styles.title}>
        Komma ihåg!
      </Text>
      <View style={{flexDirection: "row", alignItems: "center"}}>
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
        style={[styles.buttonStandard, {width: "16%", marginLeft: 5,marginRight: 10, padding: 10, borderRadius: 5 , }]}
          onPress={() => {
            handleCreate(newTodo);
            setNewTodo("");
          }}
        ><Text>Spara</Text></TouchableHighlight>
      </View>
      <Text style={styles.todotext}>
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
                  <Text style={{fontSize: 20, color: "#c76392"}}>
                  {item.todo}
                  </Text>
                </Text>
                <View>
                  <Icon
                    style={{ padding: 10, fontSize: 18 }}
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
