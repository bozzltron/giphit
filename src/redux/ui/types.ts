
interface ShowOriginalAction {
  type: string,
  id: string,
  query?: string
  offset?: number
}

interface QueryAction {
  type: string,
  query: string,
  id?: string
  offset?: number
}

interface OffsetAction {
  type: string,
  query?: string,
  id?: string,
  offset: number
}

export interface UIState {
  showOriginalId: string,
  query: string 
  offset: number
}

export type ActionTypes = ShowOriginalAction | QueryAction | OffsetAction