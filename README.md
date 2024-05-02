## Contact List App Automation Tests

This repository contains:

- Playwright Automation tests for **Contact List App** that are also covered with previous manual testing
- Postman collection for API tests

## Test cases covered

This is a smoke test suite covering the most basic test cases:

- Contacts
   - Add new contact
   - Delete contact
   - Edit contact details
   - View contact details
- Log In
   - Log in with valid credentials
- Log Out
   - Log out of a newly created account
- Sign Up
   - Sign up for a new account


## Setup instructions for Playwright

In order to run the tests written for Contact List App, follow these steps:

1. Clone this repository
2. Run the following command in the root directory of the project:
   ```bash
   npm install
   ```
3. After that, you can run the test suite with the following command:

   ```bash
   npx playwright tests/* --ui --workers=1
   ```

   Note:  This runs tests in serial mode because I noticed the app sometimes timeouts under heavy load. You can also comit the `--workers=1` parameter to run tests in parallel mode.

3. Click on the play button at the top to run all tests, or run individual tests.

**Notes:**

- The project is configured to run authentication setup before each test, because most test cases require authentication. Authentication was manually removed from a few tests that do not need it.
- Faker library is used to generate random user and contact data for tests
- All test cases are organized by folders in the `tests` folder

## Setup instructions for Postman

1. Import the collection file from the `postman` directory
2. From the collection context menu, choose Run collection
3. Click "Run Contact List Tests" 

**Important**: The folders and requests in the collection must remain in the given order because they represent a continuous user flow.




