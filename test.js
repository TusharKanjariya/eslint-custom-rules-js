function test() {
    console.log("Not Helper Function");

}

const my_variable = 5;
const helperFunction = () => {
    console.log("Helper Function");
};

console.log(my_variable);
helperFunction();
test();