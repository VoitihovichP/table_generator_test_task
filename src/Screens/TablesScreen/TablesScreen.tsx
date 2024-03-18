import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'Hooks/redux.ts';
import { SubmitHandler } from 'react-hook-form';
import { ITableRowData } from 'Models/table.model.ts';
import { generateUniqueId } from 'Utils/generateUniqueId.ts';
import cn from 'classnames';

import styles from './TablesScreen.module.scss';

import { Form } from '@/src/Screens/TablesScreen/components/Form/Form.tsx';
import { UserInfoGrid } from '@/src/Screens/TablesScreen/components/UserInfoGrid/UserInfoGrid.tsx';
import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';

export const TablesScreen: FC = () => {
  const [formValues, setFormValues] = useState<ITableRowData | null>(null);

  const { tables } = useAppSelector((state) => state.tables);

  const dispatch = useAppDispatch();

  const { addRow } = tablesSlice.actions;

  const handleAddRow: SubmitHandler<ITableRowData> = (row): void => {
    const newRow = {
      id: generateUniqueId(),
      ...row,
    };

    dispatch(addRow(newRow));
    setFormValues(null);
  };

  return (
    <section className={styles.tablesScreen}>
      <div className={cn('container', styles.tablesScreen__container)}>
        <div className={styles.tablesScreen__forms}>
          <Form
            formStyle="vertical"
            mode="create"
            onSubmit={handleAddRow}
            initialFormValues={formValues}
            setFormValues={setFormValues}
          />
          <Form
            formStyle="horizontal"
            mode="create"
            onSubmit={handleAddRow}
            initialFormValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
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
    </section>
  );
};
