import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-5">
        <Header data={JSON.parse(localStorage.getItem("admin"))[0]}/>
        <CreateTask/>
        <AllTask/>
    </div>
  );
};

export default AdminDashboard;
