const navLinks = [
    ["About", "about.html"],
    ["Games", "games.html"],
]

var currentPage = "";

$.ajaxSetup ({
    // Disable cache because it messes up the page load
    cache: false,
});

$(() => {
    initializeNavBar();
});

function initializeNavBar() {
    let $nav = $("nav");

    for (let i = navLinks.length - 1; i >= 0; --i) {
        let link = navLinks[i];
        let $a = $("<a>");
        let $div = $("<div>");
        const id = "navLink" + i;

        $a.append($div);
        $div.text(link[0]);
        $a.prop("id", id);

        $a.on("click", () => {
            loadPage(link[1]);
            $("a.active").removeClass("active");
            $("#" + id).addClass("active");
        });

        if (i == 0) {
            $a.addClass("active");
            loadPage(link[1]);
        }
        $nav.prepend($a);
    }
}

function loadPage(page) {
    $("main").load("./pages/" + page);
    for (let link of navLinks)
        if (link[1] === page)
            currentPage = link[0];
    $("#pageName").text(currentPage);
}
