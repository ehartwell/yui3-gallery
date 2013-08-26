if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-rocket-util/gallery-rocket-util.js']) {
   __coverage__['build/gallery-rocket-util/gallery-rocket-util.js'] = {"path":"build/gallery-rocket-util/gallery-rocket-util.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":28}}},"3":{"name":"(anonymous_3)","line":46,"loc":{"start":{"line":46,"column":13},"end":{"line":46,"column":28}}},"4":{"name":"(anonymous_4)","line":76,"loc":{"start":{"line":76,"column":12},"end":{"line":76,"column":27}}},"5":{"name":"(anonymous_5)","line":77,"loc":{"start":{"line":77,"column":46},"end":{"line":77,"column":79}}},"6":{"name":"(anonymous_6)","line":79,"loc":{"start":{"line":79,"column":27},"end":{"line":79,"column":60}}},"7":{"name":"(anonymous_7)","line":98,"loc":{"start":{"line":98,"column":12},"end":{"line":98,"column":27}}},"8":{"name":"(anonymous_8)","line":125,"loc":{"start":{"line":125,"column":14},"end":{"line":125,"column":29}}},"9":{"name":"(anonymous_9)","line":144,"loc":{"start":{"line":144,"column":14},"end":{"line":144,"column":29}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":152,"column":59}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":13}},"3":{"start":{"line":5,"column":0},"end":{"line":11,"column":45}},"4":{"start":{"line":13,"column":0},"end":{"line":147,"column":3}},"5":{"start":{"line":29,"column":4},"end":{"line":29,"column":72}},"6":{"start":{"line":47,"column":4},"end":{"line":49,"column":12}},"7":{"start":{"line":51,"column":4},"end":{"line":56,"column":5}},"8":{"start":{"line":52,"column":6},"end":{"line":52,"column":24}},"9":{"start":{"line":54,"column":6},"end":{"line":54,"column":71}},"10":{"start":{"line":55,"column":6},"end":{"line":55,"column":23}},"11":{"start":{"line":58,"column":4},"end":{"line":58,"column":15}},"12":{"start":{"line":77,"column":4},"end":{"line":81,"column":7}},"13":{"start":{"line":78,"column":6},"end":{"line":78,"column":42}},"14":{"start":{"line":80,"column":6},"end":{"line":80,"column":33}},"15":{"start":{"line":99,"column":4},"end":{"line":100,"column":17}},"16":{"start":{"line":102,"column":4},"end":{"line":105,"column":5}},"17":{"start":{"line":103,"column":6},"end":{"line":103,"column":46}},"18":{"start":{"line":104,"column":6},"end":{"line":104,"column":72}},"19":{"start":{"line":107,"column":4},"end":{"line":107,"column":25}},"20":{"start":{"line":126,"column":4},"end":{"line":127,"column":61}},"21":{"start":{"line":145,"column":4},"end":{"line":145,"column":55}},"22":{"start":{"line":149,"column":0},"end":{"line":149,"column":15}}},"branchMap":{"1":{"line":51,"type":"if","locations":[{"start":{"line":51,"column":4},"end":{"line":51,"column":4}},{"start":{"line":51,"column":4},"end":{"line":51,"column":4}}]},"2":{"line":78,"type":"cond-expr","locations":[{"start":{"line":78,"column":19},"end":{"line":78,"column":36}},{"start":{"line":78,"column":39},"end":{"line":78,"column":41}}]}},"code":["(function () { YUI.add('gallery-rocket-util', function (Y, NAME) {","","'use strict';","","var Util = {},","    STRING_DASHERIZE_REGEXP = (/[ _]/g),","    STRING_DASHERIZE_CACHE = {},","    STRING_DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g),","    STRING_CAMELIZE_REGEXP = (/(\\-|_|\\.|\\s)+(.)?/g),","    STRING_UNDERSCORE_REGEXP_1 = (/([a-z\\d])([A-Z]+)/g),","    STRING_UNDERSCORE_REGEXP_2 = (/\\-|\\s+/g);","","Y.mix(Util, {","  /**","    Converts a camelized string into all lower case separated by underscores.","","    ```javascript","    'innerHTML'.decamelize();           // 'inner_html'","    'action_name'.decamelize();        // 'action_name'","    'css-class-name'.decamelize();     // 'css-class-name'","    'my favorite items'.decamelize();  // 'my favorite items'","    ```","","    @method decamelize","    @param {String} str The string to decamelize.","    @return {String} the decamelized string.","  */","  decamelize: function(str) {","    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();","  },","","  /**","   Replaces underscores or spaces with dashes.","","   ```javascript","   'innerHTML'.dasherize();          // 'inner-html'","   'action_name'.dasherize();        // 'action-name'","   'css-class-name'.dasherize();     // 'css-class-name'","   'my favorite items'.dasherize();  // 'my-favorite-items'","   ```","","   @method dasherize","   @param {String} str The string to dasherize.","   @return {String} the dasherized string.","   */","  dasherize: function (str) {","    var cache = STRING_DASHERIZE_CACHE,","        hit = cache.hasOwnProperty(str),","        ret;","","    if (hit) {","      return cache[str];","    } else {","      ret = this.decamelize(str).replace(STRING_DASHERIZE_REGEXP, '-');","      cache[str] = ret;","    }","","    return ret;","  },","","  /**","   Returns the lowerCamelCase form of a string.","","   ```javascript","   'innerHTML'.camelize();          // 'innerHTML'","   'action_name'.camelize();        // 'actionName'","   'css-class-name'.camelize();     // 'cssClassName'","   'my favorite items'.camelize();  // 'myFavoriteItems'","   'My Favorite Items'.camelize();  // 'myFavoriteItems'","   ```","","   @method camelize","   @param {String} str The string to camelize.","   @return {String} the camelized string.","   */","  camelize: function (str) {","    return str.replace(STRING_CAMELIZE_REGEXP,function (match, separator, chr) {","      return chr ? chr.toUpperCase() : '';","    }).replace(/^([A-Z])/, function (match, separator, chr) {","      return match.toLowerCase();","    });","  },","","  /**","   Returns the UpperCamelCase form of a string.","","   ```javascript","   'innerHTML'.classify();          // 'InnerHTML'","   'action_name'.classify();        // 'ActionName'","   'css-class-name'.classify();     // 'CssClassName'","   'my favorite items'.classify();  // 'MyFavoriteItems'","   ```","","   @method classify","   @param {String} str the string to classify","   @return {String} the classified string","   */","  classify: function (str) {","    var parts = str.split(\".\"),","        out = [];","","    for (var i = 0, l = parts.length; i < l; i++) {","      var camelized = this.camelize(parts[i]);","      out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));","    }","","    return out.join(\".\");","  },","","  /**","   More general than decamelize. Returns the lower\\_case\\_and\\_underscored","   form of a string.","","   ```javascript","   'innerHTML'.underscore();          // 'inner_html'","   'action_name'.underscore();        // 'action_name'","   'css-class-name'.underscore();     // 'css_class_name'","   'my favorite items'.underscore();  // 'my_favorite_items'","   ```","","   @method underscore","   @param {String} str The string to underscore.","   @return {String} the underscored string.","   */","  underscore: function (str) {","    return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').","      replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();","  },","","  /**","   Returns the Capitalized form of a string","","   ```javascript","   'innerHTML'.capitalize()         // 'InnerHTML'","   'action_name'.capitalize()       // 'Action_name'","   'css-class-name'.capitalize()    // 'Css-class-name'","   'my favorite items'.capitalize() // 'My favorite items'","   ```","","   @method capitalize","   @param {String} str The string to capitalize.","   @return {String} The capitalized string.","   */","  capitalize: function (str) {","    return str.charAt(0).toUpperCase() + str.substr(1);","  }","});","","Y.RUtil = Util;","","","}, 'gallery-2013.08.22-21-03', {\"requires\": [\"yui-base\"]});","","}());"]};
}
var __cov_ya$k0LwY_9RpUhWvryOvCA = __coverage__['build/gallery-rocket-util/gallery-rocket-util.js'];
__cov_ya$k0LwY_9RpUhWvryOvCA.s['1']++;YUI.add('gallery-rocket-util',function(Y,NAME){__cov_ya$k0LwY_9RpUhWvryOvCA.f['1']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['2']++;'use strict';__cov_ya$k0LwY_9RpUhWvryOvCA.s['3']++;var Util={},STRING_DASHERIZE_REGEXP=/[ _]/g,STRING_DASHERIZE_CACHE={},STRING_DECAMELIZE_REGEXP=/([a-z])([A-Z])/g,STRING_CAMELIZE_REGEXP=/(\-|_|\.|\s)+(.)?/g,STRING_UNDERSCORE_REGEXP_1=/([a-z\d])([A-Z]+)/g,STRING_UNDERSCORE_REGEXP_2=/\-|\s+/g;__cov_ya$k0LwY_9RpUhWvryOvCA.s['4']++;Y.mix(Util,{decamelize:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['2']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['5']++;return str.replace(STRING_DECAMELIZE_REGEXP,'$1_$2').toLowerCase();},dasherize:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['3']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['6']++;var cache=STRING_DASHERIZE_CACHE,hit=cache.hasOwnProperty(str),ret;__cov_ya$k0LwY_9RpUhWvryOvCA.s['7']++;if(hit){__cov_ya$k0LwY_9RpUhWvryOvCA.b['1'][0]++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['8']++;return cache[str];}else{__cov_ya$k0LwY_9RpUhWvryOvCA.b['1'][1]++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['9']++;ret=this.decamelize(str).replace(STRING_DASHERIZE_REGEXP,'-');__cov_ya$k0LwY_9RpUhWvryOvCA.s['10']++;cache[str]=ret;}__cov_ya$k0LwY_9RpUhWvryOvCA.s['11']++;return ret;},camelize:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['4']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['12']++;return str.replace(STRING_CAMELIZE_REGEXP,function(match,separator,chr){__cov_ya$k0LwY_9RpUhWvryOvCA.f['5']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['13']++;return chr?(__cov_ya$k0LwY_9RpUhWvryOvCA.b['2'][0]++,chr.toUpperCase()):(__cov_ya$k0LwY_9RpUhWvryOvCA.b['2'][1]++,'');}).replace(/^([A-Z])/,function(match,separator,chr){__cov_ya$k0LwY_9RpUhWvryOvCA.f['6']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['14']++;return match.toLowerCase();});},classify:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['7']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['15']++;var parts=str.split('.'),out=[];__cov_ya$k0LwY_9RpUhWvryOvCA.s['16']++;for(var i=0,l=parts.length;i<l;i++){__cov_ya$k0LwY_9RpUhWvryOvCA.s['17']++;var camelized=this.camelize(parts[i]);__cov_ya$k0LwY_9RpUhWvryOvCA.s['18']++;out.push(camelized.charAt(0).toUpperCase()+camelized.substr(1));}__cov_ya$k0LwY_9RpUhWvryOvCA.s['19']++;return out.join('.');},underscore:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['8']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['20']++;return str.replace(STRING_UNDERSCORE_REGEXP_1,'$1_$2').replace(STRING_UNDERSCORE_REGEXP_2,'_').toLowerCase();},capitalize:function(str){__cov_ya$k0LwY_9RpUhWvryOvCA.f['9']++;__cov_ya$k0LwY_9RpUhWvryOvCA.s['21']++;return str.charAt(0).toUpperCase()+str.substr(1);}});__cov_ya$k0LwY_9RpUhWvryOvCA.s['22']++;Y.RUtil=Util;},'gallery-2013.08.22-21-03',{'requires':['yui-base']});
