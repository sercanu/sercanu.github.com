var links = [ 
{"link":"none", "url":"", "category":"general", "date":"2000-01-01"},
{"link":"none", "url":"", "category":"general", "date":"2000-01-01"},
{"link":"History of Bosphorus", "url":"https://en.wikipedia.org/wiki/Bosphorus", "category":"general", "date":"2015-12-26"},
{"link":"criticalpast.com", "url":"http://www.criticalpast.com/", "category":"useful", "date":"2015-12-31"},
{"link":"World Migration Map", "url":"http://www.iom.int/world-migration", "category":"general", "date":"2015-12-26"},
{"link":"What if XKCD", "url":"https://what-if.xkcd.com/", "category":"follow", "date":"2015-12-25"},
{"link":"103.000€ Speeding Ticket", "url":"http://www.theatlantic.com/business/archive/2015/03/finland-home-of-the-103000-speeding-ticket/387484/", "category":"general", "date":"2015-11-30"},
{"link":"Where is Amalfi Coasts", "url":"https://en.wikipedia.org/wiki/Amalfi_Coast", "category":"general", "date":"2015-12-31"},
{"link":"actualized.org", "url":"http://www.actualized.org/", "category":"follow", "date":"2015-12-31"},
{"link":"Who is Andy Kaufman?", "url":"https://en.wikipedia.org/wiki/Andy_Kaufman", "category":"general", "date":"2015-12-30"},
{"link":"The Man Who Invented a Colour", "url":"http://www.bbc.com/culture/story/20140828-the-man-who-invented-a-colour", "category":"general", "date":"2015-12-30"},
{"link":"What is Stroop Effect?", "url":"https://en.wikipedia.org/wiki/Stroop_effect", "category":"general", "date":"2015-12-25"},
{"link":"History of Trivia", "url":"https://www.youtube.com/watch?v=d2_8GO_wYT0", "category":"general", "date":"2015-12-24"},
{"link":"What is Fomo?", "url":"https://en.wikipedia.org/wiki/Fear_of_missing_out", "category":"general", "date":"2015-12-23"},
{"link":"What is Nomophobia?", "url":"https://en.wikipedia.org/wiki/Nomophobia", "category":"general", "date":"2015-12-23"},
{"link":"What is Pyrrhic victory?", "url":"https://en.wikipedia.org/wiki/Pyrrhic_victory", "category":"general", "date":"2015-12-22"},
{"link":"What is Sayre’s law?", "url":"https://en.wikipedia.org/wiki/Sayre%27s_law", "category":"general", "date":"2015-12-22"},
{"link":"What is Lunar Distance?", "url":"https://en.wikipedia.org/wiki/Lunar_distance_%28navigation%29", "category":"general", "date":"2015-12-22"},
{"link":"What is Animism?", "url":"https://en.wikipedia.org/wiki/Animism", "category":"general", "date":"2015-12-21"},
{"link":"Where is Liberia?", "url":"https://en.wikipedia.org/wiki/Liberia", "category":"general", "date":"2015-12-21"},
{"link":"Where is Xinjiang?", "url":"https://en.wikipedia.org/wiki/Xinjiang", "category":"general", "date":"2015-12-21"},
{"link":"Who is Mihail Bahtin?", "url":"https://tr.wikipedia.org/wiki/Mihail_Bahtin", "category":"general", "date":"2015-12-21"},
{"link":"Why we should go to Mars?", "url":"https://www.youtube.com/watch?v=plTRdGF-ycs", "category":"general", "date":"2015-12-20"},
{"link":"Where US dollar is used?", "url":"https://en.wikipedia.org/wiki/International_use_of_the_U.S._dollar", "category":"general", "date":"2015-12-18"},
{"link":"What is peace symbol?", "url":"http://history1900s.about.com/od/1950s/qt/peacesymbol.htm", "category":"general", "date":"2015-12-18"},
{"link":"Year 2038 Problem", "url":"https://en.wikipedia.org/wiki/Year_2038_problem", "category":"general", "date":"2015-12-17"},
{"link":"Where is Mari El?", "url":"https://en.wikipedia.org/wiki/Mari_El", "category":"general", "date":"2015-12-15"},
{"link":"The Twisted Linguistics of Turkey", "url":"http://theplate.nationalgeographic.com/2015/11/25/fowl-play-the-twisted-linguistics-of-turkey/", "category":"general", "date":"2015-11-25"},
{"link":"The 20 most influential books in history", "url":"https://agenda.weforum.org/2015/11/the-20-most-influential-books-in-history", "category":"general", "date":"2015-11-25"},
{"link":"Why can we sense when people are looking at us?", "url":"http://www.mnn.com/lifestyle/arts-culture/stories/why-can-we-sense-when-people-are-looking-us", "category":"general", "date":"2015-11-25"},
{"link":"Is Turkey considered to be more in Asia or in Europe?", "url":"http://qr.ae/7VnbDx", "category":"general", "date":"2015-11-20"},
{"link":"No Brainer", "url":"http://www.rifters.com/crawl/?p=6116", "category":"science&tech", "date":"2015-12-28"},
{"link":"Here are 4 key strategies for remembering everything you learn", "url":"http://www.sciencealert.com/here-are-4-key-strategies-for-remembering-everything-you-learn", "category":"science&tech", "date":"2015-12-23"},
{"link":"Journey to the Centre of the Earth", "url":"http://www.bbc.com/future/bespoke/story/20150306-journey-to-the-centre-of-earth/", "category":"science&tech", "date":"2015-12-20"},
{"link":"Wisdom the Albatross and Other Shockingly Old Moms", "url":"http://news.nationalgeographic.com/2015/12/151209-oldest-mothers-babies-wisdom-birds-animals-science/", "category":"science&tech", "date":"2015-12-18"},
{"link":"Google's quantum computer is 100 million times faster than your laptop", "url":"http://www.sciencealert.com/google-s-quantum-computer-is-100-million-times-faster-than-your-laptop", "category":"science&tech", "date":"2015-12-17"},
{"link":"Dancing Suitors", "url":"http://news.nationalgeographic.com/2015/12/151201-australia-peacock-spider-colorful-courtship-sex-animals-science/", "category":"science&tech", "date":"2015-12-10"},
{"link":"Control robots remotely with thoughts", "url":"http://www.sciencealert.com/paralysed-people-have-learnt-to-control-robots-remotely-with-their-thoughts", "category":"science&tech", "date":"2015-12-08"},
{"link":"How to control someone else’s arm with your mind", "url":"http://www.sciencealert.com/watch-here-s-how-to-control-someone-else-s-arm-with-your-mind", "category":"science&tech", "date":"2015-12-05"},
{"link":"Fifth taste - Umami", "url":"https://en.wikipedia.org/wiki/Umami", "category":"science&tech", "date":"2015-11-25"},
{"link":"3d printer guide", "url":"https://www.3dhubs.com/best-3d-printer-guide", "category":"science&tech", "date":"2015-11-23"},
{"link":"Clean power accumulation", "url":"http://www.sciencealert.com/underwater-balloons-could-give-us-a-new-way-of-storing-renewable-energy", "category":"science&tech", "date":"2015-11-20"},
{"link":"New Wi-fi technology transmits both energy and Internet from one router", "url":"http://www.sciencealert.com/new-wi-fi-technology-transmits-both-energy-and-internet-from-one-router", "category":"science&tech", "date":"2015-11-15"},
{"link":"Researchers have written quantum code on a silicon chip for the first time", "url":"http://www.sciencealert.com/researchers-have-written-quantum-code-on-a-silicon-chip-for-the-first-time", "category":"science&tech", "date":"2015-11-10"},
{"link":"Animal magnetic sense explained by tiny protein 'compasses'", "url":"http://www.sciencealert.com/animal-magnetic-sense-explained-by-tiny-protein-compasses", "category":"science&tech", "date":"2015-11-08"},
{"link":"Humans can sleep for days when living alone underground, experiments show", "url":"http://www.sciencealert.com/experiments-show-that-humans-can-sleep-for-days-when-living-alone-underground", "category":"science&tech", "date":"2015-11-05"},
{"link":"Scientists have found a gene that could be the key to growing food in space", "url":"http://www.sciencealert.com/scientists-have-found-a-gene-they-think-could-be-the-key-to-growing-food-in-space", "category":"science&tech", "date":"2015-11-05"},
{"link":"The deadly truth about loneliness", "url":"http://www.sciencealert.com/the-deadly-truth-about-loneliness", "category":"science&tech", "date":"2015-11-04"},
{"link":"Good thinking", "url":"https://news.mit.edu/2015/faculty-profile-kieran-setiya-1113", "category":"science&tech", "date":"2015-11-03"},
{"link":"Top 100 Science Articles, November 2015", "url":"http://scifeeds.com/scifeed-blog-post/top-100-science-articles-on-social-media-for-thursday-november-12-2015/", "category":"science&tech", "date":"2015-11-02"},
{"link":"Making sense of string theory", "url":"https://www.ted.com/talks/brian_greene_on_string_theory?language=en#t-719072", "category":"science&tech", "date":"2015-10-25"},
{"link":"7 Hobbies Science Says Will Make Your Brain Works Smarter And Faster", "url":"http://www.lifehack.org/310667/7-hobbies-science-says-will-make-your-brain-works-smarter-and-faster?dgs=1", "category":"science&tech", "date":"2015-10-24"},
{"link":"Antarctica is gaining more ice than it’s losing, NASA study finds", "url":"http://www.sciencealert.com/antarctica-is-gaining-more-ice-than-it-s-losing-nasa-study-finds", "category":"science&tech", "date":"2015-10-22"},
{"link":"Study suggests your pet cat is probably just as neurotic as you are", "url":"http://www.sciencealert.com/study-suggests-your-pet-cat-s-probably-just-as-neurotic-as-you-are", "category":"science&tech", "date":"2015-10-20"},
{"link":"Visiting Stars", "url":"https://www.youtube.com/watch?v=lD08CuUi_Ek", "category":"science&tech", "date":"2015-10-15"},
{"link":"What is the most awesome paradox?", "url":"https://www.quora.com/What-is-the-most-awesome-paradox", "category":"math", "date":"2015-12-10"},
{"link":"What is the most mind boggling example of a time travel paradox?", "url":"https://www.quora.com/What-is-the-most-mind-boggling-example-of-a-time-travel-paradox", "category":"math", "date":"2015-12-10"},
{"link":"What is your favourite example of a paradox?", "url":"https://www.quora.com/What-is-your-favourite-example-of-a-paradox", "category":"math", "date":"2015-12-10"},
{"link":"What are some of the most famous paradoxes?", "url":"https://www.quora.com/What-are-some-of-the-most-famous-paradoxes", "category":"math", "date":"2015-12-10"},
{"link":"17 Mind-Bending Paradoxes That Will Hurt Your Brain", "url":"http://www.buzzfeed.com/moerder/17-mind-bending-paradoxes-that-will-hurt-your-brain#.tuBJVqO8B", "category":"math", "date":"2015-12-10"},
{"link":"The Hundred Greatest Theorems", "url":"http://pirate.shu.edu/~kahlnath/Top100.html", "category":"math", "date":"2015-12-10"},
{"link":"Famous Theorems of Mathematics", "url":"https://en.wikibooks.org/wiki/Famous_Theorems_of_Mathematics", "category":"math", "date":"2015-12-08"},
{"link":"10 Famous Psychological Experiments That Could Never Happen Today", "url":"http://mentalfloss.com/article/52787/10-famous-psychological-experiments-could-never-happen-today", "category":"psychology", "date":"2015-12-05"},
{"link":"Famous Psychology Experiments", "url":"http://www.psychologycharts.com/famous-psychology-experiments.html", "category":"psychology", "date":"2015-12-05"},
{"link":"10 Mind-Boggling Paradoxes", "url":"http://mentalfloss.com/article/59040/10-mind-boggling-paradoxes", "category":"math", "date":"2015-12-04"},
{"link":"25 Mind Blowing Psychology Experiments", "url":"http://list25.com/25-intriguing-psychology-experiments/1/", "category":"psychology", "date":"2015-12-03"},
{"link":"The Ultimate Guide to Personal Productivity Methods", "url":"https://blog.todoist.com/2015/11/30/ultimate-guide-personal-productivity-methods/", "category":"improvement", "date":"2015-12-01"},
{"link":"Tools I Use To Learn, Work And Travel Anywhere", "url":"https://medium.com/digital-nomad-stories/tools-i-use-to-learn-work-and-travel-anywhere-b3b8d3aa259d#.ctkuowwyh", "category":"improvement", "date":"2015-11-28"},
{"link":"Why you should really start doing more things alone", "url":"https://www.washingtonpost.com/news/wonk/wp/2015/05/02/why-you-should-really-start-doing-more-things-alone/?tid=hybrid_experimentrandom_2_na", "category":"improvement", "date":"2015-11-25"},
{"link":"The right way to start a company", "url":"https://medium.com/@gerstenzang/the-right-way-to-start-a-company-8fe4932b59d0#.qprohia6r", "category":"improvement", "date":"2015-11-24"},
{"link":"The 37 Best Websites To Learn Something New", "url":"https://medium.com/life-learning/the-37-best-websites-to-learn-something-new-895e2cb0cad4#.wfab77bm2", "category":"improvement", "date":"2015-11-22"},
{"link":"How to Memorize Vocabulary", "url":"http://www.wikihow.com/Memorize-Vocabulary", "category":"improvement", "date":"2015-11-20"},
{"link":"2 Amazing Tips to Memorise English Words", "url":"http://www.myenglishteacher.eu/blog/2-amazing-tips-how-to-memorize-and-how-to-remember-english-words/", "category":"improvement", "date":"2015-11-15"},
{"link":"Mind Mapping 101: The Visual Way to Organize Information", "url":"http://computers.tutsplus.com/tutorials/mind-mapping-101-the-visual-way-to-organize-information--cms-21182", "category":"improvement", "date":"2015-11-12"},
{"link":"7 Things That Will Happen When You Start Doing Planks Every Day", "url":"http://www.lifehack.org/292578/7-things-that-will-happen-when-you-start-doing-planks-every-day?feq=daily&mid=20150729&ref=mail&uid=73806", "category":"improvement", "date":"2015-11-10"},
{"link":"Think Fast, Talk Smart: Communication Techniques", "url":"https://www.youtube.com/watch?v=HAnw168huqA", "category":"improvement", "date":"2015-11-08"},
{"link":"Explaining to my Dad why I quit my job", "url":"http://joshaust.in/2013/05/explaining-to-my-dad-why-i-quit-my-job/", "category":"improvement", "date":"2015-11-05"},
{"link":"The Corporate B.S. Generator", "url":"http://www.atrixnet.com/bs-generator.html", "category":"funny", "date":"2015-12-10"},
{"link":"A programmer wrote scripts to secretly automate a lot of his job", "url":"http://www.businessinsider.com/programmer-automates-his-job-2015-11", "category":"funny", "date":"2015-11-25"},
{"link":"Tap-Dancing Birds Revealed", "url":"http://news.nationalgeographic.com/2015/11/151019-dancing-birds-animals-science-nature-courtship/", "category":"funny", "date":"2015-11-20"},
{"link":"Smarter Everyday", "url":"https://www.youtube.com/user/destinws2", "category":"follow", "date":"2015-11-25"},
{"link":"Vsauce", "url":"https://www.youtube.com/channel/UC6nSFpj9HTCZ5t-N3Rm3-HA", "category":"follow", "date":"2015-11-25"},
{"link":"Should You Eat Yourself?", "url":"https://www.youtube.com/watch?v=kdrTQlClb08", "category":"funny", "date":"2015-11-20"},
{"link":"Aquarium", "url":"https://www.facebook.com/yannews/videos/1154384691299085/?fref=nf", "category":"funny", "date":"2015-11-22"},
{"link":"Drone Hunt", "url":"https://www.59saniye.com/tokyo-polisinin-izinsiz-ucan-dronelari-yakalamasi/", "category":"funny", "date":"2015-11-20"},
{"link":"Drone Under Water", "url":"https://www.59saniye.com/hum-su-altinda-hem-havada-gidebilen-drone/", "category":"funny", "date":"2015-11-20"},
{"link":"Disappearing Handkerchief Trick", "url":"https://www.youtube.com/watch?v=cgaX6qQ3Chc", "category":"funny", "date":"2015-11-20"},
{"link":"Unlocking a car with your Brain", "url":"https://www.youtube.com/watch?v=0Uqf71muwWc", "category":"funny", "date":"2015-11-20"},
{"link":"Paris 1910s", "url":"http://www.boredpanda.com/vintage-color-photos-paris-albert-kahn/?utm_source=facebook&utm_medium=link&utm_campaign=BPFacebook", "category":"photos", "date":"2015-11-25"},
{"link":"The Funniest Wildlife Photos In The World For 2015", "url":"http://lazypenguins.com/the-funniest-wildlife-photos-in-the-world-for-2015/", "category":"photos", "date":"2015-11-25"},
{"link":"Engineering Blogs", "url":"https://github.com/kilimchoi/engineering-blogs", "category":"useful", "date":"2015-11-25"},
{"link":"studyblue.com", "url":"https://www.studyblue.com/", "category":"useful", "date":"2015-11-25"},
{"link":"studymode.com", "url":"http://www.studymode.com/", "category":"useful", "date":"2015-11-25"},
{"link":"coursehero.com", "url":"https://www.coursehero.com/", "category":"useful", "date":"2015-11-25"},
{"link":"koofers.com", "url":"https://www.koofers.com/", "category":"useful", "date":"2015-11-25"},
{"link":"flashcardmachine.com", "url":"http://www.flashcardmachine.com/", "category":"useful", "date":"2015-11-25"},
{"link":"brainscape.com", "url":"https://www.brainscape.com/", "category":"useful", "date":"2015-11-25"},
{"link":"quizlet.com", "url":"https://quizlet.com/", "category":"useful", "date":"2015-11-25"},
{"link":"world-geography-games.com", "url":"http://world-geography-games.com/countries_continents.swf", "category":"useful", "date":"2015-11-25"},
{"link":"about.com", "url":"http://www.about.com/", "category":"useful", "date":"2015-11-25"},
{"link":"List_of_paradoxes", "url":"https://en.wikipedia.org/wiki/List_of_paradoxes", "category":"useful", "date":"2015-11-25"},
{"link":"List_of_theorems", "url":"https://en.wikipedia.org/wiki/List_of_theorems", "category":"useful", "date":"2015-11-25"},
{"link":"List_of_experiments", "url":"https://en.wikipedia.org/wiki/List_of_experiments", "category":"useful", "date":"2015-11-25"},
{"link":"list25.com", "url":"http://list25.com/", "category":"useful", "date":"2015-11-25"},
{"link":"omniglot.com", "url":"http://www.omniglot.com/", "category":"useful", "date":"2015-11-25"},
{"link":"getprismatic.com", "url":"http://getprismatic.com", "category":"useful", "date":"2015-11-25"},
{"link":"sciencealert.com", "url":"http://www.sciencealert.com/", "category":"useful", "date":"2015-11-25"},
{"link":"dvdvideosoft.com", "url":"http://www.dvdvideosoft.com/", "category":"useful", "date":"2015-11-25"},
{"link":"LifeProTips", "url":"https://www.reddit.com/r/LifeProTips", "category":"reddit", "date":"2015-01-01"},
{"link":"nonononoyes", "url":"https://www.reddit.com/r/nonononoyes", "category":"reddit", "date":"2015-01-01"},
{"link":"Creatures_of_earth", "url":"https://www.reddit.com/r/Creatures_of_earth", "category":"reddit", "date":"2015-01-01"},
{"link":"FanTheories", "url":"https://www.reddit.com/r/FanTheories", "category":"reddit", "date":"2015-01-01"},
{"link":"ColorizedHistory", "url":"https://www.reddit.com/r/ColorizedHistory/", "category":"reddit", "date":"2015-01-01"},
{"link":"AskHistorians", "url":"https://www.reddit.com/r/AskHistorians", "category":"reddit", "date":"2015-01-01"},
{"link":"goatparkour", "url":"https://www.reddit.com/r/goatparkour", "category":"reddit", "date":"2015-01-01"},
{"link":"IAmA", "url":"https://www.reddit.com/r/IAmA", "category":"reddit", "date":"2015-01-01"},
{"link":"todayilearned", "url":"https://www.reddit.com/r/todayilearned", "category":"reddit", "date":"2015-01-01"},
{"link":"science", "url":"https://www.reddit.com/r/science", "category":"reddit", "date":"2015-01-01"},
{"link":"AdviceAnimals", "url":"https://www.reddit.com/r/AdviceAnimals", "category":"reddit", "date":"2015-01-01"},
{"link":"whatisthisthing", "url":"https://www.reddit.com/r/whatisthisthing", "category":"reddit", "date":"2015-01-01"},
{"link":"tipofmytongue", "url":"https://www.reddit.com/r/tipofmytongue", "category":"reddit", "date":"2015-01-01"},
{"link":"internetisbeautiful", "url":"https://www.reddit.com/r/internetisbeautiful", "category":"reddit", "date":"2015-01-01"},
{"link":"explainlikeimfive", "url":"https://www.reddit.com/r/explainlikeimfive", "category":"reddit", "date":"2015-01-01"},
{"link":"dataisbeautiful", "url":"https://www.reddit.com/r/dataisbeautiful", "category":"reddit", "date":"2015-01-01"},
{"link":"getdisciplined", "url":"https://www.reddit.com/r/getdisciplined", "category":"reddit", "date":"2015-01-01"},
{"link":"Getmotivated", "url":"https://www.reddit.com/r/Getmotivated", "category":"reddit", "date":"2015-01-01"},
{"link":"Blowit", "url":"https://www.reddit.com/r/Blowit", "category":"reddit", "date":"2015-01-01"},
{"link":"fascinating", "url":"https://www.reddit.com/r/fascinating", "category":"reddit", "date":"2015-01-01"},
{"link":"DepthHub", "url":"https://www.reddit.com/r/DepthHub/", "category":"reddit", "date":"2015-01-01"},
{"link":"nostalgia", "url":"https://www.reddit.com/r/nostalgia", "category":"reddit", "date":"2015-01-01"},
{"link":"LearnUselessTalents", "url":"https://www.reddit.com/r/LearnUselessTalents/", "category":"reddit", "date":"2015-01-01"},
{"link":"Startups", "url":"https://www.reddit.com/r/Startups", "category":"reddit", "date":"2015-01-01"},
{"link":"PerfectTiming", "url":"https://www.reddit.com/r/PerfectTiming", "category":"reddit", "date":"2015-01-01"},
{"link":"animalsbeingbros", "url":"https://www.reddit.com/r/animalsbeingbros", "category":"reddit", "date":"2015-01-01"},
{"link":"nottheonion", "url":"https://www.reddit.com/r/nottheonion", "category":"reddit", "date":"2015-01-01"},
{"link":"Futurology", "url":"https://www.reddit.com/r/Futurology/", "category":"reddit", "date":"2015-01-01"},
{"link":"CrazyIdeas", "url":"https://www.reddit.com/r/CrazyIdeas", "category":"reddit", "date":"2015-01-01"},
{"link":"lifehacks", "url":"https://www.reddit.com/r/lifehacks/", "category":"reddit", "date":"2015-01-01"},
{"link":"UpliftingNews", "url":"https://www.reddit.com/r/UpliftingNews/", "category":"reddit", "date":"2015-01-01"},
{"link":"Frugal", "url":"https://www.reddit.com/r/Frugal", "category":"reddit", "date":"2015-01-01"},
{"link":"productivity", "url":"https://www.reddit.com/r/productivity", "category":"reddit", "date":"2015-01-01"},
{"link":"socialskills", "url":"https://www.reddit.com/r/socialskills/", "category":"reddit", "date":"2015-01-01"},
{"link":"Gadgets", "url":"https://www.reddit.com/r/Gadgets", "category":"reddit", "date":"2015-01-01"},
{"link":"AmazingTechnology", "url":"https://www.reddit.com/r/AmazingTechnology", "category":"reddit", "date":"2015-01-01"},
{"link":"Automate", "url":"https://www.reddit.com/r/Automate", "category":"reddit", "date":"2015-01-01"},
{"link":"AskTechnology", "url":"https://www.reddit.com/r/AskTechnology", "category":"reddit", "date":"2015-01-01"},
{"link":"Geek", "url":"https://www.reddit.com/r/Geek", "category":"reddit", "date":"2015-01-01"},
{"link":"IWantToLearn", "url":"https://www.reddit.com/r/IWantToLearn", "category":"reddit", "date":"2015-01-01"},
{"link":"howto", "url":"https://www.reddit.com/r/howto", "category":"reddit", "date":"2015-01-01"},
{"link":"askscience", "url":"https://www.reddit.com/r/askscience", "category":"reddit", "date":"2015-01-01"},
{"link":"diy", "url":"https://www.reddit.com/r/diy", "category":"reddit", "date":"2015-01-01"},
{"link":"indepthstories", "url":"https://www.reddit.com/r/indepthstories", "category":"reddit", "date":"2015-01-01"},
{"link":"YouShouldKnow", "url":"https://www.reddit.com/r/YouShouldKnow/", "category":"reddit", "date":"2015-01-01"},
{"link":"needadvice", "url":"https://www.reddit.com/r/needadvice/", "category":"reddit", "date":"2015-01-01"},
{"link":"minimalism", "url":"https://www.reddit.com/r/minimalism", "category":"reddit", "date":"2015-01-01"},
{"link":"oddlysatisfying", "url":"https://www.reddit.com/r/oddlysatisfying", "category":"reddit", "date":"2015-01-01"},
{"link":"Showerthoughts", "url":"https://www.reddit.com/r/Showerthoughts", "category":"reddit", "date":"2015-01-01"},
{"link":"h1z1", "url":"https://www.reddit.com/r/h1z1", "category":"reddit", "date":"2015-01-01"},
{"link":"chemicalreactiongifs", "url":"https://www.reddit.com/r/chemicalreactiongifs", "category":"reddit", "date":"2015-01-01"},
{"link":"design", "url":"https://www.reddit.com/r/design", "category":"reddit", "date":"2015-01-01"},
{"link":"graphic_design", "url":"https://www.reddit.com/r/graphic_design/top/", "category":"reddit", "date":"2015-01-01"},
{"link":"photoshopbattles", "url":"https://www.reddit.com/r/photoshopbattles", "category":"reddit", "date":"2015-01-01"},
{"link":"designthought", "url":"https://www.reddit.com/r/designthought", "category":"reddit", "date":"2015-01-01"},
{"link":"reddit-top-200-subreddits-categorized", "url":"http://www.dailydot.com/news/reddit-top-200-subreddits-categorized/", "category":"reddit", "date":"2015-01-01"},
{"link":"37-mind-expanding-subreddits", "url":"http://www.refinethemind.com/37-mind-expanding-subreddits/", "category":"reddit", "date":"2015-01-01"},
{"link":"reddit-mind-44-smart-subreddits", "url":"http://www.refinethemind.com/reddit-mind-44-smart-subreddits/", "category":"reddit", "date":"2015-01-01"},
{"link":"What-are-some-must-follow-subreddits", "url":"https://www.quora.com/Reddit-website/What-are-some-must-follow-subreddits", "category":"reddit", "date":"2015-01-01"},
{"link":"redditlist.com", "url":"http://redditlist.com/", "category":"reddit", "date":"2015-01-02"},
{"link":"the-top-50-subreddits", "url":"http://dailytekk.com/2014/02/19/the-top-50-subreddits/?reading=continue", "category":"reddit", "date":"2015-01-01"},
{"link":"reddit-top-200-subreddits-categorized", "url":"http://www.dailydot.com/news/reddit-top-200-subreddits-categorized/", "category":"reddit", "date":"2015-01-01"},
{"link":"eddit-mind-44-smart-subreddits", "url":"http://www.refinethemind.com/reddit-mind-44-smart-subreddits/", "category":"reddit", "date":"2015-01-01"}
];


