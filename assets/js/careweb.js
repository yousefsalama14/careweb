// $(document).ready(function () {
//     $("#kt_app_sidebar_toggle").on("click", function(){
//         $("body").toggleClass("show-second-menu");
//     });

// });

// Apply search 
$(document).ready(function () {
    var processs = function (search) {
        var timeout = setTimeout(function () {
            var number = KTUtil.getRandomInt(1, 3);

            // Hide recently viewed
            recentlyViewedElement.classList.add("d-none");

            if (number === 3) {
                // Hide results
                resultsElement.classList.add("d-none");
                // Show empty message
                emptyElement.classList.remove("d-none");
            } else {
                // Show results
                resultsElement.classList.remove("d-none");
                // Hide empty message
                emptyElement.classList.add("d-none");
            }

            // Complete search
            search.complete();
        }, 1500);
    }

    var clear = function (search) {
        // Show recently viewed
        recentlyViewedElement.classList.remove("d-none");
        // Hide results
        resultsElement.classList.add("d-none");
        // Hide empty message
        emptyElement.classList.add("d-none");
    }

    // Elements
    element = document.querySelector("#kt_docs_search_handler_responsive");

    // if (!element) {
    //     return;
    // }

    wrapperElement = element.querySelector("[data-kt-search-element='wrapper']");
    recentlyViewedElement = element.querySelector("[data-kt-search-element='recently-viewed']");
    resultsElement = element.querySelector("[data-kt-search-element='results']");
    emptyElement = element.querySelector("[data-kt-search-element='empty']");
    preferencesElement = element.querySelector("[data-kt-search-element='preferences']");
    preferencesShowElement = element.querySelector("[data-kt-search-element='preferences-show']");
    preferencesDismissElement = element.querySelector("[data-kt-search-element='preferences-dismiss']");

    // Initialize search handler
    searchObject = new KTSearch(element);

    // Search handler
    searchObject.on("kt.search.process", processs);

    // Clear handler
    searchObject.on("kt.search.clear", clear);

    // Preference show handler
    preferencesShowElement.addEventListener("click", function () {
        wrapperElement.classList.add("d-none");
        preferencesElement.classList.remove("d-none");
    });

    // Preference dismiss handler
    preferencesDismissElement.addEventListener("click", function () {
        wrapperElement.classList.remove("d-none");
        preferencesElement.classList.add("d-none");
    });

    // Init datatable
    $(".init_datatable").DataTable({
        "language": {
            "lengthMenu": "Show _MENU_",
            "paginate": {
                "previous": "<i class='fas fa-chevron-left me-5 fs-5'></i> Previous",
                "next": "Next <i class='fas fa-chevron-right ms-5 fs-5'></i>"
            }
        },
        "dom":
            "<'table-responsive'tr>" +

            "<'row'" +
            // "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
            "<'col-sm-12 d-flex align-items-center justify-content-center'p>" +
            ">"
    });
});