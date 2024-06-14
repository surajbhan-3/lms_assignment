# lms_assignment

This document provides an overview of the routes and controllers implemented in the project.

## Routes

### User Routes

#### `POST /register_user`

- **Description:** Registers a new user with the application.
- **Controller:** `registerUser` in `user.controllers.js`

#### `POST /login`

- **Description:** Logs in an existing user.
- **Controller:** `userLogin` in `user.controllers.js`

### Course Routes

#### `GET /get_all_courses`

- **Description:** Retrieves all courses available in the system.
- **Authorization:** Requires authentication (teacher role).
- **Controller:** `getAllCourses` in `course.controllers.js`

#### `GET /get_coursesbyid/:id`

- **Description:** Retrieves details of a specific course by its ID.
- **Authorization:** Requires authentication (teacher role).
- **Controller:** `getCourseById` in `course.controllers.js`

#### `POST /create_course`

- **Description:** Creates a new course.
- **Authorization:** Requires authentication (teacher role).
- **Controller:** `createCourse` in `course.controllers.js`

#### `PATCH /update_course/:id`

- **Description:** Updates an existing course by its ID.
- **Authorization:** Requires authentication (teacher role).
- **Controller:** `updateCourse` in `course.controllers.js`

#### `DELETE /delete_course/:id`

- **Description:** Deletes a course by its ID.
- **Authorization:** Requires authentication (teacher role).
- **Controller:** `deleteCourse` in `course.controllers.js`

### Progress Routes

#### `GET /get_progress/:courseId`

- **Description:** Retrieves progress details for a specific course.
- **Authorization:** Requires authentication.
- **Controller:** `getProgress` in `progress.controllers.js`

#### `POST /join_course/:courseId`

- **Description:** Allows a user to join a specific course.
- **Authorization:** Requires authentication.
- **Controller:** `joinCourse` in `progress.controllers.js`

#### `PATCH /update_progress/:courseId`

- **Description:** Updates progress for a specific course.
- **Authorization:** Requires authentication.
- **Controller:** `updateProgress` in `progress.controllers.js`

## Controllers

### `user.controllers.js`

- **`registerUser(req, res)`**
  - Handles user registration.
  - Validates input and creates a new user in the database.

- **`userLogin(req, res)`**
  - Handles user login.
  - Validates credentials and generates a JWT token for authenticated access.

### `course.controllers.js`

- **`getAllCourses(req, res)`**
  - Retrieves all courses from the database.
  - Handles pagination and filtering if necessary.

- **`getCourseById(req, res)`**
  - Retrieves details of a specific course by its ID.
  - Fetches course information including levels and progress.

- **`createCourse(req, res)`**
  - Creates a new course based on provided details.
  - Validates input and persists the course in the database.

- **`updateCourse(req, res)`**
  - Updates details of an existing course by its ID.
  - Validates input and modifies the course information accordingly.

- **`deleteCourse(req, res)`**
  - Deletes a course by its ID.
  - Removes the course and associated data from the database.

### `progress.controllers.js`

- **`getProgress(req, res)`**
  - Retrieves progress details for a specific course.
  - Fetches user-specific progress including current level and completion percentage.

- **`joinCourse(req, res)`**
  - Allows a user to join a specific course.
  - Associates the user with the course and initializes progress tracking.

- **`updateProgress(req, res)`**
  - Updates progress for a specific course.
  - Updates the current level and completion percentage based on user actions.

---

This structure provides a clear outline of your project's API routes, their descriptions, required authorizations, and the corresponding controllers responsible for handling each route. Adjust the descriptions and details as per your actual implementation.




#### Raw data

```
{
  
  "username":"suraj",
  "email":"suraj@gmail.com",
  "password":"12345",
  "role":"student"
}

{
  
  "email":"hello@gmail.com",
  "password":"12345"
}

courses
{
    "title": "Reactjs",
    "description": "This is a Reactjs course. In this course, we will learn in depth about the Reactjs library.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "Beginner Level",
            "description": "This is a beginner level Reactjs course. Here, we learn about the basics of Reactjs."
        },
        {
            "levelNumber": 2,
            "title": "Intermediate Level",
            "description": "This is an intermediate level course."
        },
        {
            "levelNumber": 3,
            "title": "Advanced Level",
            "description": "This is an advanced level course."
        }
    ]
}

{
    "title": "NodeJS",
    "description": "This course covers NodeJS, a runtime for executing JavaScript on the server side.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "Introduction to NodeJS",
            "description": "Learn the basics of NodeJS and setting up the environment."
        },
        {
            "levelNumber": 2,
            "title": "NodeJS Modules",
            "description": "Understand the module system in NodeJS."
        },
        {
            "levelNumber": 3,
            "title": "Building REST APIs",
            "description": "Learn to build RESTful APIs using NodeJS and Express."
        }
    ]
}

{
    "title": "Python Programming",
    "description": "An extensive course on Python programming for all levels.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "Python Basics",
            "description": "Introduction to Python and basic syntax."
        },
        {
            "levelNumber": 2,
            "title": "Data Structures in Python",
            "description": "Learn about lists, dictionaries, and other data structures in Python."
        },
        {
            "levelNumber": 3,
            "title": "Object-Oriented Programming",
            "description": "Dive into OOP concepts using Python."
        }
    ]
}

{
    "title": "Data Science with R",
    "description": "Learn data science concepts and techniques using the R programming language.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "Introduction to R",
            "description": "Get started with R programming and basic data manipulation."
        },
        {
            "levelNumber": 2,
            "title": "Data Visualization",
            "description": "Learn how to create insightful visualizations using ggplot2."
        },
        {
            "levelNumber": 3,
            "title": "Machine Learning with R",
            "description": "Implement machine learning algorithms using R."
        }
    ]
}

{
    "title": "Web Development with HTML & CSS",
    "description": "A complete guide to web development using HTML and CSS.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "HTML Basics",
            "description": "Learn the basics of HTML and building simple web pages."
        },
        {
            "levelNumber": 2,
            "title": "CSS Fundamentals",
            "description": "Understand the fundamentals of CSS and styling web pages."
        },
        {
            "levelNumber": 3,
            "title": "Responsive Design",
            "description": "Create responsive web designs that work on all devices."
        }
    ]
}

{
    "title": "SQL for Data Analysis",
    "description": "Learn how to use SQL for effective data analysis and manipulation.",
    "levels": [
        {
            "levelNumber": 1,
            "title": "SQL Basics",
            "description": "Introduction to SQL and basic query writing."
        },
        {
            "levelNumber": 2,
            "title": "Advanced SQL Queries",
            "description": "Learn to write complex SQL queries for data analysis."
        },
        {
            "levelNumber": 3,
            "title": "SQL for Data Warehousing",
            "description": "Understand the concepts of data warehousing and using SQL for it."
        }
    ]
}


```
