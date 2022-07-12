export interface Mobile {
  status: boolean;
  data:   Data;
}

export interface Data {
  title:  string;
  phones: Phone[];
}

export interface Phone {
  phone_name: string;
  slug:       string;
  favorites:  number;
  detail:     string;
}

