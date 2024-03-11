import { FC } from 'react';
import { useAppSelector } from 'Hooks/redux.ts';

import styles from './TablesScreen.module.scss';

import { Form } from '@/src/Screens/TablesScreen/components/Form/Form.tsx';
import { UserInfoGrid } from '@/src/Screens/TablesScreen/components/UserInfoGrid/UserInfoGrid.tsx';

export const TablesScreen: FC = () => {
  const { tables } = useAppSelector((state) => state.tables);
  // const rows: GridRowsProp = [
  //   { id: 1, name: 'Hello', surname: 'World' },
  //   { id: 2, name: 'DataGridPro', surname: 'is Awesome' },
  //   { id: 3, name: 'MUI', surname: 'is Amazing' },
  // ];

  return (
    <div>
      <Form />
      <div className={styles.tablesScreen__wrapper}>
        {tables.map((item, index) => (
          <UserInfoGrid
            tableId={item.id}
            key={item.id}
            isFirstTable={index === 0}
            rows={item.rows}
          />
        ))}
      </div>
    </div>
  );
};
