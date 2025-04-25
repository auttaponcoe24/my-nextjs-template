'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // ปิดการ retry ถ้าไม่ต้องการให้มีการเรียกใหม่เมื่อเกิดข้อผิดพลาด
      refetchOnWindowFocus: false, // ปิดการ refetch เมื่อหน้าต่างกลับมาเป็น focus
      refetchOnReconnect: false, // ปิดการ refetch เมื่อ reconnect
      staleTime: 1000 * 60 * 5, // 5 นาที เพื่อ performance ที่ดีขึ้น (ลด refetch ถ้า data ยังใหม่)
    },
  },
});

export default function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
