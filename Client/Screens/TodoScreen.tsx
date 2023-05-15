import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import TodosToRemember from "../Componets/TodosToRemember";
import { BottomBar } from "../Componets/BottomBar";
import { styles } from "../utils/styleSheet";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Todo">;

export default function TodoScreen({ navigation, route }: Props) {
  const [todos, setTodos] = useState<
    { id: number; checked: boolean; todo: string }[]
  >([]);

  useEffect(() => {
    const loadData = async () => {
      const savedTodos = await AsyncStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    };
    loadData();
  }, []);

  const handleCreate = async (newTodo: string) => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, checked: false, todo: newTodo };
    const newTodos = [...todos, newTodoItem];
    setTodos(newTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleCheck = async (id: number) => {
    const listTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(listTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(listTodos));
  };

  const handleDelete = async (id: number) => {
    const listTodos = todos.filter((todo) => todo.id !== id);
    if (listTodos.length === 0) {
      setTodos([]);
    } else {
      setTodos(listTodos);
    }
    await AsyncStorage.setItem("todos", JSON.stringify(listTodos));
  };

  return (
      <View style={styles.Todocontainer}>
        <TodosToRemember
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          length={todos.length}
          handleCreate={handleCreate}
        />

        <BottomBar navigation={navigation} route={route}></BottomBar>
      </View>
  );
}
