const faqItems = document.querySelectorAll('[data-faq]');

function handleFaqItemClick(event) {
    const faqItem = event.currentTarget;
    const faqPlusIcon = faqItem.querySelector('[data-faq-icon-plus]');
    const faqMinusIcon = faqItem.querySelector('[data-faq-icon-minus]');
    const faqAnswer = faqItem.querySelector('[data-faq-answer]');

    if (faqPlusIcon && faqMinusIcon) {
        toggleHidden(faqPlusIcon);
        toggleHidden(faqMinusIcon);
    }

    if (faqAnswer) {
        toggleHidden(faqAnswer);
    }
}

function toggleHidden(elem) {
    if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    } else {
        elem.classList.add('hidden');
    }
}

faqItems.forEach((faqItem) => {
    faqItem.addEventListener('click', handleFaqItemClick);
});