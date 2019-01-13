'use strict';

export const switchCards = (linkAuth, flipContainer, signInReset) => {
    document.body.addEventListener('click', function(e) {
        if( (!e.target.closest('.flip-container') || e.target === signInReset) ) {
            if(!flipContainer.classList.contains('flip_rotate') && e.target !== linkAuth) 
                return false;
            flipContainer.classList.toggle('flip_rotate');
            linkAuth.classList.toggle('hidden');
        }
    });
};

export default switchCards;