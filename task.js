function get_tweet(){
	console.log("hi");
	var tweet = document.getElementById('text_area').value;
	if(tweet.length<140){
		var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweet);
		window.open(twtLink,'_blank');

	}
	else if(tweet.length<280){
    	var tweet1 = tweet.substring(0, 140);
		var twtLink1 = 'http://twitter.com/home?status=' +encodeURIComponent(tweet1);
		var tweet2 = tweet.substring(141, tweet.length);
		var twtLink2 = 'http://twitter.com/home?status=' +encodeURIComponent(tweet2);
		var url = [twtLink1,twtLink2];
    }
    else{
    	var tweet1 = tweet.substring(0, 140);
		var twtLink1 = 'http://twitter.com/home?status=' +encodeURIComponent(tweet1);
		var tweet2 = tweet.substring(141,280);
		var twtLink2 = 'http://twitter.com/home?status=' +encodeURIComponent(tweet2);
		var tweet3 = tweet.substring(281, tweet.length);
		var twtLink3 = 'http://twitter.com/home?status=' +encodeURIComponent(tweet3);
		var url = [twtLink1,twtLink2,twtLink3];
    }
	var k=0;
	while(k!=url.length){
		window.open(url[k],'_blank');
		k++;
	}
}

function tweetcount() {
    var tweet = document.getElementById("text_area");
    if(tweet.value.length<=140){
    	document.getElementById('tweet_result1').innerHTML = tweet.value.substring(0,tweet.length);
    }
    else if(tweet.value.length<280){
    	document.getElementById('tweet_result1').innerHTML = tweet.value.substring(0,140);
    	document.getElementById('tweet_result2').innerHTML = tweet.value.substring(141,tweet.length);
    }
    else{
    	document.getElementById('tweet_result1').innerHTML = tweet.value.substring(0,140);
    	document.getElementById('tweet_result2').innerHTML = tweet.value.substring(141,280);
    	document.getElementById('tweet_result3').innerHTML = tweet.value.substring(281,tweet.length);
    }
}