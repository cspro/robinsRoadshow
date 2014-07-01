var slideMap = [
	{	id: 'vmg_title',
		section: 'vmg',
		template: 'slide_section_title',
		title: 'Video & Motion Graphics',
		geography: 'North America',
		children : [
			{	id: 'vmg_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p><em>» We refuse to settle for the expected when a more creative solution is possible.</em></p>',
				gridItems: [
					{src:'vmg/what_we_do_1.png', template:'partials/modal_content.html'},
					{src:'vmg/what_we_do_2.png', template:'partials/modal_content.html'}, 
					{src:'vmg/what_we_do_1.png', template:'partials/modal_content.html'},
					{src:'vmg/what_we_do_2.png', template:'partials/modal_content.html'}, 
					{src:'vmg/what_we_do_3.png', template:'partials/modal_content.html'}
				]
			},
			{	id: 'vmg_whoweare',
				title: 'Who We Are',
				contentTemplate: 'content_who_we_are',
				lead: {
					id: 'eric_kome',
					name: 'Eric Kome',
					title: 'Head of Video & Motion Graphics'
				},
				bodyCopy: ''
			},
			{	id: 'vmg_whatwevedone',
				title: 'What We\'ve Done',
				contentTemplate: 'content_what_weve_done',
				bodyCopy: ''
			},
			{	id: 'vmg_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<p>We’re highly skilled at all aspects of video and motion graphics, bringing expertise to your project at a fraction of the cost of outside vendors. Put is to work by contacting your Marketing Programs Project Manager, <em>but allow plenty of lead-time</em> — our production schedule is often at capacity, and making effective, personalized media takes time.</p>'
			}
		]
	},
	{	id: 'creative_title',
		section: 'creative',
		template: 'slide_section_title',
		title: 'Creative',
		geography: 'North America',
		children : [
			{	id: 'creative_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>Our top-flight stable of creative professionals—made up of more than 50 people in 20 locations across the country—provides every kind of marketing and online training need to Pearson North America: web, print, motion graphics, interface, information, instructional, packaging, communication, email, illustration, branding and more.</p>'
			},
			{	id: 'creative_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'gary_gnade',
					name: 'Gary Gnade',
					title: 'Head of Creative'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'creative_whatwevedone',
				title: 'What We\'ve Done',
				contentTemplate: 'content_what_weve_done',
				bodyCopy: ''
			},
			{	id: 'creative_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<p>Creative is always ready for a challenge. Tell us what you need and we’ll dig in to find the right solution, present our thoughts and strategies, and give you our best work in the most appropriate media to get you results. <em>Reach out to us through your Marketing Programs Project Manager, and let us build you a winner.</em></p>'
			}
		]
	},
	{	id: 'mpp_title',
		section: 'mpp',
		template: 'slide_section_title',
		title: 'Media Planning & Production',
		geography: 'North America',
		children : [
			{	id: 'mpp_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>We are your entry point for any project involving Marketing Programs resources—everything from soup to nuts: marketing and ad campaigns, video and animation, tradeshow materials, website design, edits & updates, marketing collateral, solution & product brochures, digital advertising, and any kind of copywriting your heart desires.</p>'
			},
			{	id: 'mpp_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'michelle_maloof',
					name: 'Michelle Maloof',
					title: 'Head of Media Planning & Production'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'mpp_whympp',
				title: 'Why Media Planning & Production',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>We align media and production efforts from K-20 to strengthen market impact, manage the brand, provide messaging support, and track market response. Our team provides recommendations for your project, established vendor relationships, a simplified payment process, and budgetary tracking to help you keep the bottom line in clear view.</p>'
			},
			{	id: 'mpp_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: 'Contact your dedicated Program Manager for any of your media or production needs. Our teams will work together to plan, strategize and execute your request while providing the highest level of support, impact and — best of all — <em>measurable results.</em>'
			}
		]
	},
	{	id: 'dc_title',
		section: 'dc',
		template: 'slide_section_title',
		title: 'Digital Communications',
		geography: 'North America',
		children : [
			{	id: 'dc_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>We are your entry point for any project involving Marketing Programs resources — everything from soup to nuts: marketing and ad campaigns, video and animation, tradeshow materials, website design, edits & updates, marketing collateral, solution & product brochures, digital advertising, and any kind of copywriting your heart desires.</p>'
			},
			{	id: 'dc_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'kevin_young',
					name: 'Kevin Young',
					title: 'Head of Digital Communications'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'dc_whydc',
				title: 'Why Digital Communications',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<ul><li>Tell the Pearson K20 story & build the Pearson brand.</li><li>Increase awarness of Pearson products & services.</li><li>Increase customer engagement & consideration.</li><li>Drive leads & sales.</li><li>Increase marketing ROI via analysis & message optimization.</li></ul>'
			}
		]
	},
	{	id: 'events_title',
		section: 'events',
		template: 'slide_section_title',
		title: 'Pearson Events',
		geography: 'North America',
		children : [
			{	id: 'events_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'katie_finney',
					name: 'Katie Finney',
					title: 'Head of Pearson Events'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'events_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<p>We develop and execute sound user-focused, executive, and prospecting events. Then we partner with marketing and sales leads to determine a vision, negotiate site and vendor options, manage registrations and payments, track the budget, provide on-site assistance, and follow it all up with post-event surveys and metrics tracking.</p>'
			}
		]
	},
	{	id: 'pm_title',
		section: 'pm',
		template: 'slide_section_title',
		title: 'Program Management',
		geography: 'North America',
		children : [
			{	id: 'pm_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: 'We are your entry point for any project involving Marketing Programs resources — everything from soup to nuts: marketing and ad campaigns, video and animation, tradeshow materials, website design, edits & updates, marketing collateral, solution & product brochures, digital advertising, and any kind of copywriting your heart desires.'
			},
			{	id: 'pm_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'christine_curtin',
					name: 'Christine Curtin',
					title: 'Head of Program Management'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'pm_why',
				title: 'The Why of Program Management',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>As your partners in planning, creating and executing your strategic marketing plans and initiatives, <em>we’ll determine how best to achieve your goals.</em> We’ll coordinate all our resources and manage project timelines, providing your team the highest level of support throughout so you’re free to focus on the strategy behind each initiative.</p>'
			},
			{	id: 'pm_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<p>Contact one of our eminently capable Marketing Program Managers, who will in turn put their best project managers to work on fulfilling your every need.</p>'
			}
		]
	},
	{	id: 'k20cm_title',
		section: 'k20cm',
		template: 'slide_section_title',
		title: 'K–20 Conferences & Meetings',
		geography: 'North America',
		children : [
			{	id: 'k20cm_whatwedo',
				title: 'What We Do',
				contentTemplate: 'content_what_we_do',
				bodyCopy: '<p>Our focus is positioning Pearson as a partner, thought leader and visionary that raises awareness of our products, solutions and commitment to efficacy. We provide professional development and networking opportunities while fostering a two-way conversation to solve education needs, helping you influence critical business.</p>'
			},
			{	id: 'k20cm_whoweare',
				title: 'Who We Are',
				lead: {
					id: 'esther_podany',
					name: 'Esther Podany',
					title: 'Head of Conferences & Meetings'
				},
				contentTemplate: 'content_who_we_are',
				bodyCopy: ''
			},
			{	id: 'k20cm_whatwevedone',
				title: 'What We\'ve Done',
				contentTemplate: 'content_what_weve_done',
				bodyCopy: ''
			},
			{	id: 'k20cm_workwithus',
				title: 'Work With Us',
				contentTemplate: 'content_work_with_us',
				bodyCopy: '<p>To make your next K-20 conference or meeting a success, please send a detailed email outlining your request to <a href="mailto:conferencemanagement@pearson.com">conferencemanagement@pearson.com</a>, or call the appropriate department lead.</p>'
			}
		]
	}
];