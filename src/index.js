import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const arrAbuse = [
	"Shit",
	"Crap",
	"fool",
	"idiot",
	"nigger",
	"whore",
	"slut",
	"bitch",
	"freak",
	"douchebag",
	"gay",
	"faggot",
	"homo",
	"bastard",
	"asshole",
	"jerk",
	"pussy",
	"cunt",
	"loser",
	"sucker",
	"nerd",
	"noob",
	"dumb",
	"retard",
	"nazi",
	"Motherfucker",
	"hooker",
	"poop",
	"dickhead",
	"munter",
];
// const addNumber = [
// 	1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
// ]
root.render(<App arrAbuse={arrAbuse} />);