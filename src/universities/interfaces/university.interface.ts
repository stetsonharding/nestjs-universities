declare interface state {
  id: number;
  name: string;
}

declare interface city {
  id: number;
  name: string;
  state: state;
}

export interface University {
  id: number;
  name: string;
  city: city;
}
