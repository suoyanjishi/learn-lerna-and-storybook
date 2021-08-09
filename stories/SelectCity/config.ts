import { isArray, isPlainObject } from 'lodash';

// eslint-disable-next-line
const json = require('./cities');
const State = 'DKI JAKARTA';

export const All = 'All';

export default () => {
  const res = {
    ...json[State],
  };
  return [
    {
      key: All,
      title: All,
      children: Object.keys(res).map(key => {
        return {
          key,
          title: key,
        };
      }),
    },
  ];
};

function getTreeData(tree: any, parentKey: string): any {
  if (isArray(tree)) {
    return tree.map((key: string) => {
      const value = parentKey ? `${parentKey}/${key}` : key;
      return {
        key: value,
        title: key,
        value,
      };
    });
  }

  if (isPlainObject(tree)) {
    return Object.keys(tree).map((key: string) => {
      const value = parentKey ? `${parentKey}/${key}` : key;
      return {
        key: value,
        title: key,
        value,
        children: getTreeData(tree[key], value),
      };
    });
  }

  return [];
}

export function getAllDistricts(treeData = json) {
  return [
    {
      key: All,
      title: All,
      children: [{ key: '-1/-1/-1', title: 'EMPTY', children: [] }, ...getTreeData(treeData, '')],
    },
  ];
}

function getCityData(tree: any, parentKey: string): any {
  if (isPlainObject(tree)) {
    return Object.keys(tree).map((key: string) => {
      const value = parentKey ? `${parentKey}/${key}` : key;
      return {
        key: value,
        title: key,
        value,
        children: getCityData(tree[key], value),
      };
    });
  }

  return [];
}

export function getAllCitys(treeData = json) {
  return [
    {
      key: All,
      title: All,
      children: [{ key: '-1/-1/-1', title: 'EMPTY', children: [] }, ...getCityData(treeData, '')],
    },
  ];
}

export function getAllCitysNoEmpty(treeData = json) {
  return [
    {
      key: All,
      title: All,
      children: [...getCityData(treeData, '')],
    },
  ];
}
