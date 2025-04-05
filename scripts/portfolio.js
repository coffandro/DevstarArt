const DEVSTARDATA = "https://raw.githubusercontent.com/coffandro/DevstarArtData/refs/heads/master/data.json";
var Years = [];

function onLoad() {
    var PageContainer = document.getElementById("PageContainer");
    // var ScrollIndicator = document.getElementById("ScrollIndicator");
    // var index = 1;
    // var lastIndicator = null;

    $.getJSON(DEVSTARDATA, function (json) {
        for (const [key, value] of Object.entries(json["PortfolioYears"])) {
            Years.push(key);

            var YearContainer = document.createElement("div");
            YearContainer.className = "YearContainer";
            YearContainer.id = key;

            Array.from(value).forEach(element => {
                var NewImage = document.createElement("img");
                NewImage.src = "https://raw.githubusercontent.com/coffandro/DevstarArtData/refs/heads/master/images/portfolio/" + element;

                YearContainer.appendChild(NewImage);
            });

            // for(let i = 0; i < value.size(); i++){
            //     var x = Math.floor(Math.random() * 900) + 100;
            //     var y = Math.floor(Math.random() * 600) + 100; 

            //     var NewImage = document.createElement("img");
            //     NewImage.src = "https://picsum.photos/" + x + "/" + y;

            //     YearContainer.appendChild(NewImage);
            // }            

            // var YearTitle = document.createElement("h1");
            // YearTitle.innerHTML = key;
            // YearTitle.className = "YearLabel";

            // PageContainer.appendChild(YearTitle)
            PageContainer.appendChild(YearContainer)

            // var indicator = document.createElement("div");
            // indicator.id = "indi" + key;
            // indicator.innerHTML = key;
            // indicator.className = "ScrollCircle";

            // if (index == 1) {
            //     indicator.dataset.ScrollBottom = 0;
            // } else {
            //     indicator.dataset.ScrollBottom = lastIndicator.dataset.ScrollTop;
            // }

            // indicator.dataset.ScrollTop = (100/Object.keys(json["PortfolioYears"]).length) * index;
    
            // lastIndicator = indicator;

            // ScrollIndicator.appendChild(indicator);
            // index += 1;
        }
    });

    // var messages = document.querySelectorAll(".ScrollCircle");
    // for (var i = 0; i < messages.length; i++) {
        
    // }

    // $(window).scroll(function(){
    
    //     // calculate how far we've scrolled down, by percentage
    //     var scrollTo = $(window).scrollTop(),
    //         docHeight = $(document).height(),
    //         windowHeight = $(window).height();
    //     scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
    //     scrollPercent = scrollPercent.toFixed(1);
        
    //     var messages = document.querySelectorAll(".ScrollCircle");
    //     for (var i = 0; i < messages.length; i++) {
    //         messages[i].classList.remove("filled");

    //         // Calculate the current position and set correct circle to filled
    //         console.log(messages[i].dataset.ScrollBottom);
    //         console.log(scrollPercent < messages[i].dataset.ScrollBottom);
    //         console.log(messages[i].dataset.ScrollTop);
    //         console.log(scrollPercent > messages[i].dataset.ScrollTop);
    //         if (scrollPercent < messages[i].dataset.ScrollBottom && scrollPercent > messages[i].dataset.ScrollTop) {
    //             messages[i].classList.add("filled");
    //         }
    //     }
    // }).trigger('scroll');

    // window.addEventListener("scroll", function() {
    //     var circles = document.querySelectorAll(".ScrollCircle");
    //     for (var i = 0; i < circles.length; i++) {
    //         circles[i].classList.remove("filled");

    //         if (window.scrollY > (circles[i].offsetTop + circles[i].offsetHeight)) {
    //             circles[i].classList.add("filled");
    //         }
    //     }
    // });
}

window.onload = onLoad;