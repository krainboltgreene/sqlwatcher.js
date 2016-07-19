# sqlwatcher

Watch SQL files and have them automatically executed on a database. Perfect for handling a set of SQL functions you're working on.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

First have a directory of SQL files:

```
├── designer_matching/
│   ├── array_search.sql
│   ├── client_room_score.sql
│   ├── designer_room_score.sql
│   ├── matching_score.sql
│   ├── raw_room_score.sql
│   ├── raw_style_score.sql
│   └── style_score.sql
└── rewrite_activities_for_v2_activities.sql
```

Each of these `designer_matching/` files is a function, view, or table. While working on these functions you'll find yourself wanting to have them update the server's version. This is where sqlwatcher comes in:

```
$ sqlwatcher adapter:pg pattern:designer_matching/*.sql
```

Now when you change those files, you'll also be executing those files.


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/sqlwatcher.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/sqlwatcher.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/sqlwatcher.js.svg?maxAge=2592000&style=flat-square
