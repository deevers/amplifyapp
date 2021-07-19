import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserdataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Userdata {
  readonly id: string;
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly Email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Userdata, UserdataMetaData>);
  static copyOf(source: Userdata, mutator: (draft: MutableModel<Userdata, UserdataMetaData>) => MutableModel<Userdata, UserdataMetaData> | void): Userdata;
}