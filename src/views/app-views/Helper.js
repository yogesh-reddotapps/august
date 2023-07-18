import { Table } from 'antd'
import React, { useState } from 'react'
import './Helper.css'

function Helper({ attribiue, clients }) {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // console.log(clients)

    return (
        <div>

            <Table
                rowKey='id'
                rowSelection={{
                    selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows) => {
                        setSelectedRowKeys(selectedRowKeys);
                    }
                }} columns={attribiue} dataSource={clients} />
        </div>
    )
}

export const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export default Helper;

