import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import File, { IFileProps } from '../components/File/File';

export default {
  title: 'Example/File',
  component: File,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IFileProps> = (args) => <File fileName={args.fileName} />;

export const Primary = Template.bind({});
Primary.args = {
  fileName: 'fileName',
};
