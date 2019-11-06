var zodiacs = [
{
	name: "Aries",
	month: "March 21 - April 20",
	description: "Aries - the Flying Ram Guided by the story of the Golden Fleece, an Aries is ready to be the hero of the day, fly away and carry many endangered, powerless people on their back. The power of the ram is carried on his back, for he is the gold itself, shiny and attractive to those ready for betrayal. The story of glory that isn't easy to carry is in these two horns, and if this animal doesn't get shorn, allowing change and giving someone a warm sweater, they won't have much to receive from the world. Each Aries has a task to share their position, power, gold, or physical strength with other people willingly, or the energy will be stopped in its natural flow, fear will take over, and the process of giving and receiving will hold balance at zero."

},
{
	name: "Taurus",
	month: "April 20 - May 2",
	description: "Taurus – the Wandering Bull Being the one who betrayed their best friend, goddess Hera herself, this is an unfortunate being that has to wander the Earth in order to find freedom. As if something was always poking them behind their back, reminding them of happiness that once was, stinging and pushing forwards, they close up in their own worlds, lonely and separated from their core. To find love, a Taurus has to travel the world, change perspective or make a shift in their entire belief system and their system of values."
},
{
	name: "Gemini",
	month: "May 21 - June 20",
	description: "Gemini - the Caring Twins There is so much childish innocence in the nature of Gemini, telling their tale of brotherhood, love between best friends and relatives who are entirely different by character, circumstances, physical appearance or upbringing. They are in this world to mend differences and make them feel right, ready to give their life for a brother or a friend. Gemini Love and Sex Fun and always ready for an intellectual challenge, Gemini sees love first through communication and verbal contact, and find it as important as physical contact with their partner. When these two combine, obstacles all seem to fade. Inquisitive and always ready to flirt, a Gemini could spend a lot of time with different lovers until they find the right one who is able to match their intellect and energy. They need excitement, variety and passion, and when they find the right person, a lover, a friend and someone to talk to combined into one, they will be faithful and determined to always treasure their heart."
},
{
	name: "Cancer",
	month: "June 21 - July 22",
	description: "Cancer - the Brave Crab Sent to this Earth by something they believe in, only to mess with someone bigger than they are, this isn't an animal aware of their strength. Patriotism can make them endanger their own wellbeing, fighting for someone else's cause, as if others can become their higher power. The Crab knows where they're going, but this is often in a wrong direction, at least until they learn their lessons and start relying solely on themselves."
},
{
	name: "Leo",
	month: "July 23 - August 22",
	description: "Leo - the Lion in the Cave The story of the Lion always speaks of bravery. This is an animal fearless and impossible to challenge, hurt or destroy, their only weaknesses being fear and aggression towards those they confront. Living in a cave, a Lion always needs to have one, nesting and finding comfort in hard times. However, they should never stay there for long. With their head high, they have to face others with dignity and respect, never raising a voice, a hand, or a weapon, bravely walking through the forest they rule."
},
{
	name: "Virgo",
	month: "August 23 - September 22",
	description: "Virgo – the Disappointed Goddess Seeking goodness in humankind is the story of Virgo, and disappointment seems to be inevitable from their point of view. The first time they came from their cloud and jumped onto planet Earth, it felt like their mission is to use their existence for good, discovering ways of justice and purity in other people. Once they fail to find it too many times, Virgos will pull away, get lost, turn to substance abuse, or simply separate from other people to sit on the bench, criticize and judge."
},
{
	name: "Libra",
	month: "September 23 - October 22",
	description: "Libra – The Measure of Our Souls The shortest myth of them all seems to present a good analogy to the shortest constellation in the sky, you might even say that it is non-existent, presented by the pliers of Scorpio. Libra is one dot of balance in the sea of different extremes, manifested only through the fifteenth degree of this magnificent sign, an object among animals and people. There is something awfully insecure about Libra, as if they were unsure which plate to burden next, aware that things pass and teach us to be careful around other people. Whatever we do in our lifetimes, only serves to point the way for our Souls towards that “higher power” to finally measure our existence. Telling us where we went wrong or what we did right, Libras unconsciously teach us that true liberation hides in lightness."
},
{
	name: "Scorpio",
	month: "October 23 - November 21",
	description: "Scorpio is the most sensual sign of the zodiac. Scorpios are extremely passionate and intimacy is very important to them. They want intelligent and honest partners. Once Scorpios fall in love, they are very dedicated and faithful. However, they enter into a relationship very carefully, because sometimes they need a lot of time to build trust and respect for partners."
},
{
	name: "Sagittarius",
	month: "November 22 - December 21",
	description: "Freedom is their greatest treasure, because only then they can freely travel and explore different cultures and philosophies. Because of their honesty, Sagittarius-born are often impatient and tactless when they need to say or do something, so it's important to learn to express themselves in a tolerant and socially acceptable way."
},
{
	name: "Capricorn",
	month: "December 22 - January 19",
	description: "Capricorn – the Goat of Fear A goat with the tail of a fish is created to face fear and create panic. It is the sign of decisions made to be protected from monsters in our minds, lives, and immediate physical surrounding. Always ready to transform into something that scares those scary things off, Capricorn speaks of each natural chain reaction of fear, where one scary thing leads to many others, rising up as defensive mechanisms that only make things worse. Immersed in their secrecy, they face the world just as they are – brave enough to never run away, but constantly afraid of their inner monsters."
},
{
	name: "Aquarius",
	month: "January 20 - February 18",
	description: "Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities."
},
{
	name: "Pisces",
	month: "February 19 - March 20",
	description: "Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring."
}

]

function getData(){
	var userSearch = document.getElementById('user-search').value.toLowerCase();

	for (var i = 0; i < zodiacs.length; i++) {
		if (userSearch === zodiacs[i].name.toLowerCase()){
			document.getElementById('text-result').innerHTML = zodiacs[i].description;
		}
	}

}