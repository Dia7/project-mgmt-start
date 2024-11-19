import Sidebar from "./Sidebar";
import noProject from "../assets/no-projects.png"

export default function NoProjectSelected() {
  return (
    <div className="w-2/3">
      <img src={noProject} className="w-16 h-16 object-contain mx-auto"/>
      <h2>No Projets Selected</h2>
      <h4>Select Project or get started with new one</h4>
      <button>Create new project</button>
    </div>
  );
}
