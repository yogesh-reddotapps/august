import { Button, Dropdown, Menu, Checkbox } from "antd";
import React, { useState } from "react";

const test = (
  <Menu mode="horizontal">
    {" "}
    {/* Set the mode to "horizontal" or "vertical" */}
    <Menu.SubMenu key="item1" title="Roles">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem1">
        <Checkbox>Crew</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Ops Manager</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="item2" title="Status">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Active</Checkbox>
      </Menu.Item>
      <Menu.Item key="subitem2">
        <Checkbox>Terminated</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="item3" title="Gender">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem1">
        <Checkbox>Male</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Female</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const Filter = (props) => {
  const [menu, setMenu] = useState(test);
  const corse_curri = (
    <Menu mode="horizontal">
      <Menu.Item key="subitem1">
        <>All</>
      </Menu.Item>
      <Menu.SubMenu key="item1" title="Category">
       
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem1">
          <Checkbox>Safety Course</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem2">
          <Checkbox>Language Course</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="item2" title="Medium">
        {" "}
        {/* Use SubMenu component with a key and title */}
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem2">
          <Checkbox>English</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Hindi</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Chinese</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Tamil</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Malay</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Thai</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  const curriculam_det = (
    <Menu>
      <Menu.Item key="subitem1">
        <>All</>
      </Menu.Item>
      <Menu.SubMenu key="item3" title="Gender">
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        <Menu.Item key="subitem1">
          <Checkbox>Male</Checkbox>
        </Menu.Item>{" "}
        <Menu.Item key="subitem2">
          <Checkbox>Female</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  if (props.type == "course_curriculam") {
    return (
      <Dropdown overlay={corse_curri} placement="bottomLeft">
        {props.children}
      </Dropdown>
    );
  }
  if (props.type == "curriculam_det") {
    return (
      <Dropdown overlay={curriculam_det} placement="bottomLeft">
        {props.children}
      </Dropdown>
    );
  }
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      {props.children}
    </Dropdown>
  );

  //   return (
  //     <Dropdown overlay={menu}>
  //       <a>Hover me</a>
  //     </Dropdown>
  //   );
};
export default Filter;
