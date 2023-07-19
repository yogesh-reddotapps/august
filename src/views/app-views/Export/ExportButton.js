import React from 'react'
import {ExportOutlined} from "@ant-design/icons";
import {Button } from "antd";
import { CSVLink } from "react-csv";
import {
    Account,
    Edit,
    Export,
    ExportIcon,
    FilterIcon,
    History,
    Verified,
  } from "assets/svg/icon";
  import Icon from "@ant-design/icons";
  
const ExportButton = ({data,passing}) => {
  return (
    <Button 
    disabled={data&&data.length===0 ?true:false}
    icon={<Icon component={ExportIcon} />}
    className="d-flex align-items-center ml-2">
      {data&&data.length!==0 && <CSVLink data={data} headers={passing} filename={"august-international.csv"} >

            Export
          
    </CSVLink>
  }
  </Button>
  )
}

export default ExportButton

