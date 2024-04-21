'use client';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useEffect, useState } from 'react';

const widgetConfig: WidgetConfig = {
  variant: "expandable",
  subvariant: "split",
  appearance: "light",
  containerStyle:{
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
  },
  integrator: "github.com/alimazhar4",
};

export function Widget() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main>
      {mounted && (
        <LiFiWidget
        config={widgetConfig}
        integrator="github.com/alimazhar4"
        />
      )}
    </main>
  );
}