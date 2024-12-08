// Assuming 'el' is a reference to an HTML element
const el = document.getElementById('myElement');

// Object containing attributes to set
const attr = {
    'class': 'myClass',
    'data-info': 'someData',
    'title': 'My Tooltip'
};

// Loop through the 'attr' object and set each attribute on 'el'
for (const key in attr) {
    if (attr.hasOwnProperty(key)) {
        el.setAttribute(key, attr[key]);
    }
}
