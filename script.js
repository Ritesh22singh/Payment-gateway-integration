(function(){
    var d = document;
    var x = !d.getElementById('donate')
    if(x) {
        var s = d.createElement('script'); 
        s.defer = !0;
        s.id = 'razorpay-embed-btn-js';
        s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
        d.body.appendChild(s);
    }
    else {
        var rzp=window['__rzp__'];
        rzp && rzp.init && rzp.init()
    }
  })();