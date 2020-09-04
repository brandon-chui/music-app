# Music Search App

Music Search App built in React using the Spotify API.

### Installation
In the project directory, please run:

`npm install`
<br/>
`npm run build`
<br/>
`npm run start`

 `npm start` - Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Usage and Features

You must login to your spotify account in order to use this app.

### Search
In this app, there are 4 different search functions:

1. Search Artists - displays artists matching input
2. Search Albums - displays albums matching input
3. Search Albums by Artist - displays albums matching input in artists and album
4. Search Tracks - displays tracks matching input

You can click on any of the search results to redirect to the correlating spotify webpage.

### Sort by Popularity

Artists and Tracks have a popularity rating attached to them. You can sort your results by popularity with a click of a button.


## Design Decisions

### Tech / Libraries
This App was built using React leveraging `create-react-app` 

I used React's built in useReducer instead of Redux because we only needed to manage the state on one page. I could have used another reducer to update the state when searching but the state was simple enough to met managed by a setState. I also leveraged `spotify-web-api-js` to make my API calls simpler and easy to read.

### UI

My design was mainly based off of the provided prompt. I used a bit of material UI to simply creating the search bars. Artists/Albums have a different design than Tracks. I tried to mimic what you would normally see when you play a track off Spotify.

## Future Improvements

Make it into a Spotify clone.

### Search
Right now, I am removing the previous search input because the search is very simple - it cannot handle inputs in all three inputs. I would improve the search to just a single input and add resulting artists, albums, and tracks based on the single input (similar to Spotify's search). Maybe include an autocomplete / search as you type functionality.

### Result List
1. Add a button to copy and share the artist/album/track
2. Add an icon to favorite the item. The favorited items could be listed on the side.
3. Paginate search results. 
4. More functionality to list items
   - Artist: create new list showing albums by artist
   - Album: create new list with tracks in the album
   - Track: Allow preview of song


  

