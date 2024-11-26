import Sidebar from "./Sidebar.jsx";
import noProject from "../assets/no-projects.png"
import Button from "./Button.jsx";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-400 my-4">No Projets Selected</h2>
      <h4 className="text-stone-400 mb-4">Select Project or get started with new one</h4>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
