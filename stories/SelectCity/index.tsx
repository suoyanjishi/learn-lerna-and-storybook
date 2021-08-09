import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import { TreeSelectProps } from 'antd/lib/tree-select';
// import { keyBy } from 'lodash'
import { getAllCitysNoEmpty } from './config';

const cities = getAllCitysNoEmpty();

interface Props extends TreeSelectProps<any> {}

export default (props: Props) => {
  const { showCheckedStrategy = 'SHOW_PARENT', treeData = cities } = props;

  const [value, setValue] = useState(undefined);
  const onChange = () => {
    console.log('fadsf', value);
    setValue(value);
  };
  return (
    <div id="popContainer">
      <TreeSelect
        treeCheckable
        treeData={treeData}
        showCheckedStrategy={showCheckedStrategy}
        placeholder="All"
        allowClear
        style={{ width: '100%' }}
        maxTagCount={2}
        dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
        getPopupContainer={() => document.getElementById('popContainer')}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
