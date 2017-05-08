import $ from 'jquery';

$(window).off('.affix');
$("#mainNav")
    .removeClass("affix affix-top affix-bottom")
    .removeData("bs.affix");
