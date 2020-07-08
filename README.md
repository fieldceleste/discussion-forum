# **Discussion Forum**

#### Author: **Jessica Hvozdovich and Celeste Field**
#### July 7, 2020

![Add post gif](./public/giphy1.gif)

![Add post gif](./public/giphy2.gif)

![Add post gif](./public/giphy3.gif)

### Description

_This application uses React with create-react-app, components, JSX, and props while building a dynamic site with Redux. Users can submit posts via a form, they are posted with a timestamp, and users can upvote or downvote posts and change their ranking in the display._

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/fieldceleste/discussion-forum.git
cd discussion-forum
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
```
npm install
```
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.
```
npm run start
```

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/fieldceleste/discussion-forum/issues) here on GitHub._

### Technologies Used

* JavaScript
* React
* Redux
* JSX
* HTML
* Git and GitHub

![Component Diagram](./public/discussion-forum.png)

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **As a user, I want to enter content into a form and submit to create a new post.** | User Input:"Username: jhvozdovich, Post: I love cats!" | Output: “I love cats! -jhvozdovich" |
| **As a user, I want my new posts to include a timestamp. And I want to see when other listings were posted, too** | User Input:"CelesteF, Post: Hello world! - Celeste | Output: “I love cats! -jhvozdovich 11:02, Hello world! - Celeste 11:21" |
| **As a user, I want to upvote posts I particularly enjoy.** | User Input:"Upvotes: 72 Downvotes: 4 Click: Upvote" | Output: “Upvotes: 73 Downvotes: 4 " |
| **As a user, I want to downvote posts I don't like, or find inappropriate.** | User Input:"Upvotes: 72 Downvotes: 4 Click: Downvote" | Output: “Upvotes: 72 Downvotes: 5 " |
| **As a user, I'd like posts with the most upvotes to appear higher on the page.** | User Input:"Upvotes: 72 Downvotes:4" | Output: “Hello world! - Celeste 11:21 Upvotes: 72 Downvotes: 4, I love cats! -jhvozdovich 11:02  Upvotes: 12 Downvotes: 7  "  |

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jessica Hvozdovich and Celeste Field_**
