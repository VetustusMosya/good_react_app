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
	// "nigger",
	// "whore",
	// "slut",
	// "bitch",
	// "freak",
	// "douchebag",
	// "gay",
	// "faggot",
	// "homo",
	// "bastard",
	// "asshole",
	// "jerk",
	// "pussy",
	// "cunt",
	// "loser",
	// "sucker",
	// "nerd",
	// "noob",
	// "dumb",
	// "retard",
	// "nazi",
	// "Motherfucker",
	// "hooker",
	// "poop",
	// "dickhead",
	// "munter",
	// "put button",

];
root.render(<App arrAbuse={arrAbuse} />);