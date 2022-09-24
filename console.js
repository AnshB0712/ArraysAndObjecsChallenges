// BEGINNER CHALLENGES (unless otherwise stated, use the names array in all challenge points)
const names = ["Derek", "Joe", "Anna", "Coen", "Chris", "Macey", "Ella"];

// 1. Add a name to the beginning of the names array
names.unshift("Taylor")
// 2. Add a name to the end of the names array
names.push("Swift")
// 3. Remove the name you added to the beginning of the names array
names.shift()
// 4. Remove the name you added to the end of the names array (return the name to an original)
names.pop()
// 5. Create a new array called "lowercasedNames" with each name lowercased
const lowercasedNames = names.map(name => name.toLowerCase())

// 6. Sort the names array alphabetically
names.sort()

// 7. Find the index of "Chris"
const indexOfChris = names.indexOf("Chris");

// 8. Create a new array called "afterChris" with all names after "Chris" in the names array
const afterChris = names.slice(names.indexOf("Chris")+1);

// 9. Alter the original array to only contain the names before "Chris"
names.splice(names.indexOf("Chris"));

// 10. Return "true" if the names array contains "Chris" and "false" if it does not (hint: it should be false now)
const includesChris = names.includes("Chris")

// INTERMEDIATE CHALLENGES (unless otherwise stated, use the peeps array in all challenge points)
const peeps = [
  {
    id: 1,
    name: "Chris",
    age: 24,
    favoriteNumbers: [1, 4, 8, 12, 32],
  },
  {
    id: 2,
    name: "Terrance",
    age: 37,
    favoriteNumbers: [2, 8, 9],
  },
  {
    id: 3,
    name: "Megan",
    age: 22,
    favoriteNumbers: [23, 14],
  },
  {
    id: 4,
    name: "Juan",
    age: 18,
    favoriteNumbers: [23, 14, 2],
  },
  {
    id: 5,
    name: "Tina",
    age: 42,
    favoriteNumbers: [12, 9, 1, 4, 18],
  },
  {
    id: 6,
    name: "Lin",
    age: 24,
    favoriteNumbers: [3, 9],
  },
];

// 1. Add a boolean property "isAwesome" for each peep and set it to "true" if the person has at least 3 favorite numbers (or false if not).

for(let peep of peeps){
 if(peep.favoriteNumbers.length >= 3)
  peep.isAwesome = true
}

// 2. Return a new array called "youngPeeps" with peeps 25 or younger.
const youngPeeps = peeps.filter(peep => peep.age <= 25)
// 3. Sort the favoriteNumbers property from least to greatest for each peep in the peeps array
for(let {favoriteNumbers} of peeps){
 favoriteNumbers.sort((a,b)=>a-b)
}
// 4. Return "true" if every person has an age below 50 and "false" if not.
const allPeepsAreYoung = peeps.every(peep => peep.age < 50)
// 5. Create a function called "findPeep" that returns the peep for an ID passed in and returns "not found" if the peep does not exist. Call it for an id that exists and one that does not.
const findPeep = (id) => {
  const isPeepExist = peeps.find(peep => peep.id === id)
  return isPeepExist ? isPeepExist:'not found'
}
// 6. Create a new array called "reversedPeeps" with the peeps array order reversed
const reversedPeeps = peeps.reverse()
// 7. Add an additional property on each peep object called favoriteNumbersSum with a single number value which equals the total of all their favorite numbers.
for(let peep of peeps){
 peep.favoriteNumbersSum = peep.favoriteNumbers
  .reduce((acc,num)=>acc+num,0)
}
// 8. Create a new array called "numberOnePeeps" with all people that include a favorite number of "1". Include only their names and ids in the new array.

const numberOnePeeps = peeps
.filter(peep => peep.favoriteNumbers.includes(1))
.map(({name,id}) => ({name,id}))

// 9. Combine all peeps from the numberOnePeeps (#8 above) which are also in the youngPeeps (#2 above) array into a new array called "freshPeeps". Include peeps with unique ids only from the youngPeeps array.
const freshPeeps = [...numberOnePeeps
]

