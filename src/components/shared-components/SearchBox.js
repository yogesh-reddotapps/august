import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 32,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);
const SearchBox = () => (
  <Space direction="vertical">
    
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    
  </Space>
);
export default SearchBox;