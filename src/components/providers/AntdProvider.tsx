'use client';

import type { ThemeConfig } from 'antd';
import { ConfigProvider, theme } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import { useSwitchMode } from '@/contexts';

const { darkAlgorithm, defaultAlgorithm } = theme;

type Props = {
  children: ReactNode;
};

export default function AntdProvider({ children }: Props) {
  const { isDarkMode } = useSwitchMode();

  const themeConfig: ThemeConfig | undefined = {
    components: {
      Progress: {
        algorithm: true,
      },
      Table: {
        // headerBg: "rgb(22,119,255,0.8)",
      },
    },
    token: {
      wireframe: true,
      // colorPrimary: isDarkMode ? "#4A90E2" : "#1890FF", // สีหลัก (blue) สำหรับ Light และ Dark mode
      // colorBgBase: isDarkMode ? "#1F1F1F" : "#FFFFFF", // พื้นหลังหลัก
      // colorTextBase: isDarkMode ? "#FFFFFF" : "#000000", // สีตัวอักษร
      // colorBgContainer: isDarkMode ? "#141414" : "#FFFFFF", // สีพื้นหลัง container
      // borderRadius: 8, // กำหนดค่า border radius เดียวกันสำหรับทั้งสองโหมด
      // colorPrimary: '#ff0059',
    },
    algorithm:
      // isDarkMode === true
      // 	? [darkAlgorithm, compactAlgorithm]
      // 	: [defaultAlgorithm, compactAlgorithm],
      isDarkMode === true
        ? [darkAlgorithm] // Dark mode
        : [defaultAlgorithm], // Light mode
  };
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
