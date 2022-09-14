// my code
const btns = document.querySelectorAll('.textFormatting-btn');

btns.forEach(button => {
    button.addEventListener('click', () => {
        let myEvent = button.dataset.command;
        // document.execCommand(myEvent, false, null);
        if (myEvent === 'insertImage' || myEvent === 'createLink') {
            let url = prompt('insert link here');
            document.execCommand(myEvent, false, url);
        } else if (myEvent === 'formatBlock') {
            let formattingValue = button.dataset.block;
            document.execCommand(myEvent, false, formattingValue);
        } else {
            document.execCommand(myEvent, false, null);
        }
    });
});

// sdsidhsh