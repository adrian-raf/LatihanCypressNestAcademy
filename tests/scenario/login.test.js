import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";

describe("Login Test", () => {
  beforeEach(() => {
    //hooks code
    route.visit(ROUTES.login);
  });

  it("Ensure the error message is displayed when user entered invalid login data", () => {
    //test case code in here
    element.fillField(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
    element.fillField(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
    element.click(loginPage.loginButton);
    assert.shouldContainText(
      loginPage.errorMessage,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Ensure direct to inventory page when user entered valid login data", () => {
    //test case code in here
    element.fillField(loginPage.usernameField, login.VALID_LOGIN_DATA.username);
    element.fillField(loginPage.passwordField, login.VALID_LOGIN_DATA.password);
    element.click(loginPage.loginButton);
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.get(".header_secondary_container").should("be.visible");
  });
});