var queues = [ 
{"link":"The Origins of Political Order", "url":"http://www.amazon.com/The-Origins-Political-Order-Revolution/dp/0374533229", "category":"book", "date":"2015-12-01", "completedOn":""},
{"link":"The Man From Earth", "url":"http://www.imdb.com/title/tt0756683/", "category":"movie", "date":"2015-12-01", "completedOn":""},
{"link":"Requem For a Dream", "url":"http://www.imdb.com/title/tt0180093/", "category":"movie", "date":"2015-12-01", "completedOn":""},
{"link":"Trainspotting", "url":"http://www.imdb.com/title/tt0117951/", "category":"movie", "date":"2015-12-01", "completedOn":""},
{"link":"Man on the Moon", "url":"http://www.imdb.com/title/tt0125664/", "category":"movie", "date":"2015-12-01", "completedOn":""},
{"link":"Star Wars", "url":"http://www.starwars.com/films", "category":"movie", "date":"2015-12-01", "completedOn":""},
{"link":"Atatürk Arboretum", "url":"http://orman.istanbul.edu.tr/?p=5982", "category":"visit", "date":"2015-12-26", "completedOn":""},
];

var workouts = [
{"desc":"Istanbul Marathon", "distance":"42 KM", "time":"", "date":"2016-11-13"},
{"desc":"Istanbul Half Marathon", "distance":"21 KM", "time":"", "date":"2016-04-24"},
{"desc":"fitness, running", "distance":"", "time":"", "date":"2016-01-04"},
{"desc":"Istanbul Marathon", "distance":"15 KM", "time":"1:30", "date":"2015-11-15"}
];


