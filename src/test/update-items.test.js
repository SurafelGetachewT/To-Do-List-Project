/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */
/* eslint-disable linebreak-style */
/* eslint quotes: ["error", "double", { "avoidEscape": true }] */
import { addTodos, editTodos, todos } from "../ModifyTodos.js";
import { changeTodoStatus, removeCompletedTodos } from "../TodoStatus.js";

document.body.innerHTML = '<ul class="todo-list-group"></ul>';
addTodos("test task 1");
addTodos("test task 2");

// Tests for change item status
describe("By change status of todo ", () => {
  // Arrange
  const message = {
    check: "check if changeTodoStatus is a function",
    test: "test if item status changed",
  };
  // Act
  changeTodoStatus({ index: 1, status: true });
  // Assert
  test(message.check, () => {
    expect(typeof changeTodoStatus).toBe("function");
  });
  test(message.test, () => {
    expect(todos[0].completed).toBe(true);
  });
});

// Tests for Change item description
describe("By edit description of todo", () => {
  // Arrange
  const message = {
    check: "check if editTodos is a function",
    test: "test if item descripption change",
  };
  // Act
  editTodos({ index: 2, inputValue: "updated item" });
  // Assert
  test(message.check, () => {
    expect(typeof editTodos).toBe("function");
  });
  test(message.test, () => {
    expect(todos[1].description).toBe("updated item");
  });
});

// Tests for remove item with completed status
describe("By remove all completed tasks", () => {
  // Arrange
  const message = {
    check: "check if removeCompletedTodos is a function",
    test: "test completed task removed",
  };
  // Assert
  test(message.check, () => {
    expect(typeof removeCompletedTodos).toBe("function");
  });
  test(message.test, () => {
    expect(removeCompletedTodos().length).toBe(1);
  });
});
