export type CommonInitialState = {
  lastUpdate: number;
  light: boolean;
  count: number;
};

export const commonInitialState: CommonInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
