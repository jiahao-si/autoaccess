import * as React from "react";
import { Example } from "../models";
import { TodoExample } from "./todo-example";

export const ExampleList: Example[] = [
    { name: "todo", title: "Todo 应用", container: <TodoExample></TodoExample> }
];