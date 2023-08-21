---
title: "WebRTC For Beginners - Part 1"
metaTitle: "WebRTC For Beginners"
metaDesc: "WebRTC For Beginners"
socialImage: assets/images/webrtc.jpg
date: "2022-01-12"
tags:
	- webrtc
---
# hello

Contents:
1. Part 1: Introduction to WebRTC and creating the signaling server [Link](https://dev.to/ethand91/webrtc-for-beginners-1l14)
2. Part 2: Understanding the MediaDevices API and getting access to the user’s media devices [Link](https://dev.to/ethand91/webrtc-for-beginners-part-2-mediadevices-142d)
3. Part 3: Creating the peers and sending/receiving media [Link] (https://dev.to/ethand91/webrtc-for-beginners-part-3-creating-the-peers-and-sendingreceiving-media-4lab)
4. Part 4: Sharing and sending the user’s display and changing tracks [Link](https://dev.to/ethand91/webrtc-for-beginners-part-4-screen-share-42p6)
5. Part 5: Data Channels basics [Link] (https://dev.to/ethand91/webrtc-for-beginners-part-5-data-channels-l3m)
6. Part 5.5: Building the WebRTC Android Library [Link](https://dev.to/ethand91/webrtc-for-beginners-part-55-building-the-webrtc-android-library-e8l)
7. Part 6: Android native peer [Link](https://dev.to/ethand91/webrtc-for-beginners-part-6-android-231l)
8. Part 7: iOS native peer
9. Part 8: Where to go from here

- - - -
### Part 1: Introduction to WebRTC and creating the signaling server

Hello, due to finding not too much information regarding WebRTC I have decided to create a tutorial. Hopefully it is helpful to anyone looking into trying out WebRTC. 

While WebRTC is not a new technology it is constantly evolving. I will try to update this as new changes occur. 

WebRTC is short for (Web Real-Time Communication), and allows Peers to send/receive media/data via P2P.

Before we dive into the fun parts, we need to set up a Signaling server so that the peers can initially communicate, the protocol for this can be anything but it usually ends up being WebSockets. It’s also possible after the initial signaling is complete to use Data Channels, which we will leave until later. 

With that being said, let’s start on creating the signaling server.
The signaling server can be any language, but for simplicity’s sake I will be using JavaScript and Nodejs.
Since WebRTC does not work on insecure addresses we will also need to provide a self signed certificate. (Don’t used self signed if you’re planning to take it to production.)

Requirements:
* A Computer (obviously)
* Nodejs

IDE can be anything of your choice. I generally prefer Vim, since I’m always using the terminal.
Well then let’s get started!

First create a directory for the server and initialize the application.


Like me work? Any support is appreciated. :)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ethand9999)