// These are the parameters which make up the current context / state of this app
// It's mainly needed to ensure that the Http Service is correctly set up

import { SxcInstance } from "./sxc-instance";

export class AppContext {
  moduleId: number;
  tabId: number;
  contentBlockId: number;
  antiForgeryToken: string;
  sxc: SxcInstance;
}
