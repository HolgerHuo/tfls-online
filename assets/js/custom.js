// Put your custom JS code here
import { Modal } from 'bootstrap';

(() => {
    'use strict';

    // Declare search elements
    const searchToggleMobile = document.getElementById('searchToggleMobile');
    const searchToggleDesktop = document.getElementById('searchToggleDesktop');
    const searchModal = document.getElementById('searchModal');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('query');

    // Create search modal
    const flexSearchModal = new Modal(searchModal, {
        focus: true
    });

    // Show search modal when search button is clicked
    searchToggleMobile.addEventListener('click', showModalOnClick);
    searchToggleDesktop.addEventListener('click', showModalOnClick);

    function showModalOnClick() {
        flexSearchModal.toggle();
    }

    // Handle keyboard shortcuts
    document.addEventListener('keydown', onKeyDownHandler);

    function onKeyDownHandler(event) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            flexSearchModal.show();
            searchForm.reset();
        }
        if (event.key === 'Escape') {
            searchForm.reset();
        }
    }

    document.addEventListener('click', function (event) {
        var modalElement = searchModal.contains(event.target);
        if (!modalElement) {
            searchForm.reset();
        }
    });

    // Focus the search input element when the search modal is shown
    searchModal.addEventListener('shown.bs.modal', () => {
        searchInput.focus();
    });

    searchInput.addEventListener("keydown", search);

    function search(e) {
        const key = 0 || e.keyCode || e.charCode;
        if(key == 13){
            e.preventDefault()
            window.open(`https://www.bing.com/search?q=site:tfls.online ${e.target.value}`, '_blank')
        }
    }
})();
