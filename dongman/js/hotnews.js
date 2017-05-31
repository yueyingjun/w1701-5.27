/**
 * 新闻排行榜
 * 
 * @version 20140220
 */

(function($) {
    var plugin = 'hotnews';
    var Hotnews = {};

    var loadUrl = $.Host + '/api/labs/hotnews/load';
    var defCss = $.CDN + '/css/??' + 'plugin/' + plugin + '.css';
    var hotnews = $.container('cyHotnews');

    $.loadData(loadUrl, function(data) {
        if (data) {
            $.loadCss(data.css || defCss);
            $.loadStyle(data.style);
            hotnews.html(data.html);
            
            $("#hotnewsday").on('click',function(){
                      $("#block-day").css('display','block');
                      $("#hotnewsday").removeClass('gb-final-tab-c');
                      $("#hotnewsday").addClass('current-on');
                      $("#hotnewsmonth").removeClass('current-on');
                      $("#hotnewsweek").removeClass('current-on');
                      $("#hotnewsmonth").addClass('gb-final-tab-c');
                      $("#hotnewsweek").addClass('gb-final-tab-c');
                      $("#block-week").css('display','none');
                      $("#block-month").css('display','none');
            });
    
            $("#hotnewsweek").on('click',function(){
                      $("#block-week").css('display','block');
                      $("#hotnewsweek").removeClass('gb-final-tab-c');
                      $("#hotnewsweek").addClass('current-on');
                      $("#hotnewsday").removeClass('current-on');
                      $("#hotnewsmonth").removeClass('current-on');
                      $("#hotnewsmonth").addClass('gb-final-tab-c');
                      $("#hotnewsday").addClass('gb-final-tab-c');
                      $("#block-day").css('display','none');
                      $("#block-month").css('display','none');
            });
    
            $("#hotnewsmonth").on('click',function(){
                      $("#block-month").css('display','block');
                      $("#hotnewsmonth").removeClass('gb-final-tab-c');
                      $("#hotnewsmonth").addClass('current-on');
                      $("#hotnewsday").removeClass('current-on');
                      $("#hotnewsweek").removeClass('current-on');
                      $("#hotnewsday").addClass('gb-final-tab-c');
                      $("#hotnewsweek").addClass('gb-final-tab-c');
                      $("#block-week").css('display','none');
                      $("#block-day").css('display','none');
            });
        }
    });
    var statUrl = $.Host + '/api/labs/hotnews/click';
    $('#cyHotnews').on('click', '.hotnewsClick', function(){
        $.ajax({
            'type' : 'GET',
            'url' : statUrl,
            'data' : {'client_id' : jChangyan.appid},
            'success' : function() {},
            'dataType' : 'jsonp',
            'scriptCharset' : 'utf-8'
        });
        var url = $(this).data('url');
        window.open(url);
    });
})(jChangyan);
