import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import clsx from 'clsx';
import React from 'react';

type Props = {
  chilren?: React.ReactNode;
  className?: string;
} & ButtonProps;

export default function ButtonComponent({ chilren, className, ...restProps }: Props) {
  return (
    <Button type="default" className={clsx(className)} {...restProps}>
      {chilren}
    </Button>
  );
}
