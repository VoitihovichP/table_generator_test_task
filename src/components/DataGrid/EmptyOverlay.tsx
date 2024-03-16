import { FC } from 'react';

import styles from './DataGrid.module.scss';

export const EmptyOverlay: FC = () => {
  return (
    <div className={styles.emptyOverlay}>It&apos;s empty here for now :(</div>
  );
};
