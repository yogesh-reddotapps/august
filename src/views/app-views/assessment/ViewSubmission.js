import { Radio, Space } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./assessment.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";

function Submission() {
  const [question, setQuestion] = useState([
    {
      question:
        "1. What is the leading cause of construction workh5lace fatalities?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      value:null,
    },
    {
      question:
        "1. What is the leading cause of construction workh5lace fatalities?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      value: null,
    },
  ]);
  const onChange = (ind, e) => {
    const updatedQuestions = [...question];
    updatedQuestions[ind] = {
      ...updatedQuestions[ind],
      value: e.target.value,
    };
    setQuestion(updatedQuestions);
  };
  

  return (
    <div>
      <div className="border rounded p-3 mb-4 bg-white">
        <div>
          <table>
            <tbody>
              <tr>
                <th
                  className="p-2"
                  style={{ width: "400px", textAlign: "left" }}
                >
                  Course
                </th>
                <th
                  className="p-2"
                  style={{ width: "200px", textAlign: "left" }}
                >
                  Assesment
                </th>
                <th
                  className="p-2"
                  style={{ width: "200px", textAlign: "left" }}
                >
                  Student
                </th>
                <th
                  className="p-2"
                  style={{ width: "200px", textAlign: "left" }}
                >
                  Submitted On
                </th>
                <th
                  className="p-2"
                  style={{ width: "200px", textAlign: "left" }}
                >
                  Result
                </th>
              </tr>
              <tr>
                <td className="p-2">
                  Workplace Safety and Health in Construction Sites
                </td>
                <td className="p-2">Assesment 1</td>
                <td className="p-2">John Smith</td>
                <td className="p-2">16/Jan/2023</td>
                <td className="p-2">12/25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {question.map((elem, ind) => {
        return (
          <div className="border rounded mb-4 bg-white">
            <div
              className="p-3"
              style={{
                background: "#add8e636",
                borderTopLeftRadius: "0.625rem",
                borderTopRightRadius: "0.625rem",
              }}
            >
              <h4 style={{ color: "#6292FC" }}>Question 1/25</h4>
              <h5 style={{ margin: 0 }}>Mark : 1</h5>
            </div>
            <div className="p-3">
              <h5>{elem.question}</h5>
            </div>
            <div className="px-4 pb-3">
              <Radio.Group onChange={(e)=>onChange(ind,e)} value={elem.value}>
                <Space direction="vertical">
                  {elem.options.map((eleme, i) => {
                    return (
                    <Radio className="p-2" value={eleme}>
                      {eleme}
                    </Radio>
                    )
                  })}
                </Space>
              </Radio.Group>
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Submission;
