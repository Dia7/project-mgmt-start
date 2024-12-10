import { useState } from 'react';

import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectState, setProjectState] = useState( {
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });  
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...projectState.projects, newProject]
      }
    })

  }

  let content;

  if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject}
       projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
