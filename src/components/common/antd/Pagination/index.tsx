import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useIntl } from 'react-intl';

type Props = {
  current: number;
  total: number;
  className?: string;
} & PaginationProps;

export default function PaginationComponent({ current, total, className, ...restProps }: Props) {
  const { messages } = useIntl();
  return (
    <Pagination
      className={clsx(className)}
      current={current}
      total={total}
      showTotal={(total) =>
        `${messages['text.total'] as string} ${total} ${messages['text.items'] as string}`
      }
      showSizeChanger
      responsive
      {...restProps}
    />
  );
}
