document.getElementById('save-trigger').onclick = function () {
            const docCopy = document.documentElement.cloneNode(true);

            const buttonInCopy = docCopy.querySelector('#save-trigger');
            if (buttonInCopy) buttonInCopy.remove();

            const scriptInCopy = docCopy.querySelector('#cleaner-script');
            if (scriptInCopy) scriptInCopy.remove();

            const editables = docCopy.querySelectorAll('[contenteditable]');
            editables.forEach(el => {
                el.removeAttribute('contenteditable');
                el.style.outline = 'none';
                el.style.border = 'none';
            });
            const finalHtml = '<!DOCTYPE html>\n' + docCopy.outerHTML;

            const blob = new Blob([finalHtml], { type: 'text/html' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'final-emailer.html';
            a.click();

            alert('Done! Please use the downloaded "final-emailer.html" file for your email.');
}
