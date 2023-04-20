"use strict";

const TVMAZE_API_URL = "http://api.tvmaze.com/";
const MISSING_IMAGE_URL = "https://tinyurl.com/missing-tv";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
const $episodesList = $("#episodesList");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.

  const response = await axios.get("https://api.tvmaze.com/search/shows", {
    params: {
      q: term,
    }
  });

  return response.data.map(result => {
    // map the results of each entry into an array, (each show)
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : MISSING_IMAGE_URL,
    };
  });
}



/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  // fixed src show.image
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="Bletchly Circle San Francisco"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

/**  
 * This function uses the id of the show to get all the episodes and seasons of the particular show using the episodes button 
 * It Maps the data into a return array with {id,name,season,number}
*/
async function getEpisodesOfShow(id) {
  const response = await axios({
    baseURL: TVMAZE_API_URL,
    url: `shows/${id}/episodes`,
    method: "GET",
  });
  return response.data.map(e => ({
    id: e.id,
    name: e.name,
    season: e.season,
    number: e.number,
  }));
}


/**
 * This function first empties the previous episode list on the html page
 * It then loads every episode of evey season from getepisodesofshow saved into episodes variable in the getepisodesanddisplay function
 * each individual episode is put into an li in the ul of html page ( the episode list section at the bottom)
 * it includes episode name season and number
 * 
*/

function populateEpisodes(episodes) {
  $episodesList.empty();

  for (let episode of episodes) {
    const $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `);

    $episodesList.append($item);
  }

  $episodesArea.show();
}


/** Handle click on episodes button: get episodes for show and display */

async function getEpisodesAndDisplay(evt) {
  // here's one way to get the ID of the show: search "closest" ancestor
  // with the class of .Show (which is put onto the enclosing div, which
  // has the .data-show-id attribute).

  const showId = $(evt.target).closest(".Show").data("show-id");
  const episodes = await getEpisodesOfShow(showId);
  populateEpisodes(episodes);
}

$showsList.on("click", ".Show-getEpisodes", getEpisodesAndDisplay);