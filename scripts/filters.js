document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to Category Select and Title Search when the DOM has loaded.
    const categorySelect = document.querySelector('.form__select');
    const titleSearch = document.querySelector('.form__input');

    categorySelect.addEventListener('change', filterItems);
    titleSearch.addEventListener('input', filterItems);

    // Filter items for matches to Selected Category and Search Query.
    function filterItems() {
        const selectedCategory = categorySelect.value.toLowerCase();
        const searchQuery = titleSearch.value.toLowerCase();

        let totalItems = 0;
        let shownItems = 0;

        document.querySelectorAll('.feed__item').forEach(function(item) {
            const itemCategory = item.querySelector('.feed__category').textContent.toLowerCase();
            const itemTitle = item.querySelector('.feed__title').textContent.toLowerCase();

            const categoryMatch = selectedCategory === 'all' || itemCategory === selectedCategory;
            const titleMatch = itemTitle.includes(searchQuery);

            if (categoryMatch && titleMatch) {
                item.style.display = 'flex';
                shownItems++;
            } else {
                item.style.display = 'none';
            }

            totalItems++;
        });

        // Display count of shown items.
        document.querySelector('.filters__count').textContent = `${shownItems} / ${totalItems}`;

        // Update URL with filters.
        updateURL(selectedCategory, searchQuery)
    }

    // Update URL params with applied filters.
    function updateURL(selectedCategory, searchQuery) {
        const params = new URLSearchParams(window.location.search);

        if (selectedCategory && selectedCategory !== 'all') {
            params.set('category', selectedCategory);
        } else {
            params.delete('category');
        }

        if (searchQuery) {
            params.set('search_query', searchQuery);
        } else {
            params.delete('search_query');
        }

        const newURL = window.location.pathname + '?' + params.toString();
        window.history.pushState({path: newURL}, '', newURL);
    }

    // Set filters based on URL params.
    const params = new URLSearchParams(window.location.search);

    if (params.has('category')) {
        categorySelect.value = params.get('category');
    }

    if (params.has('search_query')) {
        titleSearch.value = params.get('search_query');
    }

    // Run on page load for count display and filtering.
    filterItems();
});