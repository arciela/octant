/*
*  Copyright (c) 2021 the Octant contributors. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*
*/
const ElectronStore = require('electron-store')

interface OctantStore {
  minimizeToTray: boolean;
  showDialogue: boolean;
  theme: string;
  navigation: {
    collapsed: boolean;
    labels: boolean;
  };
  development: {
    embedded: boolean;
    frontendUrl: string;
    verbose: boolean;
  };
  windowBounds: Electron.Rectangle;
}

const store = new ElectronStore
store.store = {
  minimizeToTray: true,
  showDialogue: true,
  theme: 'light',
  windowBounds: undefined,
  navigation: {
    collapsed: false,
    labels: true,
  },
  development: {
    embedded: true,
    frontendUrl: 'http://localhost:4200',
    verbose: false,
  },
}
export const electronStore = store

