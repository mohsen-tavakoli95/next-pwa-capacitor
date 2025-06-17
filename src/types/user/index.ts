export type UserType = {
  _id: string;
  email: string;
  phoneNumber: string;
  backupCodes: string[];
  status: string;
  favoriteDestinations: unknown[]; // or a more specific type if known
  createdAt: string;
  updatedAt: string;
  id: string;
};
