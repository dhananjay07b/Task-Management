import AddTaskBotton from "./components/AddTaskButton";
import Header from "./components/Header";
import TaskTable from "./components/TaskTable";

export default function Home(){

  return(
    <main className="max-w-5xl mx-auto mt-4">
      <div className="text-center my-10 flex flex-col gap-4">
        <Header/>
        <AddTaskBotton/>
        <TaskTable/>
      </div>
    </main>
  )
}