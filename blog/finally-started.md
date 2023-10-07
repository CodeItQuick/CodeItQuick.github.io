# Finally starting a learning journal

I started with a code snippet trying to implement finally using some fetching logic on a react project.

```js
const someReactQueryOrJavascriptWhatever = () => {
   let results;
   setSpinner(true);
   try {
      results = fetch('stuff').then().catch();
   } finally {
      pageData.refetch();
      setSpinner(false);
   }
   return results;
}
```

## What's wrong with this code?

Well - if I double click the code, for example, the spinner will never resolve. I'll get an infinite spin, and depending on the logic
I'm using, the button/etc. could be disabled. Terrible result. But Why? Well the promise is actually returned in the result, and the finally executes
immediately. My intention was to do a fetch, and then do any cleanup necessary (eg: refresh the page and remove the spinner).

After contacting my local javascript finally wizards (Juan in trashdevs discord, and Mark in my local dev community) I discovered the way. Which is succinctly put:

### Faction One (Try-Catch-Finally)

```js
const someReactQueryOrJavascriptWhatever = async () => {
    setSpinner(true);

    try {
        const response = await fetch('stuff');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch 'stuff':", error);
        throw error;
    } finally {
        pageData.refetch();
        setSpinner(false);
    }
}
```

The code can also be re-written (yet again) to use a then/catch promise syntax. Something like (and this is me so forgive me for my mistakes):

### Faction Two (Then/Catch)
```js
const someReactQueryOrJavascriptWhatever = () => {
    setSpinner(true);

    return await fetch('stuff').then(() => {
        pageData.refetch();
        setSpinner(false);
    }).catch((err) => {
        pageData.refetch();
        setSpinner(false);
        throw err;
    });
}
```

Which is better? I'll let you decide, the second has duplicate code but is "shorter", the first is a bit more verbose/maybe more intention revealing.

### Also a common gotchya in try catch finally land:
```js
const myfunc = () => {
   try {
      return true;
   } finally {
      return false;
   }
}
```

This will return true, then return false. Very weird behaviour, so a do-not-attempt-in-real-life kind of code smell.

## Debounced Solution (Credit: Mark)

Wrap the function with the below to stop it executing twice when undesired:

```js
const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
```

## Faction THREE: No try catch

Instead of relying on throwing and catch errors in place, use type safety to handle success vs error cases.
```js
const someReactQueryOrJavascriptWhatever = () => {
    setSpinner(true);

    const results = await fetch('stuff');
    if (!results.ok) {
        pageData.refetch();
        setSpinner(false);
        // do error case
        return result;
    }

    pageData.refetch();
    setSpinner(false);
    // do success case
    return result;
}
```

The above is more interesting with typescript - where we can codify error responses as an "error type" and success responses as a "success type".

For example:

```js
interface SuccessType<T> { 
   type: 'success'
   data: T
}

interface ErrorType<T> {
  type: 'error'
  errNo: T
}
```
