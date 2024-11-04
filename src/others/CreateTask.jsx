import { useContext, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const data = userData;

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.tasks.push({
          taskTitle,
          taskDescription,
          taskDate,
          category,
          active: false,
          newTask: true,
          failed: true,
          completed: false,
        });
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    {
      localStorage.setItem("employees", JSON.stringify(data));
    }
    alert("assigned successfully");
    // console.log(data);
  }

  return (
    <div className=" w-full p-10">
      <div className="bg-[#1C1C1C] px-5">
        <form
          className="flex w-full items-start mt-10 justify-between flex-wrap"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-xl text-grey-300 mb-0.5 mt-2">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                placeholder="Make a UI design"
                className="outline-none bg-transparent border-gray-500 border-[1px] rounded px-2 py-1 w-4/5 mt-2 mb-2"
              />
            </div>

            <div>
              <h3 className="text-xl text-grey-300 mb-0.5 mt-2">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                className="outline-none bg-transparent border-gray-500 border-[1px] rounded px-2 py-1 w-4/5 mt-2 mb-2"
              />
            </div>

            <div>
              <h3 className="text-xl text-grey-300 mb-0.5 mt-2">Assign To</h3>
              <select
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="outline-none bg-transparent border-gray-500 border-[1px] rounded px-2 py-1 w-4/5 mt-2 mb-2"
              >
                <option value="">Select an employee</option>
                <option value="Arjun">Arjun</option>
                <option value="Sneha">Sneha</option>
                <option value="Ravi">Ravi</option>
                <option value="Priya">Priya</option>
                <option value="Karan">Karan</option>
              </select>
            </div>

            <div>
              <h3 className="text-xl text-grey-300 mb-0.5 mt-2">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                placeholder="Design,Dev,etc..."
                className="outline-none bg-transparent border-gray-500 border-[1px] rounded px-2 py-1 w-4/5 mt-2 mb-2"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-xl text-grey-300 mb-0.5 mt-2">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="Detailed Description Of Task"
              cols={30}
              rows={10}
            ></textarea>

            <button className="bg-emerald-500 rounded-full px-2 py-1 mt-3 w-full text-sm">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
