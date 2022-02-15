import {
    createHomeOwner
  } from "../homeowner.controller";
  
  describe("home owner coontroller", () => {
    // afterAll(async () => {
    //   await deleteAllHomeOwners();
    // });
  
    // afterEach(async () => {
    //   await deleteAllHomeOwners();
    // });
  
    const homeOwnerPayload = {
      firstName: "Suleiman",
      lastName: "Mamman",
      address: "Lagos, Nigeria",
      mobile: "08130069255",
      isActive: true,
      password: "aPassword123",
      email: "sulei@example.com",
    };
    
    describe("math tests", () => {

        it("1 + 1 = 2", () => {
          expect(1 + 1).toBe(2);
        });
      
        // it("-1 * -1 !== -1", () => {
        //   expect(-1 * -1).not.toBe(-1);
        // });
      
      });
  
    // describe("create home owner", () => {
    //   describe("given the input is valid", () => {
    //     it("should create a new homeOwner", async () => {
    //       const homeOwner = await createHomeOwner(homeOwnerPayload);
  
    //       expect(homeOwner.password).toHaveLength(60);
  
    //       expect(homeOwner.firstName).toBe(homeOwnerPayload.firstName);
  
    //       expect(homeOwner.lastName).toBe(homeOwnerPayload.lastName);
  
    //       expect(homeOwner.email).toBe(homeOwnerPayload.email);
    //     });
    //   });
    // });
  
    // describe("log home owner in", () => {
    //   describe("given the password is correct", () => {
    //     it("should return true", async () => {
    //       const homeOwner = await createHomeOwner(homeOwnerPayload);
  
    //       const isValid = await loginHomeOwner({
    //         email: homeOwner.email,
    //         password: homeOwnerPayload.password,
    //       });
    //       expect(isValid).toBeTruthy();
    //     });
    //   });
  
    //   describe("given the password is wrong", () => {
    //     it("should return false", async () => {
    //       const homeOwner = await createHomeOwner(homeOwnerPayload);
  
    //       const isValid = await loginHomeOwner({
    //         email: homeOwner.email,
    //         password: "wrong!",
    //       });
    //       expect(isValid).toBeFalsy();
    //     });
    //   });
    // });
  
    // describe("virtual property", () => {
    //   it("should return the homeOwner full name", async () => {
    //     await createHomeOwner(homeOwnerPayload);
  
    //     const homeOwner = await findHomeOwner(
    //       { email: homeOwnerPayload.email }
    //     );
  
    //     expect(homeOwner?.fullName).toBe(
    //       `${homeOwnerPayload.firstName} ${homeOwnerPayload.lastName}`
    //     );
    //   });
    // });
  });