console.log("dark pattern extension is running...")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "getDom") {
        sendResponse({ dom: document.body.innerHTML });
    }
    if (request.action == "getTable") {
        const imagesData = [];
        const imageElements = document.querySelectorAll('img');

        imageElements.forEach((imageElement) => {
            const classAttribute = imageElement.className || 'none';
            const idAttribute = imageElement.id || 'none';
            const altText = imageElement.alt || 'none';
            const srcAttribute = imageElement.src || 'none';

            const imageData = {
                class: classAttribute,
                id: idAttribute,
                text: altText,
                imageUrl: srcAttribute
            };

            imagesData.push(imageData);
        });

        sendResponse({ imagesData: imagesData });
    }
    if (request.action == 'highlightElements') {
        highlightElements(request.xpath);
    } else if (request.action == 'highlightElementsOnHover') {
        addHoverEffect(request.xpath);
    }
});

function highlightElements(xpath) {
    const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    let element = elements.iterateNext();
    console.log(element)

    while (element) {
        element.style.border = '10px solid red';
        element = elements.iterateNext();
    }
}

function addHoverEffect(xpath) {
    const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    let element = elements.iterateNext();

    while (element) {
        element.addEventListener('mouseover', function () {
            this.style.border = '10px solid red';
        });

        element.addEventListener('mouseout', function () {
            this.style.border = ''; // Remove border on mouseout
        });

        element = elements.iterateNext();
    }
}
