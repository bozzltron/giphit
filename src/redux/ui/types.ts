
interface ShowOriginalAction {
  type: string,
  id: string,
}

export interface UIState {
  showOriginalId: string,
}

export type ActionTypes = ShowOriginalAction