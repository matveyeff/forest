import switchCards from '@modules/switchCards';
import preloader from '@modules/preloader';

document.addEventListener('DOMContentLoaded', () => {
    
    let linkAuth = document.querySelector('#authBtn'),
        flipContainer = document.querySelector('#flipper'),
        signInReset = document.querySelector('#sign_in_back');
    
		switchCards(linkAuth, flipContainer, signInReset);
		preloader();
});