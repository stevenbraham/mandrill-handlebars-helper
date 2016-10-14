`TL/DR: This is a program that allows you to compile Handlebars html files from json stored on your computer. When you save your html file, it will auto update the output`

### What is this? ###

Lately at my work I have to create a lot of e-mail templates in [Mandrill](https://www.mandrill.com/) using [Handlears](http://handlebarsjs.com/). The data in these e-mail's is injected by an API call. To test my templates, I would have to send an API call and wait for a response in my inbox.

That’s why I wrote this open source tool. With this tool I can look how templates look using sample data from a API call stored in a JSON file. Even though it is primarily meant for e-mail templates, it should work for other applications.

In fact, this tool supports all Handlebars expressions as long your json matches with the variables in your html file. It also can be used completely offline.
### File example ###

If your html looks like this:
```html
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```
Your JSON file should like this:
```json
{
  "title": "My New Post",
  "body": "Hello world"
}
```
Just like regular Handlebars.
### How to build ###
1. If you haven't already, please install the latest [NodeJS version for your OS](https://nodejs.org/)
2. Clone this repository
3. Run `npm install`
### How to use ###
1. Run `npm start`
2. A dialog will popup asking you for a html and json file
3. Drag your files into the appropriate textboxes *(Be sure to be precise or the chromium wrapper will think that you want to open the file in the current window, if this happens restart the application)*
4. Hit Start
5. The internal webserver will start and loads your files. Afterwards your default browser should go to *http://localhost:20755*
6. Just save your files after an edit and refresh your browser window. The server will automatically serve the latest version of your html and json.

### Credits ###
This tool uses the following open source frameworks or libraries:
* NodeJs
* Electron
* jQuery


**Mandrill and Handlebars.js belong to their respective owners and are in no way affiliated with this project** 
