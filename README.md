# Project Name : Course Registration

## The main features of this project:
This project is an SPA, creating using react and tailwind css. This is about a online learning platform. they offer world best technology related courses with reasonable price. The best feature of this project are given bellow - 

1. Add to Cart functionalities :
   ----in this project we have implement a simple cart functionalities, when an user click on the selected button, the button will trigger a function named `selectBtnHandler()` and the item will be added on the cart.

2. Check if the course already been added on the cart :
   -----When the user try to select a course, the function will check the cart first, if the course already exists on the cart it will show a toast notification to the user.

3. Check the course credit limit :
   -----There are two credit hours limit on the cart, one is Remaining Credit Hour with the default value 20 hours other is Total credit limit; when user added a course, the course credit hour will deducted from the remaining limit, if the remaining hour goes to less then 0 it will notify the user with a toast. on the other hand the Total credit will increase with the selected course credit. if the Total credit goes above 20 it also show a toast notification.

   ================================================



## managing the state in the project:

In this project i manage the state using `useState()`, and pass the state to the downwere components as prop drilling.

mainly i use here this type of state 
` const [cart, setCart] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)`

Thank to read this project features description and about state management.






