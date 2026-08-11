import * as migration_20260811_112707_initial from './20260811_112707_initial';

export const migrations = [
  {
    up: migration_20260811_112707_initial.up,
    down: migration_20260811_112707_initial.down,
    name: '20260811_112707_initial'
  },
];
