### Alert
It shows a message and waits for the user to press “OK”.

```js 
alert("Hello");
```

### Prompt
The function prompt accepts two arguments:


```js 
result = prompt(title, optional_default_value);
```

```js 
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
```

The visitor can type something in the prompt input field and press OK. **Then we get that text in the result**. Or they can cancel the input by **pressing Cancel or hitting the Esc key**, then **we get null as the result**.



### Confirm
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is **true** if OK is pressed and **false** otherwise.
```js 
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed
``` 

 [Prev](../data_types/jsinfo.md) [Next](../type_conversions/jsinfo.md/)