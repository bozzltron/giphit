
interface ShowOriginalAction {
  type: string,
  id: string,
  query?: string
  offset?: number,
  useWebp?: boolean
}

interface QueryAction {
  type: string,
  query: string,
  id?: string
  offset?: number,
  useWebp?: boolean
}

interface OffsetAction {
  type: string,
  query?: string,
  id?: string,
  offset: number,
  useWebp?: boolean
}

interface UseWebpAction {
  type: string,
  query?: string,
  id?: string,
  offset?: number,
  useWebp: boolean
}

export interface UIState {
  showOriginalId: string,
  query: string 
  offset: number,
  useWebp: boolean
}

export type ActionTypes = ShowOriginalAction | QueryAction | OffsetAction | UseWebpAction