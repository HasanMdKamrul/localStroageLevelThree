// ** getTextInput
const getTextInput = id => document.getElementById(id).innerText;

// ** getInputValue

const getInputValue = id => document.getElementById(id).value;

// ** set Item to LS

const setItem = (key,value)=>{
    localStorage.setItem(key,value);
};

// ** delete Item from the ls

const deleteItem = key => localStorage.removeItem(key);

// ** store the name in LS

document.getElementById('name-send-button').addEventListener('click',()=>{
    storeValueInLs('name-label','name-field')
})

// ** delete the name in ls

document.getElementById('name-delete-button').addEventListener('click',()=>{
    const key = getTextInput('name-label');
    deleteItem(key)
})
// ** store the email in LS

document.getElementById('email-send-button').addEventListener('click',()=>{
    storeValueInLs('email-label','email-field')
})

// ** delete the name in ls

document.getElementById('email-delete-button').addEventListener('click',()=>{
    const key = getTextInput('email-label');
    deleteItem(key)
})
// ** store the message in LS

document.getElementById('message-send-button').addEventListener('click',()=>{
    storeValueInLs('message-label','message-field')
})

// ** delete the message in ls

document.getElementById('message-delete-button').addEventListener('click',()=>{
    const key = getTextInput('message-label');
    deleteItem(key)
})

// ** store value in ls functionality

const storeValueInLs = (labelId,valueId)=>{
     // ** get the  label
     const labelKey = getTextInput(labelId);
     // ** get the input name value
     const valueName = getInputValue(valueId)
     // ** set name to ls
     setItem(labelKey,valueName)
};

