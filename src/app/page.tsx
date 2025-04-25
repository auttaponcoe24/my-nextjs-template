'use client';

import { useIntl } from 'react-intl';

export default function Home() {
  const { messages } = useIntl();
  return (
    <div className="text-3xl font-bold underline flex justify-center items-center h-screen w-screen">
      {messages['hello'] as string}, World
    </div>
  );
}
