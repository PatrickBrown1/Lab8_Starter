# Lab 8 - Starter
Contributors: Patrick Brown

1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

I would include automated tests during all three of these steps, but the most important would be 1, then 2, then 3. Running the tests in a Github action after code is pushed is the most important because it blocks incorrect code from getting pushed into the repo. The second most important would be to have them manually run locally because then developers can make sure their code works locally before committing. Then, the least important is to run them aafter all development is complete as one last sanity check before deployment, but ultimately the code should be correct before this stage.

2) No, we would use unit testing for this.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No because a messaging feature would include a lot of moving parts including writing, sending receiving, reading, network connections etc, so it would be too complicated to test with unit tests.


4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, this would be good for a unit test because it is a simple test that we can do without using the browser and won't affect other tests.
