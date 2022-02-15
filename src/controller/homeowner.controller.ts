import { FilterQuery, DocumentDefinition } from "mongoose";
import HomeownerModel, { HomeownerDocument, HomeownerInput } from "../models/homeowner.model";

export async function createHomeOwner(input: DocumentDefinition<HomeownerInput>) {
  return HomeownerModel.create<HomeownerInput>(input);
}

export async function findHomeOwner(query: FilterQuery<HomeownerDocument>
) {
  return HomeownerModel.findOne(query, null);
}

export async function loginHomeOwner({
  email,
  password,
}: {
  email: HomeownerDocument["email"];
  password: HomeownerDocument["password"];
}) {
  const homeOwner = await findHomeOwner({ email });

  if (!homeOwner) {
    throw new Error("Home Owner does not exist");
  }

  return homeOwner.comparePassword(password);
}

export async function deleteAllHomeOwners() {
  return HomeownerModel.deleteMany({});
}