var quotes = [
{"quote":"Progress, far from consisting in change, depends on retentiveness.", "who":"George Santayana", "date":"2015-01-01"},
{"quote":"Those who cannot remember the past are condemned to repeat it.", "who":"George Santayana", "date":"2015-01-01"},
{"quote":"The easiest person to deceive is one's self.", "who":"Edward G. Bulwer-Lytton", "date":"2015-01-01"},
{"quote":"When everybody actually is out to get you, paranoia is just good thinking.", "who":"Dr. Johnny Fever", "date":"2015-01-01"},
{"quote":"Nothing astonishes men so much as common sense and plain dealing.", "who":"Ralph Waldo Emerson", "date":"2015-01-01"},
{"quote":"There is a luxury in self-reproach. When we blame ourselves we feel no one else has a right to blame us.", "who":"Oscar Wilde", "date":"2015-01-01"},
{"quote":"Nothing is more dangerous than an idea if it's the only one you have.", "who":"Émile Chartier", "date":"2015-01-01"},
{"quote":"The limits of my language mean the limits of my world.", "who":"Ludwig Wittgenstein", "date":"2015-01-01"},
{"quote":"The greatest of all weaknesses is the fear of appearing weak.", "who":"Jacques-Bénigne Bossuet", "date":"2015-01-01"},
{"quote":"Striving to better, oft we mar what's well.", "who":"Shakespeare", "date":"2015-01-01"},
{"quote":"An investment in knowledge always pays the best interest.", "who":"Benjamin Franklin", "date":"2015-01-01"},
{"quote":"I believe that it is better to be looked over than it is to be overlooked.", "who":"Mae West", "date":"2015-01-01"},
{"quote":"The palest ink is better than the best memory.", "who":"Chinese Proverb", "date":"2015-01-01"},
{"quote":"Friendship is a tree that can never recover when it is dried once.", "who":"Nazım Hikmet Ran", "date":"2015-01-01"},
];





