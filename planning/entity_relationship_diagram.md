# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

[👉🏾👉🏾👉🏾 List each table in your diagram]

## Add the Entity Relationship Diagram

1. users
2. groups
3. playlists

[👉🏾👉🏾👉🏾 Include an image or images of the diagram below. You may also wish to use the following markdown syntax to outline each table, as per your preference.]

Users
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| username | varchar | name of the user account |
| role | varchar | admin or listener |
| password | varchar | password of user account |
| points | integer | points accumulated by the user |
| age | integer | user's age |

groups
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| type | varchar | private, public or temporary group |
| number_of_users | integer | number of users in the group|
| title | varchar | name of group |
| age_restricted | char | if group is only allowed for users 18+ |
| last_active | date | date the group was last used|
| admin | varchar | user who runs the group|

playlists
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| group_id | integer | foreign key |
| queue | list | songs to play|

<img width="587" alt="image" src="https://github.com/qngyn/myousic/assets/98564135/b760ee8e-072b-4f91-9e95-d1e785338575">



