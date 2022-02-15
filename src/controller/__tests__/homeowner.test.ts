import {
    createHomeOwner,
    deleteAllHomeOwners,
    findHomeOwner,
    loginHomeOwner,
  } from "../homeowner.controller";
  
  describe("home owner coontroller", () => {

    afterAll(async () => {
      await deleteAllHomeOwners();
    });
  
    afterEach(async () => {
      await deleteAllHomeOwners();
    });
  
    const homeOwnerPayload = {
      firstName: "Suleiman",
      lastName: "Mamman",
      address: "Lagos, Nigeria",
      mobile: "08130069255",
      isActive: true,
      password: "12345678abcd",
      email: "sulei@example.com",
    };
    
    describe("create home owner", () => {
        it("should create a new homeOwner", async () => {
          const homeOwner = await createHomeOwner(homeOwnerPayload);
  
          expect(homeOwner.firstName).toBe(homeOwnerPayload.firstName);
          expect(homeOwner.lastName).toBe(homeOwnerPayload.lastName);
          expect(homeOwner.email).toBe(homeOwnerPayload.email);
          expect(homeOwner.address).toBe(homeOwnerPayload.address);
          expect(homeOwner.mobile).toBe(homeOwnerPayload.mobile);
          expect(homeOwner.password).toHaveLength(60);
        });
    });
  
    describe("log home owner in", () => {
        it("should return true", async () => {
          const homeOwner = await createHomeOwner(homeOwnerPayload);
  
          const isValid = await loginHomeOwner({
            email: homeOwner.email,
            password: homeOwnerPayload.password,
          });
          expect(isValid).toBeTruthy();
      });
    });
    describe("invalid login deatils in", () => {
        it("should return false", async () => {
          const homeOwner = await createHomeOwner(homeOwnerPayload);
  
          const isValid = await loginHomeOwner({
            email: homeOwner.email,
            password: "fskhkhsdk!",
          });
          expect(isValid).toBeFalsy();
        });
    });
  
});