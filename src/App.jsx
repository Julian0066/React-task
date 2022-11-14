import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";

function App() {
  return (
    <>
    <div className="bg-zinc-900 h-screen ">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList />
      </div>
    </div>
    </>
  );
}

export default App;
