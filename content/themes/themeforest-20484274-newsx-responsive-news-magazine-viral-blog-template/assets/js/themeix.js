var themeix = {


    post_type_one_function: function() {
        $(".gallery-heading h4").html(gallery_heading);
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_one + "",
            include: "tags,author",
            limit: gallery_post_number
        })).done(function(data) {
            var postData = data.posts;
 
                
 
            var postContainer = $(".gallery-post-wrapper");
            if (postData.length > 0) {
                for (var i = 0; i < postData.length; i++) {
                    var post_title   = postData[i].title;
                    var post_img_src = postData[i].feature_image;
                    var post_url     = postData[i].url;
                    var post_tag     = postData[i].primary_tag.name;
                    var post_slug    = postData[i].primary_tag.slug;
                    var single_tag   = "";
                    var single_slug  = "";
                    post_title       = post_title.substring(0, 50);

                    var tag_url  = "/tag/" + post_slug;
                    if (post_img_src !== null && post_img_src !== "") {

                        postContainer.append('<div class="col-md-4 col-sm-6"><div class="photo-gallery-single"><div class="post-image"><a class="tag-name green-color" href="' + tag_url + '">' + post_tag + '</a><div class="medium-post-thumb" style="background-image: url(' + post_img_src + ')"></div><div class="caption"> <a href="' + post_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"></div></div></div>');
                    } else {

                        postContainer.append('<div class="col-md-4 col-sm-6"><div class="photo-gallery-single"><div class="post-image"> <a class="tag-name green-color" href="' + tag_url + '">' + post_tag + '</a><div class="medium-post-thumb" style="background-image: url(/assets/images/default-img.png)"></div><div class="caption"> <a href="' + post_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"></div></div></div>');
                    }

                }
            }
        });
    },


    timeAndDate: function(e) {

        var a = new Date(e),
            t = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            s = t[a.getMonth()],
            i = a.getDate(),
            o = a.getFullYear(),
            n = s + " " + i + ", " + o;
        return n
    },


    post_type_two_function: function() {

        $(".news-heading-one h4").html(post_type_two_heading);
        var wrapper = $(".category-news-one ul li");
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_two + "",
            limit: 3
        })).done(function(news) {
            var newsData = news.posts;
            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title   = newsData[i].title;
                    var news_img_src = newsData[i].feature_image;
                    var news_url     = newsData[i].url;
                    var post_date    = themeix.timeAndDate(newsData[i].published_at);
                    news_title       = news_title.substring(0, 32) + "...";
                    var post_content = newsData[i].html;
                    // p tag text starts at 33rd position.
                    var snippet      = post_content.substring(33, 85) + "...";

                    if (news_img_src !== null && news_img_src !== "") {

                        wrapper.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    } else {

                        wrapper.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    }

                }
            }

        });
    },

    post_type_three_function: function() {

        $(".news-heading-two h4").html(post_type_three_heading);
        var post_wrapper = $(".category-news-two ul li");
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_three + "",
            limit: news_post_number
        })).done(function(news) {
            var newsData = news.posts;
            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title   = newsData[i].title;
                    var news_img_src = newsData[i].feature_image;
                    var news_url     = newsData[i].url;
                    var post_date    = themeix.timeAndDate(newsData[i].published_at);
                    news_title       = news_title.substring(0, 32) + "...";
                    var post_content = newsData[i].html;
                    // debugger; // p tag text starts at 33rd position.
                    var snippet      = post_content.substring(33, 85) + "...";

                    if (news_img_src !== null && news_img_src !== "") {

                        post_wrapper.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    } else {

                        post_wrapper.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    }

                }
            }

        });
    },

    post_type_four_function: function() {

        $(".news-heading-three h4").html(post_type_four_heading);
        var news_container = $(".category-news-three ul li");
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_four + "",
            limit: news_post_number
        })).done(function(news) {
            var newsData = news.posts;
            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title   = newsData[i].title;
                    var news_img_src = newsData[i].feature_image;
                    var news_url     = newsData[i].url;
                    var post_date    = themeix.timeAndDate(newsData[i].published_at);
                    news_title       = news_title.substring(0, 32) + "...";
                    var post_content = newsData[i].html;
                    // debugger; // p tag text starts at 33rd position.
                    var snippet      = post_content.substring(33, 85) + "...";

                    if (news_img_src !== null && news_img_src !== "") {

                        news_container.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    } else {

                        news_container.append('<div class="single-post"><div class="post-thumb"><div class="small-post-thumb " style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div>');
                    }

                }
            }

        });
    },


    recent_post: function() {

        $(".recent-news-heading h4").html(recent_posts_heading);

        var newsContainer = $(".recent-posts-wrapper");

        $.get(ghost.url.api("posts", {
            limit: recent_posts_number,
            include: "tags"
        })).done(function(news) {
            var newsData = news.posts;

           var test =  $(newsData).find(".kg-card-markdown");
              
              data = test.prevObject[0].html;

            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title    = newsData[i].title;
                    var news_img_src  = newsData[i].feature_image;
                    var news_url      = newsData[i].url;
                    var post_date     = themeix.timeAndDate(newsData[i].published_at);
                    var post_content  = newsData[i].html;
                    var primary_tag   = newsData[i].primary_tag;
                    var post_text     = post_content.substring(0, words_per_post) + ' ...';
                    news_title        = news_title.substring(0, 80);

                    if (primary_tag  !== null) {

                        primary_tag = newsData[i].primary_tag.name;
                        primary_slug = newsData[i].primary_tag.slug;

                        var tag_url = "/tag/"+primary_slug;
                    }else {

                        var tag_url = news_url;
                    }


                    if(primary_tag === null){

                        primary_tag = "feature";
                    }

                    if (news_img_src !== null && news_img_src !== "") {

                        newsContainer.append('<div class="recent-news"><div class="post-image recent-thumb"> <a class="tag-name" href="' + tag_url + '">' + primary_tag + '</a><div class="recent-post-image" style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="recent-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2><ul class="post-meta"><li> <i class="fas fa-calendar-alt"></i> ' + post_date + '</li></ul><p>' + post_text + '</p></div></div>');

                    } else {

                        newsContainer.append('<div class="recent-news"><div class="post-image recent-thumb"> <a class="tag-name" href="' + tag_url + '">' + primary_tag + '</a><div class="recent-post-image" style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="recent-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2><ul class="post-meta"><li> <i class="fas fa-calendar-alt"></i> ' + post_date + '</li></ul><p>' + post_text + '</p></div></div>');
                    }

                    $(".post-excerpt .kg-card-markdown iframe").remove();
                        var str = $( ".post-excerpt .kg-card-markdown" ).text();
                        $(".post-excerpt .kg-card-markdown").text(function(index, currentText) {
                            return currentText.substr(0, 180);
                    });

                }
            }

        });
    },

    post_type_five_function: function() {

        $(".sidebar-heading-one h4").html(post_type_five_heading);
        var newsContainer = $(".most-popular-wrapper");
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_five + "",
            limit: popular_post_number
        })).done(function(news) {
            var newsData = news.posts;
            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title     = newsData[i].title;
                    var news_img_src   = newsData[i].feature_image;
                    var news_url       = newsData[i].url;
                    var post_date      = themeix.timeAndDate(newsData[i].published_at);
                    var slider_content = newsData[i].html;
                    var slider_text    = slider_content.substring(0, words_per_post);
                    news_title         = news_title.substring(0, 50);

                    if (news_img_src !== null && news_img_src !== "") {
                        newsContainer.append('<li><div class="single-post"><div class="post-thumb"><div class="small-post-thumb" style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div></li>');
                    } else {
                        newsContainer.append('<li><div class="single-post"><div class="post-thumb"><div class="small-post-thumb" style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="item-post-content"><h2><a href="' + news_url + '">' + news_title + '</a></h2> <p>' + snippet + '</p></div></div></li>');
                    }

                }
            }

        });
    },

    post_type_six_function: function() {

        var editor_slider_wrapper = $(".latest-news-active");
        $(".section-heading-five h4").html(post_type_six_heading);
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_six + "",
            limit: editorial_post_number,
            include: "tags"
        })).done(function(news) {
            var newsData = news.posts;
            if (newsData.length > 0) {
                for (var i = 0; i < newsData.length; i++) {
                    var news_title     = newsData[i].title;
                    var news_img_src   = newsData[i].feature_image;
                    var news_url       = newsData[i].url;
                    var post_date      = themeix.timeAndDate(newsData[i].published_at);
                    var slider_content = newsData[i].html;
                    var primary_tag    = newsData[i].primary_tag;
                    var slider_text    = slider_content.substring(0, words_per_post);
                    news_title         = news_title.substring(0, 60);

                    if (primary_tag !== null) {

                        primary_tag = newsData[i].primary_tag.name;
                        var slug    = newsData[i].primary_tag.slug;
                      
                        var tag_url = "tag/"+slug;

                    } else {

                        primary_tag = " ";
                        tag_url     = news_url;
                    }

                    if (news_img_src !== null && news_img_src !== "") {

                        editor_slider_wrapper.append('<div class="item"><div class="photo-gallery-single"><div class="post-image"><a class="tag-name" href="' + tag_url + '">' + primary_tag + '</a><div class="medium-post-thumb" style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"></div></div></div>');
                    } else {

                        editor_slider_wrapper.append('<div class="item"><div class="photo-gallery-single"><div class="post-image"> <a class="tag-name" href="' + tag_url + '">' + primary_tag + '</a><div class="medium-post-thumb" style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"></div></div></div>');
                    }

                }

                editor_slider_wrapper.owlCarousel({
                    autoplay  : true,
                    margin    : 30,
                    loop      : true,
                    dots      : false,
                    nav       : false,
                    navText   : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {

                        0: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1160: {
                            items: 3
                        }
                    }
                });

            }

        });
    },


    post_type_seven_function: function() {

        $(".sports-heading h4").html(post_type_seven_heading);
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_seven + "",
            include:"tags",
            limit: 1
        })).done(function(news) {
            var news_wrapper = $(".sports-post-wrapper");
            var newsData     = news.posts;
            if (newsData.length > 0) {

                for (var i = 0; i < newsData.length; i++) {

                    var news_title      = newsData[i].title;
                    var news_img_src    = newsData[i].feature_image;
                    var news_url        = newsData[i].url;
                    var post_date       = themeix.timeAndDate(newsData[i].published_at);
                    var post_content    = newsData[i].html;
					var primary_tag     = newsData[i].primary_tag;
                    var post_text       = post_content;
                    news_title          = news_title.substring(0, 50);
                    
                    if (primary_tag !== null) {
                        primary_tag = newsData[i].primary_tag.name;
                        var primary_slug = newsData[i].primary_tag.slug;
                        var tag_url = "/tag/"+primary_slug;
                    } else {

                        primary_tag = "feature";
                        tag_url = news_url;
                    }
                    if (news_img_src !== null && news_img_src !== "") {
                        news_wrapper.append('<div class="post-image"> <a class="tag-name" href="' + tag_url + '">'+primary_tag+'</a><div class="medium-post-thumb" style="background-image: url(' + news_img_src + ');"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"><h3 class="custom-head-change"><a href="' + news_url + '">' + news_title + '</a></h3>' + post_text + '</div>');
                    } else {

                        news_wrapper.append('<div class="post-image"> <a class="tag-name" href="' + tag_url + '">'+primary_tag+'</a><div class="medium-post-thumb" style="background-image: url(/assets/images/default-img.png);"></div><div class="caption"> <a href="' + news_url + '"><i class="fas fa-link"></i></a></div></div><div class="photo-gallery-content"><h3 class="custom-head-change"><a href="' + news_url + '">' + news_title + '</a></h3>' + post_text + '</div>');
						
                    }
						
                        $(".post-excerpt .kg-card-markdown iframe").remove();
						 var str = $( ".post-excerpt .kg-card-markdown" ).text();
                        $(".post-excerpt .kg-card-markdown").text(function(index, currentText) {
                            return currentText.substr(0, 180);
                       });

                }

            }

        });

        //  For Sports Sections posts list

        var post_list = post_type_seven_post_number;
        $.get(ghost.url.api("posts", {
            filter: "tag:" + post_type_seven + "",
            limit: post_list
        })).done(function(sports) {
            var sportsData = sports.posts;
            if (sportsData.length > 0) {
                for (var i = 0; i < sportsData.length; i++) {
                    var sports_posts_title  = sportsData[i].title;
                    var sports_posts_url    = sportsData[i].url;
                    sports_posts_title      = sports_posts_title.substring(0, 100);
                    $(".sport-posts-list").append('<li><a href="' + sports_posts_url + '">' + sports_posts_title + '</a></li>');
                }
            }
        });

    },

    // scroll Top function

    scrolltop: function() {
        var wind = $(window);
        wind.on("scroll", function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= 500) {
                $(".scroll-top").fadeIn("slow");
            } else {
                $(".scroll-top").fadeOut("slow");
            }

        });

        $(".scroll-top").on("click", function() {
            var bodyTop = $("html, body");
            bodyTop.animate({
                scrollTop: 0
            }, 800, "easeOutCubic");
        });
    },

    // For Search 

    themeix_search: function() {

        $("#search-field").ghostHunter({
            results: "#search-result",
            info_template: "<p class='search-counter'>Numero de publicaciones encontradas: {{amount}}</p>",
            result_template: "<div class='single-result info'> <a href='{{link}}'><h3 class='search-title'>{{title}}</h3><p class='search-date'>{{pubDate}}</p>{{description}}</a></div>",
            onKeyUp: true
        });

    },

    // For Responsive Video

    responsive_video: function() {

        if ($(".embeded-video").length > 0) {
            $(".embeded-video").fitVids();
        }

        if ($(".top-news").length > 0) {
            $(".top-news").fitVids();

        }
        if ($(".single-item").length > 0) {
            $(".single-item").fitVids();

        }

        if($(".kg-card-markdown").length >0){

            $(".kg-card-markdown").fitVids();
        }

    },

    media_feature: function() {

        var video_url = $(".post-details-hidden").find("iframe").attr("src");
        if (typeof video_url !== "undefined") {
            $(".top-news-img .img-section").hide();
            var valied_url = '<iframe width="560" height="315" src="' + video_url + '" frameborder="0" allowfullscreen></iframe>';
            $(".embeded-video").append(valied_url);
        }
    },

    showing_adds: function() {

        $(".banner-add-area").append(sidebar_add);
        $(".header-add-area").append(add_img_one);
        $(".add-image").append(add_img_two);
        $(".purchage-banner h5").append(purchage_heading);
        $(".purchage-banner p").append(purchage_details);
        $(".purchage-button a").attr("href", purchage_link);
        $(".purchage-button a").text(purchage_btn_text);
    },

    syntax_highlighter: function() {

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    },
 
	
	
	
    init: function() {

        this.post_type_one_function();
        this.post_type_two_function();
        this.timeAndDate();
        this.post_type_three_function();
        this.post_type_four_function();
        this.recent_post();
        this.post_type_five_function();
        this.post_type_six_function();
        this.post_type_seven_function();
        this.scrolltop();
        this.themeix_search();
        this.media_feature();
        this.responsive_video();
        this.showing_adds();
        this.syntax_highlighter();
    }
}

$(document).ready(function() {
    themeix.init();
});