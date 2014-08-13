var slideArray = [
  { id: 'pm_title',
    transitionDurationPrev: 1500,
    section: 'pm',
    template: 'slide_section_title',
    title: 'Program Management',
    geography: 'North America',
    children : [
      {  id: 'pm_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: 'We are your entry point for any project involving Marketing Programs resources — everything from soup to nuts: marketing and ad campaigns, video and animation, tradeshow materials, website design, edits & updates, marketing collateral, solution & product brochures, digital advertising, and any kind of copywriting your heart desires.'
      },
      {  id: 'pm_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'christine_curtin',
          name: 'Christine Curtin',
          title: 'Head of Program Management'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
        	{id: 'brennain_delaney'},
        	{id: 'danielle_greenwood'},
        	{id: 'jill_mcneary'},
        	{id: 'joseph_sengotta'},
        	{id: 'lori_landwer'},
        	{id: 'sarah_parsons'},
        	{id: 'stephanie_schuler'},
        	{id: 'tricia_larson'}
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people/UCURTCH/people?filterID=orgchart'
        }
      },
      {  id: 'pm_why',
        title: 'The Why of Program Management',
        contentTemplate: 'content_default',
        bodyCopy: '<p>As your partners in planning, creating and executing your strategic marketing plans and initiatives, <em>we’ll consult with you how best to achieve your vision.</em> We’ll coordinate all our resources and manage project timelines, providing your team the highest level of support throughout so you’re free to focus on the strategy behind each initiative.</p>'
      },
      {  id: 'pm_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<p>Contact one of our immensely talented Marketing Program Managers, who will in turn put their best project managers to work on fulfilling your every need.</p>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313053'
        }
      }
    ]
  },
  { id: 'events_title',
    section: 'events',
    template: 'slide_section_title',
    title: 'Pearson Events K-20',
    geography: 'North America',
    children : [
      { id: 'events_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>We develop and execute sound user-focused, executive, contract- based, and prospecting level events for all areas of Pearson North America. Then we partner with marketing and sales leads to determine a vision, negotiate site and vendor options — including the use of our own Pearson Meeting Center, manage registrations and payments, track the budget, provide on-site assistance, and follow it all up with post-event surveys and metrics tracking.</p>',
        gridItems: [
          {id: 'do/cogmed_event',  template: 'partials/modal_content.html'},
          {id: 'do/ictcm_event',   template: 'partials/modal_content.html'}, 
          {id: 'do/outdoor_event', template: 'partials/modal_content.html'},
          {id: 'do/zappos_event',  template: 'partials/modal_content.html'}
        ]
      },
      { id: 'events_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'katie_finney',
          name: 'Katie Finney',
          title: 'Head of Pearson Events'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
        	{id: 'amy_cox'},
        	{id: 'dede_eschen'},
        	{id: 'janna_dinolfo'},
        	{spacer: true},
        	{id: 'joanne_foster'},
        	{id: 'shawn_humphrey'},
        	{id: 'valerie_vallejo'},
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people?filterID=orgchart&orgUser=pescke'
        }
      },
      { id: 'events_whatwevedone',
        title: 'What We\'ve Done',
        contentTemplate: 'content_default',
        gridItems: [
          {id: 'done/higher_ed_forum',      template: 'partials/modal_content.html', caption: 'Higher Ed Forum'},
          {id: 'done/online_learning_con',  template: 'partials/modal_content.html', caption: 'Online Learning Conference'},
          {id: 'done/powerschool_uni',      template: 'partials/modal_content.html', caption: 'PowerSchool University'}, 
          {id: 'done/phit',                 template: 'partials/modal_content.html', caption: 'PHIT - Information Technology'},
          {id: 'done/iphase',               template: 'partials/modal_content.html', caption: 'PHASE - Accounting'}, 
          {id: 'done/siop_14',              template: 'partials/modal_content.html', caption: 'SIOP - 14'},
          {id: 'done/three_conference',     template: 'partials/modal_content.html', caption: 'Three Conference'},
          {id: 'done/psu_uni_tech',         template: 'partials/modal_content.html', caption: 'PSU Pearson Techs'}
        ]
      },
      { id: 'events_why',
        title: 'Why Pearson Events',
        contentTemplate: 'content_default',
        bodyCopy: '<p><em>Our focus is positioning Pearson as a partner, thought leader and visionary</em> that raises awareness of our products, solutions and commitment to efficacy. We provide professional development and networking opportunities while fostering a two-way conversation to solve education needs, helping you influence critical business.</p>'
      },
      { id: 'events_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<p>Reach out to the appropriate department lead with a call or email to get your project started. We\'ll get all stakeholders together to develop, plan and execute your next successful event!</p> <p><em>The more lead time, the better, so contact us early.</em></p>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313060'
        }
      }
    ]
  },
  { id: 'k20cm_title',
    section: 'k20cm',
    template: 'slide_section_title',
    title: 'Conferences & Meetings K–20',
    geography: 'North America',
    children : [
      {  id: 'k20cm_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>Our focus is positioning Pearson as a partner, thought leader and visionary that raises awareness of our products, solutions and commitment to efficacy. We provide professional development and networking opportunities while fostering a two-way conversation to solve education needs, helping you influence critical business.</p>'
      },
      {  id: 'k20cm_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'esther_podany',
          name: 'Esther Podany',
          title: 'Head of Conferences & Meetings'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
        	{id: 'christine_rocco'},
        	{id: 'debra_loahr'},
        	{spacer: true},
        	{spacer: true},
        	{id: 'joan_morgan'},
        	{id: 'theresa_moynahan'},
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people?filterID=orgchart&orgUser=UPODAES'
        }
      },
      {  id: 'k20cm_whatwevedone',
        title: 'What We\'ve Done',
        contentTemplate: 'content_default',
        gridItems: [
          {id: 'done/iste_booth_01', template: 'partials/modal_content.html', caption: 'ISTE Booth 2014'},
          {id: 'done/iste_booth_02', template: 'partials/modal_content.html', caption: 'ISTE Booth 2014'}
        ]
      },
      {  id: 'k20cm_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<p>To make your next K-20 conference or meeting a success, please send a detailed email outlining your request to <a href="mailto:conferencemanagement@pearson.com">conferencemanagement@pearson.com</a>, or call the appropriate department lead.</p>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313057'
        }
      }
    ]
  },
  { id: 'dc_title',
    section: 'dc',
    template: 'slide_section_title',
    title: 'Digital Communications',
    geography: 'North America',
    children : [
      { id: 'dc_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>We create campaigns that tell the Pearson K-20 story and build our brand while increasing awareness of Pearson offerings, driving leads and sales, and improving marketing ROI through analysis and message optimization. From Web Communication to eCRM, SEO and SEM to Analytics, we do it all, working to provide you a sound solution to your challenges.</p>',
        gridItems: [
          {id: 'do/overview',               template: 'partials/modal_content.html', caption: 'Overview'},
          {id: 'do/web_content',            template: 'partials/modal_content.html', caption: 'Web Content'},
          {id: 'do/digital_campaigning', 	  template: 'partials/modal_content.html', caption: 'Digital Campaigning'}, 
          {id: 'do/analytics_optimization', template: 'partials/modal_content.html', caption: 'Analytics Optimization'}
        ]
      },
      { id: 'dc_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'kevin_young',
          name: 'Kevin Young',
          title: 'Head of Digital Communications'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
        	{id: 'abdul_mohammed'},
        	{id: 'clif_smith'},
        	{id: 'jarrett_byrom'},
        	{id: 'jim_karalekas'},
        	{id: 'joanne_pennington'},
        	{id: 'lisa_linard'},
        	{id: 'sara_cautillo'}
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people/UYOUNKE/people?filterID=orgchart'
        }
      },
      { id: 'dc_why',
        title: 'Why Digital Communications',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<ul><li>Tell the Pearson K20 story & build the Pearson brand.</li><li>Increase awarness of Pearson products & services.</li><li>Increase customer engagement & consideration.</li><li>Drive leads & sales.</li><li>Increase marketing ROI via analysis & message optimization.</li></ul>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313054'
        }
      }
    ]
  },  
  { id: 'mpp_title',
    section: 'mpp',
    template: 'slide_section_title',
    title: 'Media Planning & Production',
    geography: 'North America',
    children : [
      { id: 'mpp_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>We manage all K–20 media buys for North America, including development of all annual media plans. We establish key media relationships, secure premium placements, negotiate discounted rates, and track results. We also manage all K–20 Production needs. From print, mail, and fulfillment to contractor management and premiums, we handle it all.</p>'
      },
      { id: 'mpp_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'michelle_maloof',
          name: 'Michelle Maloof',
          title: 'Head of Media Planning & Production'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
        	{id: 'lillian_carr'},
        	{id: 'michelle_lepori'},
        	{id: 'shogo_takemura'}
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people?filterID=orgchart&orgUser=MALOM2'
        }
      },
      { id: 'mpp_whatwevedone',
        title: 'What We\'ve Done',
        contentTemplate: 'content_default',
        gridItems: [
          {id: 'done/che_jrpage',           template: 'partials/modal_content.html', caption: 'Breakthrough PLS'},
          {id: 'done/che_print',            template: 'partials/modal_content.html', caption: 'Breakthrough Higher Ed'}, 
          {id: 'done/clinical_digital',     template: 'partials/modal_content.html', caption: 'Clinical - Digital'},
          {spacer: true},
          {id: 'done/clinical_print',       template: 'partials/modal_content.html', caption: 'Q-interactive'},
          {id: 'done/he_academetoday',      template: 'partials/modal_content.html', caption: 'Academe Today'}, 
          {id: 'done/teachability_digital', template: 'partials/modal_content.html', caption: 'Teachability'}
        ]
      },
      {  id: 'mpp_whympp',
        title: 'Why Media Planning & Production',
        contentTemplate: 'content_default',
        bodyCopy: '<p>We streamline media and production efforts across K-20 to strengthen market impact, manage the brand, provide campaign support, and track market response. Our team provides recommendations, established vendor relationships, a simplified payment process, and budgetary tracking to help you keep the bottom line in clear view.</p>'
      },
      {  id: 'mpp_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: 'Contact your dedicated Program Manager for any of your media or production needs. Our teams will work together to plan, strategize and execute your request while providing the highest level of support, impact and — best of all — <em>measurable results.</em>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313059'
        }
      }
    ]
  },
  { id: 'creative_title',
    section: 'creative',
    template: 'slide_section_title',
    title: 'Creative',
    geography: 'North America',
    children : [
      {  id: 'creative_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>Our top-flight stable of talented creatives who have solid knowledge of our target markets, understand Pearson and have a keen eye for bringing magic to a project. <em>We provide every kind of marketing and online training need to Pearson North America:</em> web, print, motion graphics, interface, information, instructional, packaging, communication, email, illustration, branding and more.</p>'
      },
      {  id: 'creative_whoweare',
        title: 'Who We Are',
        lead: {
          id: 'gary_gnade',
          name: 'Gary Gnade',
          title: 'Head of Creative'
        },
        contentTemplate: 'content_who_we_are',
        directReports: [
          {id: 'justin_putney'},
          {id: 'deb_dubois'},
          {spacer: true},
          {spacer: true},
          {id: 'valerie_ensign'},
          {id: 'leolie_marquez'}
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people?filterID=orgchart&orgUser=GNADGA'
        }
      },
      { id: 'creative_whatwevedone',
        title: 'What We\'ve Done',
        contentTemplate: 'content_default',
        gridItems: [
          {id: 'done/pearson_k12',              template: 'partials/modal_content.html', caption: 'PearsonK12.com'},
          {id: 'done/sxsw14_mural',             template: 'partials/modal_content.html', caption: 'SXSW ’14 Mural'}, 
          {id: 'done/envision_math_2',          template: 'partials/modal_content.html', caption: 'enVisionMATH 2.0'},
          {id: 'done/gfta_3_campaign',          template: 'partials/modal_content.html', caption: 'GFTA-3 Campaign'},
          {id: 'done/toolkit_campaign',         template: 'partials/modal_content.html', caption: 'Toolkit Campaign'}, 
          {id: 'done/online_learning_exchange', template: 'partials/modal_content.html', caption: 'Online Learning Exchange'},
          {id: 'done/grant_planning_guide',     template: 'partials/modal_content.html', caption: 'Grant Planning & Writing Guide'},
          {id: 'done/iste14_creative',          template: 'partials/modal_content.html', caption: 'ISTE 2014 Collateral'}
        ]
      },
      {  id: 'creative_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<p>Creative is always ready for a challenge. Tell us what you need and we’ll dig in to find the right solution, present our thoughts and strategies, and give you our best work in the most appropriate media to get you results. <em>Reach out to us through your Marketing Programs Project Manager, and let us build you a winner.</em></p>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313058'
        }
      }
    ]
  },
  { id: 'vmg_title',
    section: 'vmg',
    template: 'slide_section_title',
    title: 'Video & Motion Graphics',
    geography: 'North America',
    children : [
      {  id: 'vmg_whatwedo',
        title: 'What We Do',
        contentTemplate: 'content_default',
        bodyCopy: '<p>Our crew of talented professionals has experience with every aspect and size of production—from the most basic talking- head interview video to large-scale, multi-camera productions complete with scripting, storyboarding, casting, locations, 3-D animation, compositing, and special effects. With on-staff videographers, editors, designers, animators, production coordinators, and writers, we can handle your video project from concept to completion.</p> <p><em>» We refuse to settle for the expected when a more creative solution is possible.</em></p>',
        gridItems: [
          {id: 'do/green_screen', template: 'partials/modal_content.html'},
          {id: 'do/onset_01',     template: 'partials/modal_content.html'}, 
          {id: 'do/onset_02',     template: 'partials/modal_content.html'}
        ]
      },
      {  id: 'vmg_whoweare',
        title: 'Who We Are',
        contentTemplate: 'content_who_we_are',
        lead: {
          id: 'eric_kome',
          name: 'Eric Kome',
          title: 'Head of Video & Motion Graphics'
        },
        directReports: [
        	{id: 'bill_delehant'},
        	{id: 'david_busch'},
          {spacer: true},
          {spacer: true},
        	{id: 'seth_diehl'},
        	{id: 'tom_tate'},
        ],
        orgChart: {
          url: 'https://neo.pearson.com/people/KOMEER/people?filterID=orgchart'
        }
      },
      {  id: 'vmg_whatwevedone',
        title: 'What We\'ve Done',
        contentTemplate: 'content_default',
        bodyCopy: '',
        gridItems: [
          {id: 'done/school_of_thought',         template: 'partials/modal_content.html', caption: 'School of Thought',         modalBody: '<h4>School of Thought - 3 part video series</h4><ul><li>Client: Center for eLearning</li><li>2014 Beacon Award finalist</li><li>25,000+ YouTube views</li></ul><p>Concepting, storyboards, video, casting, locations, permits, animation/motion graphics, editing, green screen compositing, 3D modeling & animation, sound track</p>', modalLink: 'https://www.youtube.com/watch?v=7idyNIvVCis'},
          {id: 'done/future_vision',             template: 'partials/modal_content.html', caption: 'Future Vision',             modalBody: '<h4>A Vision for Personalized and Connected Learning</h4><ul><li>Client: Sales & Marketing, NA</li><li>16,500+ YouTube views</li></ul><p>Concepting, storyboards, video, casting, locations, animation/motion graphics, editing, green screen compositing, sound track</p>', modalLink: 'https://www.youtube.com/watch?v=ysdPO6Kur_I'}, 
          {id: 'done/teaching_in_a_digital_age', template: 'partials/modal_content.html', caption: 'Teaching in a Digital Age', modalBody: '<h4>Teaching in a Digital Age - multi-part series</h4><ul><li>Client: Research & Innovation Network</li></ul><p>Video, locations, shoot coordination, animation/motion graphics, editing, sound track</p>', modalLink: 'https://www.youtube.com/watch?v=hqteWvrxuy4'},
          {spacer: true},
          {id: 'done/breakthrough_commercial',   template: 'partials/modal_content.html', caption: 'Breakthrough Commercial',   modalBody: '<h4>Breakthrough Commercial</h4><ul><li>Client: Sales & Marketing, NA</li><li>4,000+ YouTube views</li></ul><p>Video, animation/motion graphics, voice-over, editing, sound track</p>', modalLink: 'http://www.youtube.com/watch?v=EbNKuVpGZ18'},
          {id: 'done/a_serious_talk',            template: 'partials/modal_content.html', caption: 'A Serious Talk',            modalBody: '<h4>A Serious Talk</h4><ul><li>Client: A&I Marketing</li><li>10,500+ YouTube views</li></ul><p>Concepting, scripting, storyboards, video, casting, locations, editing, sound track</p>', modalLink: 'https://www.youtube.com/watch?v=v0pZE8WW_Ro'}, 
          {id: 'done/nsm14_opening_video',       template: 'partials/modal_content.html', caption: 'NSM 2014 Opening Video',    modalBody: '<h4>Nation Sales Meeting Opening Video 2014</h4><ul><li>Client: Sales & Marketing, NA</li></ul><p>Concepting, scripting, storyboards, animation/motion graphics, sound track</p>'}
        ]
      },
      {  id: 'vmg_workwithus',
        title: 'Work With Us',
        contentTemplate: 'content_work_with_us',
        bodyCopy: '<p>We’re highly skilled at all aspects of video and motion graphics, bringing expertise to your project at a fraction of the cost of outside vendors. Put is to work by contacting your Marketing Programs Project Manager, <em>but allow plenty of lead-time</em> — our production schedule is often at capacity, and making effective, personalized media takes time.</p>',
        neoLink: {
          url: 'https://neo.pearson.com/docs/DOC-313056'
        }
      }
    ]
  }
];

