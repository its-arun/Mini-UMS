# Mini-UMS
Back-end for Mini UMS App

<p align="center">
  <h1>Seems like bug has been fixed by Lovely Infotech. You can use this source to learn how I fetched data through a flawed Web Service.</h1>
</p>

## Bug Story: 

I won't go ahead explaining how the whole thing worked but I will tell you the bullet points and you can connect them. So LPU Touch application fetches data from a webservice which is situated at /UmsWebService/UmsWebService.svc/ There are multiple services running such as getstaffinformation, gettimetable, getmessages etc. but all of them needed 3 things to work 1. UID - that's your registration number 2. Push Token and 3. Device ID. Most of the services were working as they were supposed to be, with 3 essential inputs but one. Which was Get StudentBasicInfoForService. So what was needed to get Student basic information? yes you guessed it right UID, PushToken and Device ID. I decided to play around a little and served StudentBasicInfoForService with 1 parameter which was UID, yes I got an error Endpoint not found which meant that I needed to pass all the three parameters in order to get data. So I went ahead and passed pushtoken=undefined and deviceid=undefined and guess what? The request got processed and I was able to see data in JSON format. I could see anyone's basic information just by changing uid to what I want and other parameters to undefined. Now the challenge was to make data human readable. This is where javascript came into play, you can see jquery file in /js/ to see what I did. I also made an android application which might have been come in handy and fun maybe if Lovely Infotech would had allowed me to publish it but you know I don't have permission to invade anyone's privacy. It was great to see how Lovely Infotech fixed the issue.
