$(function() {
    $('.coderitem').each(function(i, obj) {
        var style = document.createElement('style');
        style.type = 'text/css';
        r = Math.random()*5 + 3;
        fxs = ['cyber-glitch-0', 'cyber-glitch-1', 'cyber-glitch-2']
        fx= fxs[Math.floor(Math.random()*fxs.length)];
        style.innerHTML = '.cyberglitcher'+i+'  {animation: '+ fx +' '+ r +'s linear infinite}' ;
        document.getElementsByTagName('head')[0].appendChild(style);
        classname = 'cyberglitcher'+i
        $(this).addClass(classname);
        // document.getElementById('someElementId').className = 'cyberglitcher'+i;
    });
    $('.eventitem').each(function(i, obj) {
        var style = document.createElement('style');
        style.type = 'text/css';
        r = Math.random()*5 + 3;
        fxs = ['cyber-glitch-0', 'cyber-glitch-1', 'cyber-glitch-2']
        fx= fxs[Math.floor(Math.random()*fxs.length)];
        style.innerHTML = '.cyberglitcher'+i+'  {animation: '+ fx +' '+ r +'s linear infinite}' ;
        document.getElementsByTagName('head')[0].appendChild(style);
        classname = 'cyberglitcher'+i
        $(this).addClass(classname);
        // document.getElementById('someElementId').className = 'cyberglitcher'+i;
    });
});