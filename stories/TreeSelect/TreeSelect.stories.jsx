import React from "react";

import { Template as TreeSelect } from "./TreeSelect";

export default {
  title: "Example/TreeSelect",
  component: TreeSelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TreeSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "large",
};
