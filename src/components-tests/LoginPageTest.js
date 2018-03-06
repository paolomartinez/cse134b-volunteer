import React from "react";
import { mount } from "enzyme";
import LoginPage from "../components/LoginPage";

describe("LoginPage", () => {
  let props;
  let mountedLoginPage;
  const loginPage = () => {
    if (!mountedLoginPage) {
      mountedLoginPage = mount(
        <LoginPage {...props} />
      );
    }
    return mountedLoginPage;
  }

  beforeEach(() => {
    props = {
      registerMessage: undefined,
    };
    mountedLoginPage = undefined;
  });


  describe("when `registerMessage` is undefined", () => {
    beforeEach(() => {
      props.registerMessage = undefined;
    });

    it("does not render a `TopOverlay`", () => {
      expect(lockScreen().find(TopOverlay).length).toBe(0);
    });
  });
});