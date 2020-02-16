export type LoggerInitialState = {
  prevEventName: string;
  prevLastUpdate: number;
  eventName: string;
  lastUpdate: number;
};

export const loggerInitialState: LoggerInitialState = {
  prevEventName: '',
  prevLastUpdate: 0,
  eventName: 'INITIAL EVENT',
  lastUpdate: Date.now()
};
