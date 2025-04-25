'use client';

import type { ReactNode } from 'react';
import React from 'react';
import { IntlProvider } from 'react-intl';

import { useLanguage } from '@/contexts';
import en_US from '@/locales/en-US.json';
import th_TH from '@/locales/th-TH.json';

type Props = {
  children: ReactNode;
};

export default function IntlProviderWrapper({ children }: Props) {
  // กำหนดข้อความแปลภาษา
  const messages: Record<'th-TH' | 'en-US', Record<string, string>> = {
    'th-TH': th_TH as Record<string, string>, // ใช้ as เพื่อกำหนดประเภท
    'en-US': en_US as Record<string, string>, // ใช้ as เพื่อกำหนดประเภท
  };

  // ใช้ useLanguage เพื่อดึงค่าภาษา
  const { language } = useLanguage();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
}
