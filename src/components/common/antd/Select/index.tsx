import type { SelectProps } from 'antd';
import { Select } from 'antd';
import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
} & SelectProps;

export default function SelectComponent({ className, ...restProps }: Props) {
  return <Select className={clsx(className)} {...restProps} />;
}
