import { useRef } from "react";
import Modal from "./Modal.jsx";
import Input from "./Input.jsx";

export default function NewProject({onAdd}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();
  
  function handleSave () {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  

  return (
  <>
    <Modal ref={modal} buttonCaption="Close">
      <h1 className="text-xl font-bold text-stone-700 my-4">Please fill in all fields</h1>
      <p className="text-stone-600 mb-4">Oops.. looks like you forgot to fill a field!</p>
      <p className="text-stone-600 mb-4">Please fill valid data in all fields!</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
      </li>
      <li>
        <button 
        onClick={handleSave}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </li>
    </menu>
    <div>
     <Input type="text" ref={title} label="Title"/>
     <Input ref={description} label="Description" textarea />
     <Input type="date" ref={dueDate} label="Due Date"/>
    </div>
  </div>;
  </>
  )
}
 