export interface CtfEvent {
  id: any
  slug: string
  name: string
  description?: string
  state: CtfEventState
  begin: Date
  end?: Date
  banner?: string
  created: Date
}

export enum CtfEventState {
  active = 'active',
  past = 'past',
  upcoming = 'upcoming',
}

export interface CtfEventTimeRemaining {
  days?: string
  hours?: string
  minutes?: string
  seconds?: string
}
