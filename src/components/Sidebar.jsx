import Button from "./Button.jsx";

export default function Sidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className=" px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add new project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
