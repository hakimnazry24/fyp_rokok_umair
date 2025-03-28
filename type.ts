export type RecordType = {
  id: string;
  manufacturedDate: Date | null;
  product: string;
  customerAge: number;
  retailer: string;
  ic: string | null,
  factory: string | null
  datePurchase: Date | null
  customerName : string | null
};

export type CigaretteType = {
  id: string;
  name: string;
  manufactured_date: Date;
  factory: string;
};
