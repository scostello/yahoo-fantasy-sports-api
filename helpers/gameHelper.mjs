import { mapPlayer } from "./playerHelper.mjs";
// var teamHelper = require("./teamHelper.js");

export const mapLeagues = ls => {
  // TODO: clean this up?
  const count = ls.count;
  const leagues = [];

  for (let i = 0; i < count; i++) {
    leagues.push(ls[i].league[0]);
  }

  return leagues;
};

// todo: again, this should be more re-usable
export const mapPlayers = ps => {
  // TODO: clean this up?
  const count = ps.count;
  let players = [];

  for (let i = 0; i < count; i++) {
    players.push(ps[i].player[0]);
  }
  players = players.map(p => mapPlayer(p));

  return players;
};

export const mapWeeks = ws => {
  // TODO: clean this up?
  const count = ws.count;
  const weeks = [];

  for (let i = 0; i < count; i++) {
    weeks.push(ws[i].game_week);
  }

  return weeks;
};

export const mapStatCategories = statcats => {
  statcats = statcats.map(s => s.stat);

  // additional cleanup...
  statcats = statcats.map(statcat => {
    if ("undefined" != typeof statcat.position_types) {
      statcat.position_types = statcat.position_types.map(
        pt => pt.position_type
      );
    }

    if ("undefined" != typeof statcat.base_stats) {
      statcat.base_stats = statcat.base_stats.map(bs => bs.base_stat.stat_id);
    }

    return statcat;
  });

  return statcats;
};

export const mapPositionTypes = positions => {
  return positions.map(p => p.position_type);
};

export const mapRosterPositions = positions => {
  return positions.map(p => p.roster_position);
};

// exports.mapTeams = function(teams) {
//   teams = _.filter(teams, function(t) {
//     return typeof t === "object";
//   });
//   teams = _.map(teams, function(t) {
//     return teamHelper.mapTeam(t.team[0]);
//   });

//   return teams;
// };

// exports.parseCollection = function(games, subresources) {
//   var self = this;

//   games = _.filter(games, function(g) {
//     return typeof g === "object";
//   });
//   games = _.map(games, function(g) {
//     return g.game;
//   });
//   games = _.map(games, function(g) {
//     var game = g[0];

//     _.forEach(subresources, function(resource, idx) {
//       switch (resource) {
//         case "leagues":
//           game.leagues = self.mapLeagues(g[idx + 1].leagues);
//           break;

//         case "players":
//           game.players = self.mapPlayers(g[idx + 1].players);
//           break;

//         case "game_weeks":
//           game.game_weeks = self.mapWeeks(g[idx + 1].game_weeks);
//           break;

//         case "stat_categories":
//           game.stat_categories = self.mapStatCategories(
//             g[idx + 1].stat_categories.stats
//           );
//           break;

//         case "position_types":
//           game.position_types = self.mapPositionTypes(
//             g[idx + 1].position_types
//           );
//           break;

//         case "roster_positions":
//           game.roster_positions = self.mapRosterPositions(
//             g[idx + 1].roster_positions
//           );
//           break;

//         case "teams":
//           game.teams = self.mapTeams(g[idx + 1].teams);
//           break;

//         default:
//           break;
//       }
//     });

//     return game;
//   });

//   return games;
// };