youngPeeps.forEach(peep => {
if(!freshPeeps.find(({id})=>peep.id))
  freshPeeps.push(peep)
})


// 10. Return a single value representing the total of all favoriteNumbers for anyone with the isAwesome property set to "true" (HINT: should be 159).

const isAwesomefavoriteNumbersSum = 
peeps
.filter(peep => peep.isAwesome)
.reduce((acc,peep)=>peep.favoriteNumbersSum+acc,0)

/* ------------------------------ */

const peoples = [
  {
    name: {
      first: 'Jerod',
      last: 'Smith'
    },
    age: 25,
    id: 1,
  },
  {
    name: {
      first: 'Jen',
      last: 'Jones'
    },
    age: 30,
    id: 2,
  },
  {
    name: {
      first: 'Terrance',
      last: 'Adams'
    },
    age: 26,
    id: 3,
  }
];

const comments = {
  293 : {
    text: 'I love pizza!',
    userId: 1,
    rating: 4,
  },
  123: {
    text: 'I love pizza more than everyone!',
    userId: 1,
    rating: 5,
  },
  4223: {
    text: 'Burgers are best.',
    userId: 3,
    rating: 4,
  },
  4267: {
    text: 'Bears eat beets.',
    userId: 3,
    rating: 3,
  },
  1561: {
    text: 'Best service ever!',
    userId: 2,
    rating: 5,
  },
  1899: {
    text: 'This was gross!',
    userId: 3,
    rating: 1,
  },
  415: {
    text: 'Much better than last time!',
    userId: 3,
  },
  215: {
    text: 'Midnights out on 21st of october',
    userId: 99,
  },
  495: {
    text: 'meet you at midnight',
    userId: 99,
  }
};

// EASIER CHALLENGES (using the peeps array) //

// 1. Count the number of people in the people array.
const totalPeoples = peoples.length
// 2. List full names of people in a new array.
const fullNames = peoples.map(({name}) => name.first+' '+name.last)
// 3. Return “true” if everyone is older than 24.
const allAbove24 = peoples.every(person => person>24)
// 4. Return “true” if at least one person is younger than 26.
const atLeastOneUnder26 = peoples.some(person => person<26)
// 5. Return a new array called “young peeps” of all peeps less than 30.
const youngPeoples = peoples.filter(person => person.age<30);
// 6. Sort the peeps by age from oldest to youngest in an array called “sortedPeeps”.
const sortedPeoples = peoples.sort((a,b)=>(b.age-a.age))
// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
const firstNamesOfPeoples = peoples.map(({name}) => name.first)

// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments in an array of strings called “commentsArray”

const commentsArray = []

for(let comment in comments){
  commentsArray.push(comments[comment].text)
}

// 2. Return all comments with the word “love” in the comment in a new array called “loveComments”

const loveComments = Object.values(comments)
.filter(obj => obj.text.includes('love'))

// 3. List all the comments in an array of strings called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
const sortedCommentsArray = Object.values(comments)
.filter(obj => obj.rating)
.sort((a,b)=>a.rating-b.rating)
// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
const commentObj = Object.entries(comments).reduce((acc,[key,value])=>({...acc,[key]:value.text}),{})
// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments with that rating as the value. Ignore comments without a rating.
const groupedRatings = Object.values(comments)
.filter(comment => comment.rating)
.reduce((acc,{rating,text})=>{
  
  if(acc.hasOwnProperty(rating))
  acc[(rating)].push(text)
  else
  acc[(rating)] = [text]

  return acc
},{})
// 6. Return the average rating of all comments.
const averageRating = Object.values(comments).reduce((acc, comment) => acc += comment.rating || 0, 0) / Object.values(comments).filter(c => c.rating).length;
// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a string key. The value of each object should be an array of comment objects by the person.
const findUserById = (id) => {
    const user = peoples.find(person => person.id === id)
    return user ? user.name.first+'_'+user.name.last : "Guest_Users"
  }
  
const groupedPeepComments = Object
.values(comments)
.reduce((acc,{userId,text})=>{
  
  const user = findUserById(userId)
  
  if(acc.hasOwnProperty(user))
  acc[user].push(text)
  else
  acc[user] = [text]
  
  return acc
},{})