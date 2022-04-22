import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask
}) {
  /* Function responsável por chamar onAddTask*/
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState); /* parâmetro title e state */
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {/*Renderizar as tasks aqui: {task.map}. map tansforma um elemento em outro, ex: numero em string. No caso, vms transformar a lista em elementos html */}
        {tasks.map((task) /*task=um elemento da lista */ => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefas
        </button>
      </div>
    </div>
  );
}

/*Declarar o tipo de prop */
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
