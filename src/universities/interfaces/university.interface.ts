declare interface State {
  id: string;
  name: string;
}

declare interface City {
  id: string;
  name: string;
  State: State;
}

export interface University {
  id: string;
  name: string;
  City: City;
}
