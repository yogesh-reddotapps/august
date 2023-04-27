import React, { useState } from "react";
import { Select, Input, InputNumber, Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { List } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DraggableIcon, DraggableItemDelIcon } from "assets/svg/icon";
const AddNewLesson = () => {
  const history = useHistory();
  const items = [
    { id: "1", content: "" }
  ];
  const [listItems, setListItems] = useState(items);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    // Update the order of items in the listItems state
    const updatedListItems = [...listItems];
    const [removed] = updatedListItems.splice(sourceIndex, 1);
    updatedListItems.splice(destinationIndex, 0, removed);
    setListItems(updatedListItems);
  };

  const addMoreChap = () => {
    setListItems([
      ...listItems,
      { id: 1 + listItems.length.toString(), content: "" },
    ]);
  };

  const deleteChap = (index) => {
    let updateList = listItems.filter((elem,i)=>{
        return index != i
    })
    setListItems(updateList)
  }

  const chapterInput = (val, index) => {
    const updatedListItems = [...listItems];
    updatedListItems[index] = { ...updatedListItems[index], content: val };
    setListItems(updatedListItems);
    console.log(updatedListItems);
  };
  return (
    <>
      <div className="border rounded p-3 mb-4 bg-white">
        <h5 className="text-info mb-4">Add New Subject</h5>
        <div className="mt-4 w-50">
          <h5>Subject</h5>
          <Input placeholder="Subject Name" />
        </div>
        <div className="mt-4">
          <h5>Course Name</h5>
          <Input className="w-50" placeholder="Course Name" />
        </div>
        <div className="mt-4">
          <h5>Chapters</h5>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <ul
                  className="list-style-none"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {listItems.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Input
                            className="my-2 mr-2 w-50"
                            placeholder="Chapter Name"
                            value={item.content}
                            onChange={(e) =>
                              chapterInput(e.target.value, index)
                            }
                          />
                          <DraggableIcon />
                          <Button onClick={()=>deleteChap(index)} className="p-0 ml-2">
                            <DraggableItemDelIcon twoToneColor={"#ED2939"} />
                          </Button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <h5
          style={{ display: "inline" }}
          className="text-info mt-3"
          onClick={addMoreChap}
        >
          + Add New Chapter
        </h5>
      </div>
      <div className="d-flex mt-3 justify-content-end">
        <Button>Cancel</Button>
        <Button
          className="text-white bg-info ml-3"
          onClick={() => history.push("/app/masters/courses/subjects/?add=subject")}
        >
          {" "}
          Save{" "}
        </Button>
      </div>
    </>
  );
};

export default AddNewLesson;
