const courses = [
  {
    "id": "1",
    "title": 'React Complete Guide',
    "title_desc":'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    "instructors_name": "Maximilian Schwarzmuller",
    "rating": "4.6",
    "student_rated": "87,575",
    "current_price": 10.99,
    "previous_price": 104.99,
    "currency":"USD",
    "student_enrolled": "293,611" ,
    "badge": "Bestseller",
     "img":'https://i.ibb.co/nb6jtdn/01.jpg'
},
{
    "id": "2",
    "title": 'Modern React with Redux',
    "title_desc":'Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!',
    "instructors_name": "Stephen Grider",
    "rating": "4.6",
    "student_rated": "59,657",
    "current_price": 11.99,
    "previous_price": 114.99,
    "currency":"USD",
    "student_enrolled": "198,814",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/Mgp0bPm/02.jpg'
},

{
    "id": "3",
    "title": 'Complete React Native',
    "title_desc":'Understand React Native v0.62.2 with Hooks, Context, and React Navigation.',
    "instructors_name": "Stephen Grider",
    "rating": "4.5",
    "student_rated": "33,575",
    "current_price": 9.99,
    "previous_price": 94.99,
    "currency":"USD",
    "student_enrolled": "127,818",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/VNHFDJv/03.jpg'
},

{
    "id": "4",
    "title": 'JavaScript Weird Parts',
    "title_desc":'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
    "instructors_name": "Anthony Alicea",
    "rating": "4.7",
    "student_rated": "38,741",
    "current_price": 10.99,
    "previous_price": 109.99,
    "currency":"USD",
    "student_enrolled": "150,538",
    "badge": "Highest Rated",
     "img":'https://i.ibb.co/ypvBpZX/04.jpg'
},

{
    "id": "5",
    "title": 'Modern JavaScript',
    "title_desc":'Learn and build projects with pure JavaScript (No frameworks or libraries)',
    "instructors_name": "Brad Traversy",
    "rating": "4.7",
    "student_rated": "20,585",
    "current_price": 9.99,
    "previous_price": 99.99,
    "currency":"USD",
    "student_enrolled": "67,633",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/KXCPb7B/05.jpg'
},

{
    "id": "6",
    "title": 'Python & Django Bootcamp',
    "title_desc":'Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!',
    "instructors_name": "Jose Portilla",
    "rating": "4.5",
    "student_rated": "32,749",
    "current_price": 9.99,
    "previous_price": 99.99,
    "currency":"USD",
    "student_enrolled": "127,339",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/gb1HKKR/06.jpg'
},


{
    "id": "7",
    "title": 'Learn AngularJS',
    "title_desc":'Master AngularJS and the Javascript concepts behind it, design custom directives, and build a single page application.',
    "instructors_name": "Anthony Alicea",
    "rating": "4.5",
    "student_rated": "18,954",
    "current_price": 10.99,
    "previous_price": 109.99,
    "currency":"USD",
    "student_enrolled": "84,652" ,
    "badge": "Bestseller",
     "img":'https://i.ibb.co/D8V2B9f/07.jpg'
},
{
    "id": "8",
    "title": 'JavaScript For Beginners',
    "title_desc":'Learn The JavaScript Programming Language Completely From Zero to Hero Without Frameworks',
    "instructors_name": "Learn Programming",
    "rating": "4.6",
    "student_rated": "16",
    "current_price": 11.99,
    "previous_price": 114.99,
    "currency":"USD",
    "student_enrolled": "6,799",
    "badge": "Hot&New",
     "img":'https://i.ibb.co/nMzFLJt/08.jpg'
},

{
    "id": "9",
    "title": 'Learn JavaScript: Full-Stack',
    "title_desc":'Understand the JavaScript language itself, Node.js, MongoDB, The Web Browser and More To Create Meaningful Applications',
    "instructors_name": "Stephen Grider",
    "rating": "4.5",
    "student_rated": "2,644",
    "current_price": 10.99,
    "previous_price": 104.99,
    "currency":"USD",
    "student_enrolled": "10,427",
    "badge": "New",
     "img":'https://i.ibb.co/PMwPLTr/09.jpg'
},

{
    "id": "10",
    "title": 'JavaScript: Build Web Apps',
    "title_desc":'Learn JavaScript by building mini web applications. The ACTUAL learning by doing course.',
    "instructors_name": "Vasu Kotte",
    "rating": "4.8",
    "student_rated": "4",
    "current_price": 11.99,
    "previous_price": 94.99,
    "currency":"USD",
    "student_enrolled": "25",
    "badge": "New",
     "img":'https://i.ibb.co/Ry2vbQk/10.jpg'
},

{
    "id": "11",
    "title": 'Complete Web Developer',
    "title_desc":'Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!',
    "instructors_name": "Rob Parcel",
    "rating": "4.7",
    "student_rated": "62,475",
    "current_price": 9.99,
    "previous_price": 99.99,
    "currency":"USD",
    "student_enrolled": "271,018",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/0tFRXCr/11.jpg'
},

{
    "id": "12",
    "title": 'Modern HTML & CSS',
    "title_desc":'Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid',
    "instructors_name": "Brad Traversy",
    "rating": "4.7",
    "student_rated": "12,778",
    "current_price": 9.99,
    "previous_price": 94.99,
    "currency":"USD",
    "student_enrolled": "38,039",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/FmyYKVx/12.jpg'
},


{
    "id": "13",
    "title": 'Web Design: HTML & CSS',
    "title_desc":'Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!',
    "instructors_name": "Brad Schiff",
    "rating": "4.6",
    "student_rated": "12,227",
    "current_price": 11.99,
    "previous_price": 104.99,
    "currency":"USD",
    "student_enrolled": "45,100",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/C2dTKgL/13.jpg'
},


{
    "id": "14",
    "title": 'Web Developer Bootcamp',
    "title_desc":'The only course you need to learn web development - HTML, CSS, JS, Node, and More!',
    "instructors_name": "Colt Steele",
    "rating": "4.5",
    "student_rated": "180,402",
    "current_price": 11.99,
    "previous_price": 114.99,
    "currency":"USD",
    "student_enrolled": "588,521",
    "badge": "Highest Rated",
     "img":'https://i.ibb.co/Y7FpP8G/14.jpg'
},


{
    "id": "15",
    "title": 'Bootstrap 4 With 5 Projects',
    "title_desc":'Master Bootstrap 4 and build 5 real world themes while learning HTML5 semantics & CSS3',
    "instructors_name": "Brad Traversy",
    "rating": "4.7",
    "student_rated": "12,246",
    "current_price": 9.99,
    "previous_price": 94.99,
    "currency":"USD",
    "student_enrolled": "50,587",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/fqW8CNK/15.jpg'
},


{
    "id": "16",
    "title": '20 Vanilla JavaScript Projects',
    "title_desc":'Build 20 mini frontend projects from scratch with HTML5, CSS & JavaScript (No frameworks or libraries)',
    "instructors_name": "Brad Traversy",
    "rating": "4.8",
    "student_rated": "3,045",
    "current_price": 10.99,
    "previous_price": 99.99,
    "currency":"USD",
    "student_enrolled": "18,152",
    "badge": "Bestseller",
     "img":'https://i.ibb.co/yhYKJJc/16.jpg'
}

];

export default courses;












