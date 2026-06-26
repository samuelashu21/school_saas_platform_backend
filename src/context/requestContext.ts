import { AsyncLocalStorage } from "async_hooks";

export type RequestContextType = {
  userId: string;
  role: string;
  schoolId: string | null;
};
 
const storage = new AsyncLocalStorage<RequestContextType>();

export const RequestContext = {
  run: (ctx: RequestContextType, fn: () => void) => {
    storage.run(ctx, fn);
  },

  get: () => storage.getStore()
};