var marcommWhatWeDo = {
	id: 'marcomm_whatwedo',
	section: 'marcomm',
	title: 'What We Do',
	subTitle: 'Marketing Programs',
	level: 'titleSlideLevel',
	geography: 'North America',
  contentTemplate: 'content_default',
	bodyCopy: '<p>We partner with Strategic Marketing teams to build awareness, create demand, and ultimately generate sales. Because your communications need to be creative, captivating, compelling, and digital, we will help drive your creative strategy through visual design, video, motion graphics, and customer-facing events. We will help take your marketing plans and convert them into action.</p>'
};

var marcommWhoWeAre = {  
	id: 'marcomm_whoweare',
  section: 'marcomm',
  title: 'Who We Are',
	subTitle: 'Marketing Programs',
	level: 'titleSlideLevel',
  lead: {
    id: 'robin_brophy',
    name: 'Robin Brophy',
    title: 'VP, Marketing Programs'
  },
  contentTemplate: 'content_who_we_are',
  directReports: [
    {id: 'christine_curtin'},
    {id: 'eric_kome'},
    {id: 'esther_podany'},
    {id: 'gary_gnade'},
    {id: 'katie_finney'},
    {id: 'kevin_young'},
    {id: 'michelle_maloof'}
  ],
  orgChart: {
    url: 'https://neo.pearson.com/people?filterID=orgchart&orgUser=BROPRO'
  },
  transitionDurationNext: 2000,
	transitionDurationPrev: 1000,
};