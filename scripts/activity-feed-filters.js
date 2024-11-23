document.addEventListener('DOMContentLoaded', function() {
    function displayFilters() {
        document.querySelector('.activity-feed__filters').style.display = 'flex';
    };
    displayFilters()

    categorySelect = document.querySelector('.form__select');
    titleSearch = document.querySelector('.form__input');

    function getSearchParameters() {
        params = new URLSearchParams(window.location.search);

	if (params.has('category')) {
	    categorySelect.value = params.get('category');
        };

	if (params.has('search_query')) {
	    titleSearch.value = params.get('search_query');
	};
    };
    getSearchParameters()

    function addEventListeners() {
	categorySelect.addEventListener('change', filterItems);
	titleSearch.addEventListener('input', filterItems);
    };
    addEventListeners()

    function filterItems() {
        selectedCategory = categorySelect.value.toLowerCase();
        searchQuery = titleSearch.value.toLowerCase();

        totalItems = 0;
        shownItems = 0;

        document.querySelectorAll('.activity-feed__item').forEach(function(item) {
            itemCategory = item.querySelector('.item__category');
	    categoryContent = itemCategory.textContent.toLowerCase();
            categoryMatch = selectedCategory === 'all' ||
			          categoryContent  === selectedCategory;

            itemTitle = item.querySelector('.item__title');
	    titleContent = itemTitle.textContent.toLowerCase();
            titleMatch = titleContent.includes(searchQuery);

            if (categoryMatch && titleMatch) {
                item.style.display = 'block';
		highlightTitleMatch(itemTitle, searchQuery);

                shownItems++;
            } else {
                item.style.display = 'none';
            };

            totalItems++;
        });

	updateCount(shownItems, totalItems);
        updateURL(selectedCategory, searchQuery);
    }

    function highlightTitleMatch(itemTitle, searchQuery) {
	titleContent = itemTitle.textContent;

	if (searchQuery === '') {
	    itemTitle.innerHTML = titleContent;
	    itemTitle.style.color = 'var(--colour-foreground)';
	} else {
	    index = titleContent.toLowerCase().indexOf(searchQuery);
	    length = searchQuery.length;

	    prefix = titleContent.slice(0, index);
	    openingTag = '<strong style="color: var(--colour-foreground);">';
	    queryMatch = titleContent.slice(index, index+length);
	    closingTag = '</strong>';
	    suffix = titleContent.slice(index+length);

	    content = prefix + openingTag + queryMatch + closingTag + suffix;

	    itemTitle.innerHTML = content;
	    itemTitle.style.color = 'var(--colour-middleground)';
	};
    };

    function updateCount(shownItems, totalItems) {
	filtersCount = document.querySelector('.filters__count');
	filtersCount.textContent = `${shownItems} / ${totalItems}`;
    };

    function updateURL(selectedCategory, searchQuery) {
        params = new URLSearchParams();

        if (selectedCategory && selectedCategory !== 'all') {
            params.set('category', selectedCategory);
        };

        if (searchQuery) {
            params.set('search_query', searchQuery);
        };

        queryString = params.toString();
	path = window.location.pathname;
        newURL = path + (queryString ? '?' + queryString : '');
        window.history.pushState({path: newURL}, '', newURL);
    };

    filterItems();
});
