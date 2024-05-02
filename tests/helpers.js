import { faker } from "@faker-js/faker";

export let baseURL = "https://thinking-tester-contact-list.herokuapp.com";

export async function addContact(page) {
  const email = faker.internet.email().toLowerCase();

  await page.goto(`${baseURL}/contactList`);
  await page.getByRole("button", { name: "Add a New Contact" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill(faker.person.firstName());
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill(faker.person.lastName());
  await page.getByPlaceholder("yyyy-MM-dd").click();
  await page.getByPlaceholder("yyyy-MM-dd").fill("2000-07-17");
  await page.getByPlaceholder("example@email.com").click();
  await page.getByPlaceholder("example@email.com").fill(email);
  await page.getByPlaceholder("8005551234").click();
  await page.getByPlaceholder("8005551234").fill("0661234567");
  await page.getByPlaceholder("Address 1").click();
  await page.getByPlaceholder("Address 1").fill(faker.location.street());
  await page.getByPlaceholder("Address 2").click();
  await page.getByPlaceholder("Address 2").fill(faker.location.street());
  await page.getByPlaceholder("City").click();
  await page.getByPlaceholder("City").fill(faker.location.city());
  await page.getByPlaceholder("State or Province").click();
  await page.getByPlaceholder("State or Province").fill("RS");
  await page.getByPlaceholder("Postal Code").click();
  await page.getByPlaceholder("Postal Code").fill(faker.location.zipCode());
  await page.getByPlaceholder("Country").click();
  await page.getByPlaceholder("Country").fill(faker.location.country());
  await page.getByRole("button", { name: "Submit" }).click();
  return email;
}

export async function signUp(page) {
  const email = faker.internet.email();

  await page.goto(baseURL);
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill(faker.person.firstName());
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill(faker.person.lastName());
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("sonja123");
  await page.getByRole("button", { name: "Submit" }).click();

  return email;
}
