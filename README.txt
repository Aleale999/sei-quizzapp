SEI QUIZ APP

This team project was developed with the idea of helping other software engineering students with settling arguments they weren't sure of for each subject taught during this course.

The link: link

The code is divided in two: the server side which is inside the main project folder and the client side which is in a folder inside the main project folder. This was done to make it easier to work with, navigate through and also to deploy after. In both the server side and the client side you will find the specific folders for each component.


Team:
For this project we were given a week to find an idea, plan it, get the green light from the instructors and then realize all the code necessary to make it work. In the team we had: 
-Joana: https://github.com/joanaBrit
-Nathalie: https://github.com/NLie2


Technologies used:
The Front End’s technologies used were mostly React (and of course JSX), meanwhile for the Back End we used node.


Planning:
In this project we had to show our skills in both the front end and back end, we needed to show how we would navigate around node and react and also this was a good learning experience to work in teams, to show how we would organize and plan the whole project with other members. 
During planning we came up with an idea of how the site was going to look, with each different screen and with already some routes in mind. 

And through this planning we could divide each assignment and split it between each other, taking into consideration each person’s plans outside of this and what was coming up. With this in mind we chose to give each one of us a page to build fully, so to make the back end for that part of the site, merge it with the team’s work and then build the front end part too (both the page’s logic and the styling). And with this we also took into consideration the strength of each one of us, so if we were stuck on something we knew who to ask more specifically. After all this we agreed for:
-Joana would focus mostly on login, register, landing page and given her awesome skills in styling she would also help us with CSS and to also give a general idea on how the site should look like, with also colours to pick (to follow the same style throughout every page and not have a disharmonious look)
(these are some ideas she had for the styling).

-Nathalie would focus mostly on node (so backend) to give us the models of the quiz, questions and users to follow, the base seeding data for the first deployment, a deleting function and also the page to create questions and allow the user to post them on the page. And given her previous experience in the field she would also help with problems with node and git commands;
-I was given the task of making the page for the quiz and displaying all the questions for each topic and to create a separate page to edit questions, and also the navigation bar. Also I was mostly troubleshooting merging problems and also helped with some Node and git as well.


My contributions:
For this project I started working first on the server side, both because I was fresh out of node classes since it was the latest argument we did in class, and because it was going to be easier to test everything after implementing react. Once I was sure about the server side I could focus only on the client side and not touch the back end anymore. On the server side there is not much to say, first I got the controller to get the data of each single quiz on the user’s request, then after this was done I passed on the Front End, which was also the biggest challenge for the way we envisioned this. Our idea was to create flash cards, so that once you got to the quiz page there would be a list of questions on the subject chosen, and on the click of the question it would reveal an answer. For the flash cards I simply used 2 different classes (one to show the front and one to show the back) and also 2 different divs, one to show the question and the other for the answer, and with an onClick event these classes would switch thanks to a ternary:
<div id={i} onClick={handleClick} className={reveal[i] ? 'flip-card-back' : 'flip-card-front'}>
                  <h5><div id={i} className='wrap-text' onClick={handleClick}>{question}</div></h5>
                </div>
                <div id={i} onClick={handleClick} className={!reveal[i] ? 'flip-card-back' : 'flip-card-front'}>
                  <h5><div id={i} className='wrap-text' onClick={handleClick}>{correctAnswers[i]}</div></h5>
                </div>

We also decided to add a button that switches views, between showing the whole list of questions and only showing one at a time, and for this I created 2 different files and passed a variable through both and the App, and if said variable was true it would display one otherwise the other.
Another 2 features we added were the “edit question” and “delete question” buttons, and I made them so that they only appear if the logged user is the person who created the question they want to delete, otherwise the buttons don't appear.

Challenges:
A challenge I came across that I was not able to solve myself was the editing questions. Basically what I did while developing was type the link that was supposed to be the question i needed to edit, and then from that page try and see the errors that would popup. In my code everything was working as expected, it would hit the secure route to make the changes but failed every time. I had to ask Nathalie why it wasn't working as expected, and she fixed it by actually linking any part from the question list to that page. 


Achievements:
A great achievement was actually learning to work with a team, we kept messaging and kept in touch throughout the whole project and also meeting in zoom to check our progress and if we needed help in certain parts. This was definitely a great learning experience, and really fun too. I enjoyed the challenge, we definitely would have had less errors with a bit better time management but overall it was great.
In the code, I feel like a great win was actually making both of the views work properly and making every function work in each separate view. Also it took me a long time to make the popup work as wanted, mostly because there were merging issues with the controller made by Nathalie. But I am glad this works properly and that when there is an empty question list it changes view:
<div className={popup ? 'popup' : 'hidden'}>
        <div className={popup ? 'popup_inner' : 'hidden'}>
          <h1 className={popup ? 'h1' : 'hidden'}>Are you sure you want to delete the question?</h1>
          <div className='btn-container'>
            <Button className={popup ? 'btn btn-sm btn-block' : 'hidden'} onClick={clickedYes}>Yes</Button>
            <Button className={popup ? 'btn btn-sm btn-block' : 'hidden'} onClick={clickedNo}>No</Button>
          </div>
        </div>
      </div>


Key learnings:
I am definitely getting better with node, feeling more confident with it. With React I keep learning new things and I am certainly getting more comfortable using bootstrap.



Known bugs:
-The nav bar doesn't update properly when logging out, so you can logout and then go back to the quiz list;
-The function that saves which flip card you pressed does not reset when switching list, so if you navigate from one list to the other;


Future improvements:
-Spinner while loading;
-A “not found” page;
-Checker for double questions;
-Upvotes/downvotes for questions;
