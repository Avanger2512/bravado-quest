import Vue from "vue";

Vue.filter('highlight', function(words, query){
  let iQuery = new RegExp(query, "ig");
  return words.toString().replace(iQuery, (matchedTxt) => {
    return `<span class="is-highlight">${matchedTxt}</span>`;
  });
});
