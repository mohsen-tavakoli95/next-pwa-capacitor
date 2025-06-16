export type fetcherFunctionType = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<T>;
