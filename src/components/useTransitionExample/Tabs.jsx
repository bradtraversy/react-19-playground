import { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('tab1');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div className='px-4'>
      <div className='flex space-x-4 mb-4'>
        <TabButton isActive={tab === 'tab1'} onClick={() => selectTab('tab1')}>
          Tab One
        </TabButton>
        <TabButton isActive={tab === 'tab2'} onClick={() => selectTab('tab2')}>
          Tab 2 (slow)
        </TabButton>
        <TabButton isActive={tab === 'tab3'} onClick={() => selectTab('tab3')}>
          Tab 3
        </TabButton>
      </div>
      <hr className='mb-4' />
      {tab === 'tab1' && <Tab1 />}
      {tab === 'tab2' && <Tab2 />}
      {tab === 'tab3' && <Tab3 />}
    </div>
  );
}

export { Tabs as UseTransitionExample };
