# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A hash is a block of code that is specific to a class that lists all the objects and its setters and getters. 

Researched answer: A Ruby hash is where key:value pairs are stored, created, edited and deleted. For example, having a hash for a class Dog with the name, breed and age would look like this "my_dog = { breed: "Shiba Inu", name: "Doobie", age: 9 }. Methods can be utilized on enumerables in hashes in order to iterate over the key:value pairs.

2. What is a gem?

Your answer: A gem is a package node modules built by other developers to run when testing Ruby.

Researched answer: A gem is a collection of code(s) functionality. Gems contain Ruby code that has been created and vetted by other developers which allow any developer to use a specific gem for it's intended purpose. For example, if I wanted to do test-driven-development on Ruby code, I would have to install the RSpec gem in order to run those tests. 

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a framework with a built in database that can be used for either a website or an application build. 

Researched answer: Ruby on Rails is a server side framework that is written in Ruby. Ruby on Rails allows the developer to build full stack web applications using the built ins for web pages/ services and a database. The MVC pattern, model-view-controller, is the layout of Ruby on Rails. Model is the database segment; view is what the user will be seeing and experiencing and controller is the go between with the model (database) and the view (user) making sure the correct data shows up and does what it is programmed to do. 

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is where the entries in the database are recallable. There are other databases.

Researched answer: A relational database is organized in a collection of tables. These tables have columns and rows. All of these tables have information that is realted to one another. For example, the humane society has a database of all of their current and former pets organized into Years (class). One table will have current pets with colums of the breed, the age, and adopted/pending/available (to adopt). Once an animal is adopted, the status instance of that particular animal changes to "adopted". All of the current year's adopted only animals can be viewed in another table. Another table could have just one breed with all of the supporting information for each animal. The tables are all related to one another through one or more connecting pieces of information. There are non-relational databases which utilizes specific requirements of the data type as storage and organization criteria.

5. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers used in a database. They are important because specific information can be recalled easily and without confusion when using a unique identifier. For example, if I was making a database of two students. My database has 3 columns, "student number", "first name", and "last name". For the first entry, the first name of the first student is "Scott", last name "Parker". A unique identifier "001" under student number is made. The second entry is first name "Scott" and last name "Parker". However the student number is "002". Using the student number to reference "Scott Parker" can bring up additional details. 

Researched answer: A primary key is a guaranteed unique identifier in each row. This unique ID prevents confusion if there are duplicate entries in other instances of the Class. For example, a unique ID would be used to tell the difference between two entries with the same first and/ or last name. For example, if I was making a database of two students. My database has 3 columns, "student number", "first name", and "last name". For the first entry, the first name of the first student is "Scott", last name "Parker". A unique identifier "001" under student number is made. The second entry is first name "Scott" and last name "Parker". However the student number is "002". Using the student number to reference "Scott Parker" can bring up additional details.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer which is a route structuring pattern between the server and client. RESTful routes allow CRUD to take place on all the objects and structures to make them synonymous with one another.

2. JSON: JavaScript Object Notation - data structure modeled after JavaScript but is supported by most languages.

3. ERB: erb is embedded Ruby which is a file structure that allows the code to be written in HTML and Ruby in the view file.

4. Params: With params (parameters), more information can go into the prgram by passing a value in the controller.

5. API: API stands for Application Programming Interface which transmits data in the form of JSON (JavaScript Object Notation)
