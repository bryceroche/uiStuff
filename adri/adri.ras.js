
String.prototype.toPhone = function () {
    return this.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
};


window.constants = {
	interview:{
		id: '',
		user: '',
		client: '',
        ui: ''
	},
	urls:{
		getTimeSlots: appconfig.api.base + '/' + appconfig.api.stage + '/getTimeSlots',
		addTimeSlot: appconfig.api.base + '/' + appconfig.api.stage + '/addTimeSlot',
		getInterview: appconfig.api.base + '/' + appconfig.api.stage + '/GetInterviewDetails',
		addInterview: appconfig.api.base + '/' + appconfig.api.stage + '/AddEvent',
		validateUser: appconfig.api.base + '/' + appconfig.api.stage + '/validateUser',
		getUsers: appconfig.api.base + '/' + appconfig.api.stage + '/getUsers',
		deleteTimeSlot:appconfig.api.base + '/' + appconfig.api.stage + '/deleteTimeslot',
		deleteUser:appconfig.api.base + '/' + appconfig.api.stage + '/deleteUser',
		addUsers: appconfig.api.base + '/' + appconfig.api.stage + '/addUsers',
		getUnscheduledInterviews: appconfig.api.base + '/' + appconfig.api.stage + '/getInterviews',
		getInterviewsDate: appconfig.api.base + '/' + appconfig.api.stage + '/getInterviewsDate',
		getPositions: appconfig.api.base + '/' + appconfig.api.stage + '/getPositions',
		addPosition: appconfig.api.base + '/' + appconfig.api.stage + '/addPosition',
		getUserTimeSlots: appconfig.api.base + '/' + appconfig.api.stage + '/getAvailabilityUser',
		notifyUser: appconfig.api.base + '/' + appconfig.api.stage + '/NotifyUser',
		persistentAvailability: appconfig.api.base + '/' + appconfig.api.stage + '/updatePersistentUserInfo',
        optout: ''
    }
};

window.adri = (function(){
	
	function ADRITime(d, h, m, p, s){
		this.interviewID = constants.interview.id;
		this.userID = adri.interview.scheduling.userID;
		this.date = d;
		this.hour = h;
		this.minute = m;
		this.period = p;
		this.status = s;
	}
	
	function APITimeSlot(timeslot){
		this.interviewID = timeslot.interviewID;
		this.userID = timeslot.userID;
		this.status = timeslot.status;
		
		var ts = +timeslot.hour;
		if(timeslot.period.toLowerCase() == 'pm' && timeslot.hour != 12){
			ts += 12;
		}
		else if(timeslot.period.toLowerCase() == 'am' && timeslot.hour == 12){
			ts = '00';
		}
		ts = '' + ts + ':' + timeslot.minute + ':00';
		ts = timeslot.date + ' ' + ts;
		
		this.timeSlot = ts;
        this.clientID = constants.interview.client;
	    this.uiID = constants.interview.ui;

	}

	function APITimeInstance(timeslot) {
	    this.interviewID = timeslot.interviewID;
	    this.userID = timeslot.userID;
	    this.status = timeslot.status;
	    var inst = timeslot.schedule.startTime;
	    inst.hour = +inst.hour;

	    if (inst.period.toLowerCase() == 'pm' && inst.hour != 12) {
	        inst.hour += 12;
	    }
	    else if (inst.period.toLowerCase() == 'am' && inst.hour == 12) {
	        inst.hour = '00';
	    }

        var ts = timeslot.date + ' ' + inst.hour + ':' + inst.minutes + ':00';

	    this.timeSlot = ts;
	    this.clientID = constants.interview.client;
	    this.uiID = constants.interview.ui;

	}
	
	function timePeriod(h,m,p) {
	    this.hour = h || '1';
	    this.minutes = m || '01';
	    this.period = p || 'AM';
	}

	function ADRIBlock() {
	    this.startTime = new timePeriod();
	    this.endTime = new timePeriod();
	    this.lunchTime = new timePeriod();
	}

	function BlockDay(d) {
	    this.day = d || '';
	    this.schedule = new ADRIBlock();
	}

	function BlockDate(d) {
	    this.date = d || '';
	    this.schedule = new ADRIBlock();
	}

	function DDOption(value, text){
		text = text || value;
		return '<option value="' + value + '">' + text + '</option>';
	}
	
	function DDSelectedOption(value, text){
		text = text || value;
		return '<option selected="selected" value="' + value + '">' + text + '</option>';
	}
	
	var adri = {
	    data:{},
	    error:{
	        noParams:function(){
	            $('#adri-ras-content').html('Sorry, but we couldn\'t find your information. Please try clicking your invitation link again.');
	        }
	    },
	    ui: {
	        selectedDate: '',
	        settings: {
	            setup: function () {
	                var $el = $('#dynamic-content-area');
	                var wkDate = new Date();
	                var iCard = '<div class="spacer"></div>' +
                                '<div id="db-scheduling" class="dashboard-scheduling">' +
                                    //'<div class="section-header centered secHTxt">Manage Users</div>' +
                                    '<div class="section-header centered secHTxt">Manage Positions</div>' +
                                    //'<div id="user-pool" class="halfWidth-container pBG"></div>' +
                                    '<div id="position-pool" class="halfWidth-container pBG"></div>' +
                                '</div>' +
								'<div id="modal-form" class="modal-form"></div>' +
								'<div id="modal-bg-overlay" class="modal-overlay" onclick="adri.timeslot.removeControls();"></div>';
	                $el.html(iCard);
	            },
	            open: function () {
	                var db = adri.ui.dashboard;
	                adri.ui.settings.setup();
	                db.getPositions(function (data) {
	                    db.drawPositionPool(data);
	                });
	            }
	        },
            zone: function () {
                //this is where we can outline different zone types based on config selections
	            var zones = '<div id="main-splash" class="ui-splash"></div>' +
                            '<div id="left-nav" class="ui-nav-pane pBG"></div>' +
                            '<div id="dynamic-content-area" class="ui-content-slide"></div>';
	            $('#core-content').html(zones);
            },
            nav: {
                setup: function () {
                    var nav = '';
                    var menu = [
                        { adr: '', txt: appconfig.alias.interview + 's', type: 'staticHeader' },
                        { adr: 'alert(\'Please enable range filtering in the configuration settings.\');', txt: appconfig.alias.interview + 's Today', type: 'link' },
                        { adr: 'alert(\'Please enable range filtering in the configuration settings.\');', txt: appconfig.alias.interview + 's This Week', type: 'link' },
                        { adr: 'alert(\'Please enable range filtering in the configuration settings.\');', txt: appconfig.alias.interview + 's This Month', type: 'link' },
                        { adr: '', txt: 'Scheduling', type: 'staticHeader' },
                        { adr: 'adri.ui.dashboard.open();', txt: 'Dashboard', type: 'link' },
                        { adr: 'adri.user.info.launchEditForm();', txt: 'Edit Availability', type: 'link' },
                        { adr: '', txt: 'Pipeline', type: 'staticHeader' },
                        { adr: 'alert(\'Please enable pipelines in the configuration settings.\');', txt: appconfig.alias.candidate + 's waiting to schedule', type: 'link' },
                        { adr: '', txt: 'Reports', type: 'staticHeader' },
                        { adr: 'adri.ui.nav.open(\'' + atob(constants.interview.ui) + 'reports.html?cliid=' + constants.interview.client + '\');', txt: 'My Reports', type: 'link' },
                        { adr: '', txt: 'Search', type: 'staticHeader' },
                        { adr: 'alert(\'Please enable search in the configuration settings.\');', txt: 'Position ID', type: 'link' },
                        { adr: 'alert(\'Please enable search in the configuration settings.\');', txt: appconfig.alias.interviewer, type: 'link' },
                        { adr: 'alert(\'Please enable search in the configuration settings.\');', txt: appconfig.alias.candidate, type: 'link' }
                    ];

                    var lim = menu.length;
                    for (var i = 0; i < lim; i++){
                        nav = nav + adri.ui.nav.template[menu[i].type](menu[i].txt,menu[i].adr);
                    }
                    $('#rpts-widget').attr('onclick', 'adri.ui.nav.open(\'' + atob(constants.interview.ui) + 'reports.html?cliid=' + constants.interview.client + '\');');
                    $('#left-nav').html(nav);
                },
                template: {
                    link: function (txt,adr) {
                        return '<div class="ckablef maintxt offset-l small-pad" onclick="' + adr + '">' + txt + '</div>';
                    },
                    linkHeader: function (txt,adr) {
                        return '<div class="ckablef maintxt med-pad" onclick="' + adr + '">' + txt + '</div>';
                    },
                    staticHeader: function (txt,adr) {
                        return '<div class="infoTxt med-pad">' + txt + '</div>';
                    }
                },
                open: function (url) {
                    var win = window.open(url, '_blank');
                    win.focus();
                }
            }, 
	        initialize: function () {
	            adri.user.validate(adri.ui.checkUser);
	        },
	        checkUser: function (user) {
	            var welcome = 'Welcome, ' + user.firstName + ' ' + user.lastName + '!';
	            $('#welcome-box').html(welcome);
	            adri.ui.route[user.role](user);
	        },
	        route:{
	            'Recruiter':function(user){
	                adri.interview.get(function(data){
						adri.interview.loadToUI(data);
	                    adri.interview.getUsers(function(data){
	                        adri.interview.addUserNodes(data);
	                        adri.ui.availability.get(function(data){
	                            adri.ui.availability.drawUserTimes(data);
	                        });
	                    });
	                });
	            },
	            'Candidate':function(user){
					
	            },
	            'Interviewer':function(user){
	                adri.interview.get(function (data) {

	                    adri.interview.loadToUI(data);
	                    adri.interview.getUsers(function (data) {
	                        adri.interview.addUserNodes(data);
	                        adri.ui.availability.get(function (data) {
	                            adri.ui.availability.drawUserTimes(data);
	                        });
	                    });
	                });
	            },
	            'INVALID':function(){
					
	            }
	        },
	        dashboard:{
	            open: function () {
	                adri.user.validate(adri.ui.dashboard.checkUser);
	            },
	            checkUser: function (user) {
	                var welcome = 'Welcome, ' + user.firstName + ' ' + user.lastName + '!';
	                $('#welcome-box').html(welcome);
	                adri.ui.dashboard.route[user.role](user);
	            },
	            route:{
	                'Recruiter':function(user){
	                    var db = adri.ui.dashboard;
	                    db.setup();

                        $('.dynamicContent').fadeIn('fast');

	                    db.getPositions(function (data) {
	                        db.setPositionFilters(data);
	                    });

	                    db.getInterviews(function (data) {
	                        db.drawInterviews(data);
	                        db.drawInterviewsForDate(data);
	                    });

	                    db.getUnscheduledInterviews(function (data) {
	                        db.drawUnscheduledInterviews(data);
	                    });
	                },
	                'Candidate':function(user){
						
	                },
	                'Interviewer':function(user){
	                    var db = adri.ui.dashboard;
	                    db.setup();
                        $('.dynamicContent').fadeIn('fast');

	                    db.getPositions(function (data) {
	                        db.setPositionFilters(data);
	                    });

	                    db.getInterviews(function (data) {
	                        db.drawInterviews(data);
	                        db.drawInterviewsForDate(data);
	                    });

	                    db.getUnscheduledInterviews(function (data) {
	                        db.drawUnscheduledInterviews(data);
	                    });
	                },
	                'INVALID':function(){
					
	                }
	            },
	            deleteUser: function (id, interviewID) {
	                var db = adri.ui.dashboard;

	                $('#loader-' + id).html('<div class="centered vCenter">Removing...</div>');
	                $('#loader-' + id).stop();
	                $('#loader-' + id).fadeIn(50);

	                var jsData = {
	                    id: id,
	                    clientID: constants.interview.client,
	                    userID: constants.interview.user,
	                    uiID: constants.interview.ui,
	                    interviewID: btoa(interviewID)
	                };
	            
	                $.ajax({
	                    type: "POST",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.deleteUser,
	                    data: JSON.stringify(jsData),
	                    success: function (data) {
	                        db.getUnscheduledInterviews(function (data) {
	                            db.drawUnscheduledInterviews(data);
	                        });
	                    },
	                    error:function(xhr, ajaxOptions, error){
	                        console.log(xhr);
	                    }
	                });
	            },
	            setup: function () {
	                $('#page-title').html('Scheduling Dashboard');
	                var $el = $('#dynamic-content-area');
	                var wkDate = new Date();
	                var dash = '<div id="db-weekly-view" class="dashboard-date-browser">' +
                                    adri.util.controls.calendar.drawWeeklyView(wkDate) +
                                '</div>' +
                                '<div id="db-scheduling" class="dashboard-scheduling">' +
                                    '<div id="scheduled-interviews-container" class="halfWidth-container pBG">' +
                                        '<div class="section-header centered secHTxt">Scheduled ' + appconfig.alias.interview + 's</div>' +
                                        '<div id="sch-int-ctrls" class="container-controls">' +
                                            '<div class="inline-field-ctnr">' +
                                                '<span class="secHTxt">Show: </span>' +
                                                '<select id="sch-position-filter" class="inline-field" onchange="adri.ui.dashboard.filter.scheduled();">' +
                                                    '<option value="All">All</option>' +
                                                '</select>' +
                                            '</div>' +
                                            '<div class="inline-field-ctnr">' +
                                                '<span class="secHTxt">For: </span>' +
                                                '<span id="sch-selected-date">Next ' + appconfig.system.maxlookahead + ' Days</span>' +
                                                '<div class="inline-widget ckablef mainTxt" onclick="adri.ui.dashboard.dateReset.scheduled();">&#xf0e2;</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div id="scheduled-interviews"></div>' +
                                    '</div>' +
                                    '<div id="unscheduled-interviews-container" class="halfWidth-container pBG">' +
                                        '<div class="section-header centered secHTxt">Unscheduled ' + appconfig.alias.interview + 's</div>' +
                                        '<div id="unsch-int-ctrls" class="container-controls">' +
                                            '<div class="inline-field-ctnr">' +
                                                '<span class="secHTxt">Show: </span>' +
                                                '<select id="unsch-position-filter" class="inline-field" onchange="adri.ui.dashboard.filter.unscheduled();">' +
                                                    '<option value="All">All</option>' +
                                                '</select>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div id="unscheduled-interviews"></div>' +
                                    '</div>' +
                                '</div>' +
								'<div id="modal-form" class="modal-form"></div>' +
								'<div id="modal-bg-overlay" class="modal-overlay" onclick="adri.timeslot.removeControls();"></div>';
	                $el.html(dash);
	            },
	            dateReset: {
	                scheduled: function () {
	                    var db = adri.ui.dashboard;
	                    db.getInterviews(function (data) {
	                        $('#sch-selected-date').html('Next 7 Days');
	                        db.drawInterviews(data);
	                        db.drawInterviewsForDate(data);
	                    });
	                }
	            },
	            filter: {
	                scheduled: function () {
	                    var db = adri.ui.dashboard;

	                    if (!adri.ui.selectedDate || adri.ui.selectedDate === '') {
	                        db.getInterviews(function (data) {
	                            db.drawInterviews(data);
	                            db.drawInterviewsForDate(data);
	                        });
	                    }
	                    else {
	                        db.getInterviewsDate(adri.ui.selectedDate, function (data) {
	                            db.drawInterviewsForDate(data);
	                        });
	                    }
	                    
	                },
	                unscheduled: function () {
	                    var db = adri.ui.dashboard;
	                    db.getUnscheduledInterviews(function (data) {
	                        db.drawUnscheduledInterviews(data);
	                    });
	                }
	            },
	            getInterviewsForDate: function (date) {
	                var db = adri.ui.dashboard;
	                adri.ui.selectedDate = date;
	                $('#sch-selected-date').html(date);
	                db.getInterviewsDate(date, function (data) {
	                    db.drawInterviewsForDate(data);
	                });
	            },
	            getInterviews: function (onComplete) {

	                var posFilter = $('#sch-position-filter').val() || 'All';

	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getUserTimeSlots + "?uid=" + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client + '&pfl=' + btoa(posFilter),
	                    success: function (data) {
	                        onComplete(data[0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            getScheduledInterviews: function (onComplete) {
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getTimeSlots + "?uid=" + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client,
	                    success: function (data) {
	                        onComplete(data[0][0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            getUnscheduledInterviews: function (onComplete) {
	                var posFilter = $('#unsch-position-filter').val() || 'All';
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getUnscheduledInterviews + '?uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client + '&pfl=' + btoa(posFilter),
	                    success: function (data) {
	                        onComplete(data[0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            getInterviewsDate: function (date, onComplete) {

	                var posFilter = $('#sch-position-filter').val() || 'All';

	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getInterviewsDate + "?uid=" + constants.interview.user + "&adate=" + btoa(date) + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client + '&pfl=' + btoa(posFilter),
	                    success: function(data){
	                        onComplete(data[0]);
	                    },
	                    error:function(xhr, ajaxOptions, error){
	                        console.log(xhr);
	                    }
	                });
	            },
	            getPositions: function (onComplete) {
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getPositions + '?uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client,
	                    success: function (data) {
	                        onComplete(data[0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            setPositionFilters: function (data) {
	                var $sch = $('#sch-position-filter');
	                var $unsch = $('#unsch-position-filter');
	                var lim = data.length;
	                $sch.html('<option value="All">All</option>');
	                $unsch.html('<option value="All">All</option>');
	                var map = {};
	                for (var i = 0; i < lim; i++) {
	                    if(!map[data[i].POSITION_NAME]){
	                        map[data[i].POSITION_NAME] = data[i].POSITION_NAME;
	                        $sch.append('<option value="' + data[i].POSITION_NAME + '">' + data[i].POSITION_NAME + '</option>');
	                        $unsch.append('<option value="' + data[i].POSITION_NAME + '">' + data[i].POSITION_NAME + '</option>');
	                    }
	                }

	            },
	            drawInterviews: function (data) {
	                var lim = data.length;
	                var $date;
	                var dt;
	                var ndt;

	                var els = {};

	                for (var i = 0; i < lim; i++) {
	                    dt = data[i]['TIME_SLOT'];
	                    if (dt !== null) {
	                        dt = dt.split('T')[0];
	                        dt = dt.split('-');
	                        ndt = dt[1] + '-' + dt[2] + '-' + dt[0];
	                        if(!els[ndt]){
	                            els[ndt] = [];
	                        }
	                        els[ndt].push('<div class="interview-sch-node">' + data[i]['CLEAN_TIME'] + '</div>');
	                    }
	                }
					
	                var mk = '';

	                for (var nd in els){
	                    $date = $('#cal-cell-nodes-' + nd);
	                    mk = els[nd].join('');
	                    $date.html(mk);
	                }
					
	            },
	            drawInterviewsForDate: function (data) {
	                var $schArea = $('#scheduled-interviews');
	                $schArea.html('');
	                var lim = data.length;

	                var dtlBar = '';
	                var canName = '';
	                var tslot = '';
	                var phone = '';

	                for (var i = 0; i < lim; i++) {
	                    if (data[i]['CANDIDATE_ID'] !== null) {
	                        canName = data[i]['FULL_NAME']
	                    }
	                    else {
	                        canName = 'TBD';
	                    }

	                    if (data[i]['TIME_SLOT'] !== null) {
	                        tslot = data[i]['CLEAN_DATE']
	                    }
	                    else {
	                        tslot = 'TBD';
	                    }

	                    phone = data[i]['CANDIDATE_PHONE'] || '';

	                    if (phone === null) {
	                        phone = '';
	                    }
	                    dtlBar = '<div class="scheduled-interview-info"><span class="brightTxt">With:</span> ' + canName + '</div>' +
	                                '<div class="scheduled-interview-info"><span class="brightTxt">For:</span> ' + data[i]['POSITION_NAME'] + '</div>' +
                                    '<div class="scheduled-interview-info"><span class="brightTxt">Req:</span> ' + data[i]['POSITION_ID'] + '</div>' +
	                                '<div class="scheduled-interview-info"><span class="brightTxt">At:</span> ' + tslot + '</div><br/>' +
	                                '<div class="scheduled-interview-info"><span class="brightTxt">Phone:</span> ' + phone.toPhone() + '</div>' +
                                    '<div class="scheduled-interview-info"><span class="brightTxt">Email:</span> ' + data[i]['CANDIDATE_EMAIL'] + '</div>';
	                    $schArea.append('<div onclick="adri.ui.dashboard.getInterview(\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');" class="interview-sch-info-node ckable">' + dtlBar + '</div>');
	                }
				    
	            },
	            drawUnscheduledInterviews: function (data) {
	                var $schArea = $('#unscheduled-interviews');
	                $schArea.html('');
	                var lim = data.length;

	                var dtlBar = '';
	                var canName = '';
	                var tslot = '';
	                var phone = '';
	                var email = '';
	                
	                for (var i = 0; i < lim; i++) {
	                    if (data[i]['CANDIDATE_ID'] !== null) {
	                        canName = data[i]['FULL_NAME']
	                    }
	                    else {
	                        canName = 'TBD';
	                    }

	                    tslot = 'TBD';
	                    phone = data[i]['CANDIDATE_PHONE'] || '';

	                    if (phone === null) {
	                        phone = '';
	                    }

	                    email = data[i]['CANDIDATE_EMAIL'] || '';

	                    if (email === null) {
	                        email = '';
	                    }

	                    dtlBar =    '<div class="interview-control-capsule">' +
	                                    //'<div class="stdWidget ckablef" onclick="optout(\'email\')">&#xf003;</div>' +
                                        //'<div class="stdWidget ckablef" onclick="optout(\'sms\')">&#xf10b;</div>' +
                                        '<div class="stdWidget ckablef" onclick="adri.ui.dashboard.deleteUser(\'' + data[i]['ROW_ID'] + '\',\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');">&#xf235;</div>' +
                                    '</div>' +
                                    '<div class="ckable interview-overview-capsule" onclick="adri.ui.dashboard.getInterview(\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');">' +
                                        '<div class="scheduled-interview-info"><span class="brightTxt">With:</span> ' + canName + '</div>' +
	                                    '<div class="scheduled-interview-info"><span class="brightTxt">For:</span> ' + data[i]['POSITION_NAME'] + '</div>' +
                                        '<div class="scheduled-interview-info"><span class="brightTxt">Req:</span> ' + data[i]['POSITION_ID'] + '</div>' +
	                                    '<div class="scheduled-interview-info"><span class="brightTxt">At:</span> ' + tslot + '</div><br/>' +
	                                    '<div class="scheduled-interview-info"><span class="brightTxt">Phone:</span> ' + phone.toPhone() + '</div>' +
                                        '<div class="scheduled-interview-info"><span class="brightTxt">Email:</span> ' + email + '</div>' +
                                        '<div id="loader-' + data[i]['ROW_ID'] + '" class="smallLoader pBG loadTxt"></div>' +
	                                '</div>';
	                    $schArea.append('<div class="interview-sch-info-node">' + dtlBar + '</div>');
	                    
	                }

	            },
	            drawPositionPool: function(data) {
	                var $pool = $('#position-pool');
	                var lim = data.length;
	                $pool.html('');

	                for (var i = 0; i < lim; i++) {
	                    $pool.append('<div onclick="adri.ui.dashboard.scheduleInterview(\'' + data[i]['POSITION_ID'] + '\');" class="pool-node mainBG negTxt ckable">' + data[i]['LONG_NAME'] + '</div>');
	                }

	                $pool.append('<button onclick="adri.ui.dashboard.addPosition();" class="thinButton hlBG negTxt ckable"><span>Add Position</span></button>');
	            },
	            getInterview:function(id){
	                constants.interview.id = btoa(id);
	                adri.ui.initialize();
	            },
	            addPosition: function () {
	                adri.ui.addPositionForm();
	            },
	            scheduleInterview: function (positionID) {
	                adri.ui.scheduleInterviewForm(positionID);
	            },
	            addParty: function () {
	                adri.interview.addUserForm();
	            },
	            notifyParties: function () {

	            },
	            refreshPool: function () {
	                var db = adri.ui.dashboard;
	                adri.ui.modal.close();
	                db.getPositions(function (data) {
	                    db.drawPositionPool(data);
	                });
	            },
	            refreshInterviews: function () {
	                adri.ui.selectedDate = adri.ui.selectedDate || '';
	                adri.ui.modal.close();
	                if (adri.ui.selectedDate !== '') {
	                    adri.ui.dashboard.getInterviewsForDate(adri.ui.selectedDate);
	                }
	            }
            },
            slideshow: {
                initialize: function () {
                    adri.ui.slideshow.populate();
                    adri.ui.slideshow.run();
                },
                populate: function () {
                    var slides =    '<div class="ss-slide active-slide"><div class="vCenter slideTxt">Welcome to the ADRI Self-Scheduling System.<br/><br/>We hope you enjoy the new layout!</div></div>' +
                                    '<div class="ss-slide"><div class="vCenter slideTxt">If you could fold a piece of paper 42 times, it would reach the moon.<br/><br/>The record number of folds is 12, so don\'t buy that space suit just yet.</div></div>' +
                                    '<div class="ss-slide"><div class="vCenter slideTxt">If you become fully staffed, remember to contact your Workday team so they can put a hold on your leads.</div></div>';
                    $('#main-splash').html(slides);
                },
                advance: function () {
                    var $active = $('#main-splash .active-slide');
                    var $next = $active.next();
                    if ($next.length === 0){
                        $next = $('#main-splash .ss-slide').first();
                    }
                    $next.addClass('active-slide');
                    window.setTimeout(function () {
                        $active.removeClass('active-slide');
                    }, 300);
                },
                run: function () {
                    setInterval(adri.ui.slideshow.advance, 8000);
                }
            },
	        modal:{
	            open: function () {
	                $('#modal-form').stop();
	                $('#modal-bg-overlay').stop();
	                $('#modal-bg-overlay').fadeIn(400, function () {
	                    $('#modal-form').fadeIn(400);
	                });
	            },
	            close: function () {
	                $('#modal-form').stop();
	                $('#modal-bg-overlay').stop();
	                $('#modal-form').fadeOut(400, function () {
	                    $('#modal-bg-overlay').fadeOut(400);
	                });
	            },
	            small: {
	                open: function () {
	                    $('#small-modal-bg-overlay').stop();
	                    $('#smallModal').stop();
	                    $('#small-modal-bg-overlay').fadeIn(400, function () {
	                        $('#smallModal').fadeIn(400);
	                    });
	                },
	                close: function () {
	                    $('#small-modal-bg-overlay').stop();
	                    $('#smallModal').stop();
	                    $('#smallModal').fadeOut(400, function () {
	                        $('#small-modal-bg-overlay').fadeOut(400);
	                    });
	                }
	            }
	        },
	        addPositionForm: function () {
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var posFields = field.input('Position ID', 'positions', 'id') + '<br/>' +
                                    field.input('Position Name', 'positions', 'name') + '<br/>' +
                                    field.select('Position Type', 'positions', 'type', ['Vacancy', 'Evergreen']); //TO-DO: un-hardcode this
                                  
	            posFields = '<div class="smallForm"><div class="smallFormFields"><div class="formHeader secHTxt">New Position</div>' + posFields + '</div></div>';
	            posFields = 
                            posFields +
                            '<hr />' +
                            '<button class="bigButton mainBG negTxt ckable" onclick="adri.ui.submitPosition(adri.ui.dashboard.refreshPool)">SUBMIT</button>';
	            $modal.html(posFields);
	            adri.ui.modal.open();
	        },
	        scheduleInterviewForm: function (positionID) {
	            adri.ui.form.resetData();
	            adri.ui.form.data.positions[0] = {
	                id: positionID
	            };
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var intFields = '<div id="new-event-form" class="form-event">' +
                                    '<div class="formHeader secHTxt">Enter ' + appconfig.alias.interview + ' Information</div>' +
									field.input(appconfig.alias.interview + ' Title', 'interview', 'title') +                                   
									'<div style="display:none;">' + field.input(appconfig.alias.interview + ' ID', 'interview', 'id') + '</div>' +                                       
									//field.input(appconfig.alias.interview + ' Address', 'interview', 'address') +                             //hard-coded
									//field.input(appconfig.alias.interview + ' City', 'interview', 'city') +                                   //hard-coded
									//field.input(appconfig.alias.interview + ' State', 'interview', 'state') +                            //hard-coded
									//field.input(appconfig.alias.interview + ' Zip', 'interview', 'zip') +                                //hard-coded
									field.input('Phone/ Conference Number', 'interview', 'conferenceNumber') +          
									field.input('Conference ID', 'interview', 'conferenceID') +                         
									field.input('Conference Code', 'interview', 'conferenceCode') +                     
									'<hr/>' +                                                                           
									field.userRepeater(appconfig.alias.candidate, 'users', 'candidates') +
									'<hr/>' +
									field.userRepeater(appconfig.alias.recruiter, 'users', 'recruiters') +
									'<hr/>' +
									field.userRepeater(appconfig.alias.interviewer, 'users', 'interviewers') +                     
								'</div>';

	            intFields = intFields +
                            '<hr />' +
                            '<button class="bigButton mainBG negTxt ckable" onclick="adri.ui.form.submit(adri.ui.dashboard.refreshInterviews)">SUBMIT</button>';
	            $modal.html(intFields);

	            var dNow = new Date();
	            var iid = dNow.getTime() + '-' + atob(constants.interview.user);
	            $('#field-id').val(iid);
	            $('#field-id').change();

	            adri.ui.modal.open();
	        },
	        submitPosition: function (onComplete) {

	            var jData = adri.ui.form.data.positions;
	            jData.clientID = constants.interview.client;
	            jData.userID = constants.interview.user;
	            jData.uiID = constants.interview.ui;

	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.addPosition,
	                data: JSON.stringify(jData),
	                success: function (data) {
	                    adri.ui.form.resetData();
	                    onComplete();
	                },
	                error: function (xhr, ajaxOptions, error) {
	                    console.log(xhr);
	                }
	            });
	        },
	        submitInterview: function () {
	            adri.ui.form.submit();
	        },
	        accordion: function (id) {
	            var accItem = document.getElementsByClassName();
	            var accHeader = document.getElementsByClassName();

	            accHeader[id].addEventListener('click', theToggle, false);

	            function theToggle() {
	                var theClass = this.parentNode.className;
	                for (e = 0; e < accItem.length; e++) {
	                    accItem[e].className = '';
	                }
	                if (theClass == '') {
	                    this.parentNode.className = '';
	                }
	            }
	        },
	        debug:function(){
	            var $Content = $('#adri-ras-content');
	            var b1 = '<button type="button" onclick="adri.interview.get()">Get ' + appconfig.alias.interview + ' Info</button>';
	            var b2 = '<button type="button" onclick="adri.ui.time.load(\'adri-ras-content\')">Load Time Controls</button>';
	            var b3 = '<button type="button" onclick="adri.ui.availability.load()">Get Availability</button>';
	            var b4 = '<button type="button" onclick="adri.ui.form.newEvent()">Create Event</button>';
	            var markup = 	'<div style="text-align:center;">'+
									b1 +
									b2 +
									b3 +
									b4 +
								'</div>';
	            $Content.html(markup);
	        },
	        setData:function(id, field, value){
	            adri.data[id][field] = value;
	        },
	        time:{
	            load: function (elmt) {
	                adri.ui.form.data = {
	                    userID: constants.interview.user,
	                    interviewID: constants.interview.id,
	                    clientID: constants.interview.client,
	                    uiID: constants.interview.ui,
	                    availability: []
	                };
	                var today = new Date();
	                var cctr = '<div id="adri-ras-calendar-control" style="height:90%;width:90%;margin:0 auto;"></div>'; //maybe add to css
	                $('#' + elmt).html(cctr);
	                adri.util.controls.calendar.draw('adri-ras-calendar-control', today.getMonth(), today.getFullYear());
	            },
	            submit:function(){
	                var jData = adri.timeslot.wrap();
	                adri.timeslot.add(jData);
	            },
	            dateNode:{
	                add:function(date, element){
	                    var dtNode = adri.ui.template.dateNode(adri.ui.time.dateNode.count, date);
	                    var schdate = new BlockDate(date);
	                    schdate.userID = atob(constants.interview.user);
	                    schdate.status = 'Proposed';
	                    schdate.interviewID = constants.interview.id;
	                    adri.ui.form.data.availability.push([schdate]);
	                    $('#' + element).append(dtNode);
	                    adri.data[adri.ui.time.dateNode.count] = new ADRITime(date,'12','00','AM','Accepted');
	                    adri.ui.time.dateNode.count++;
	                },
	                remove: function(id){
	                    var $nodeID = $('#datetime-node-' + id);
	                    $nodeID.remove();
	                },
	                count: 0
	            }
	        },
	        availability:{
	            load:function(){
	                adri.ui.availability.get();
	            },
	            get:function(onComplete){
	                var svc = constants.urls.getTimeSlots + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: svc,
	                    success: function(data){
	                        onComplete(data[0]);
	                    },
	                    error:function(xhr, ajaxOptions, error){
	                        console.log(xhr);
	                    }
	                });
	            },
	            drawNodes:function(data){
	                var lim = data.length;
	                var $Content = $('#adri-ras-timeNodes');
	                $Content.html('');
	                var map = {};
	                for(var i = 0; i < lim; i++){
	                    if(!map[data[i]['TIME_SLOT']]){
	                        map[data[i]['TIME_SLOT']] = data[i];
	                        map[data[i]['TIME_SLOT']].users = [];
	                    }
						
	                    map[data[i]['TIME_SLOT']].users.push(data[i]['USER_FNAME'] + ' ' + data[i]['USER_LNAME']);
						
	                }
					
	                for(var time in map){
	                    $Content.append(adri.ui.template.availabilityNode(map[time]));
	                }
	            },
	            drawUserTimes:function(data){
	                var lim = data.length;
	                var $user = '';
	                var map = {};
					
	                $('.user-date-node-struct').html('');

	                for(var i = 0; i < lim; i++){
	                    data['TIME_SLOT'] = data['TIME_SLOT'] || '';
						
	                    if(data[i]['TIME_SLOT'] != '' && data[i]['TIME_SLOT'] != null){
	                        $user = $('#user-availability-' + data[i]['USER_ID']);
						
	                        if(!map[data[i]['USER_ID']]){
	                            map[data[i]['USER_ID']] = data[i];
	                            $user.html('');
	                        }
	                        $user.append(adri.ui.template.availabilityNodeSingle(data[i]));
	                        if(data[i]['CANDIDATE_ID'] !== null){
	                            $('#user-availability-' + data[i]['CANDIDATE_ID']).append(adri.ui.template.availabilityNodeSingle(data[i]));
	                        }
	                    }
	                }
					
	            }
	        },
	        template:{
	            field: {
	                wrap: function (label, field) {
	                    var markup = '<div class="repeaterField left">' +
											'<span class="mainHTxt">' + label + '</span>' +
                                            '<hr class="tightHR" />' +
											field +
										'</div>';
	                    return markup;
	                },
	                toggler: function (label, icon, updates, field, value) {
	                    var markup = '<div class="field-wrapper">' +
											'<span class="secHTxt">' + label + '</span>' +
											'<div class="field-toggler ckable" data-state="off" data-value="' + value + '" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).attr(\'data-value\'));"><div>' + icon + '</div></div>' +
										'</div>';
	                    return markup;
	                },
	                groupToggle: function (icon, updates, field) {
	                    var markup = '<div class="field-toggler ckable" data-state="off" data-value="no" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).attr(\'data-value\'));"><div>' + icon + '</div></div>';
	                    return markup;
	                },
	                dayToggle: function (icon, updates, index) {
	                    var markup = '<div class="field-toggler ckable" id="day-toggle-' + index + '-' + updates + '" data-state="off" data-value="no" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.instantiateDay(\'' + updates + '\',\'' + index + '\');"><div>' + icon + '</div></div>';
	                    return markup;
	                },
	                select: function (label, updates, field, choices) {
	                    var lim = choices.length;
	                    var opts = '';
	                    for (var i = 0; i < lim; i++) {
	                        opts = opts + '<option value="' + choices[i] + '">' + choices[i] + '</option>';
	                    }

	                    adri.ui.form.setData(updates, field, choices[0]);

	                    var markup = '<div class="field-wrapper">' +
											'<span>' + label + '</span>' +
											'<select onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());">' + opts + '</select>' +
										'</div>';
	                    return markup;
	                },
	                input: function (label, updates, field, value) {
	                    value = value || '';
	                    var markup = 	'<div class="field-wrapper">' +
											'<span>' + label + '</span>' +
											'<input id="field-' + field + '" onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());">' + value + '</input>' +
										'</div>';
	                    return markup;
	                },
	                number: function (label, updates, field, step, value, min) {
	                    min = min || 0;
	                    value = value || '';
	                    step = step || '1';
	                    var markup = '<div class="field-wrapper">' +
											'<span>' + label + '</span>' +
											'<input type="number" min="' + min + '" id="field-' + field + '" step="' + step + '" value="' + value + '" onchange="adri.util.checkNumValue($(this),' + min + ',' + step + ');adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
	                    return markup;
	                },
	                userInput:function(label, role, index, field){
	                    var markup = 	'<div class="field-wrapper">' + 
											'<span>' + label + '</span>' +
											'<input onchange="adri.ui.form.setUserData(\'' + role + '\',\'' + index + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
	                    return markup;
	                },
	                userRepeater: function(label, updates, field){
	                    var rid = label.split(/[^A-Za-z0-9]/).join('');
	                    var markup = '<div id="user-repeater-' + rid + '"></div><button class="thinButton hlBG negTxt ckable" onclick="adri.ui.form.addUser(\'user-repeater-' + rid + '\',\'' + label + '\',\'' + updates + '\',\'' + field + '\')"><span>Add ' + label + '</span></button>';
	                    return markup;
	                },
	                user: function (role, updates, fld) {
	                    var nodes = $('.form-user-node-struct').length;
	                    adri.ui.form.data.users[fld][nodes] = {};
	                    var field = adri.ui.template.field;
	                    var markup = '<div id="user-' + nodes + '" class="form-user-node">' +
                            '<div id="user-' + nodes + '" class="formHeader secHTxt">Enter ' + role + ' Information</div>' +
                                field.userInput(role + ' ID', fld, nodes, 'id') +
                                field.userInput(role + ' First Name', fld, nodes, 'firstName') +
                                field.userInput(role + ' Last Name', fld, nodes, 'lastName') +
                                field.userInput(role + ' Email', fld, nodes, 'email') +
                                field.userInput(role + ' Phone', fld, nodes, 'phone') +
                            '</div>';
	                    return markup;
	                },
	                timeNodes: function (category, index) {
	                    var zone;
	                    var markup = '';;
	                    var timeData = adri.util.time.propagateWorkhoursArray();
	                    var hours = timeData.hours;
	                    var minutes = timeData.minutes;
	                    var period = timeData.period;
	                    var hrs = hours.length;
	                    var mins = minutes.length;
	                    
	                    var hmkup = '';
	                    for (var h = 0; h < hrs; h++) {
	                        hmkup = hmkup + adri.ui.template.field.workHourNode(category, index, 'radio-hours-' + index + '-' + category, hours[h]);
	                    }

	                    markup = '<div class="mobile-hscroll"><div id="radio-hours-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Hour</div><div>' + hmkup + '</div></div><div class="ampmGradient timenode-bar"></div></div>';

	                    var mmkup = '';
	                    for (var m = 0; m < mins; m++) {
	                        mmkup = mmkup + adri.ui.template.field.timeNode(category, index, 'radio-minutes-' + index + '-' + category, minutes[m], minutes[m]);
	                    }

	                    markup = markup + '<div class="mobile-hscroll"><div id="radio-minutes-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Minute</div>' + mmkup + '</div></div>';

	                    return markup;
	                },
	                workHourNode: function (category, index, zone, value) {
	                    var markup = '<div id="' + zone + '-' + index + '-' + value.join('') + '" class="field-toggler ckable radio" data-value="' + value[0] + '" onclick="adri.ui.form.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'hour\',\'' + value[0] + '\'); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'period\',\'' + value[1] + '\');"><div>' + value[0] + '</div></div>';
	                    return markup;
	                },
	                timeNode: function (category, index, zone, value, icon) {
	                    var markup = '<div class="field-toggler ckable radio" id="' + zone + '-' + index + '-' + value + '" onclick="adri.ui.form.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'minutes\',\'' + value + '\');"><div>' + icon + '</div></div>';
	                    return markup;
	                }
	            },
	            availabilityNode:function(data){
	                var fields = [
						'INTERVIEW_REFERENCE_ID',
						'TIME_SLOT',
						'TIME_SLOT_STATUS',
						'TSID',
						'USER_FNAME',
						'USER_ID',
						'USER_LNAME',
						'USER_ROLE'
	                ];
					
	                data['TIME_SLOT'] = data['TIME_SLOT'] || '';
					
	                var nodeID = data['TIME_SLOT'].split(/[^0-9]/).join('-');
	                var markup = 	'<div id="availability-node-' + nodeID + '" class="date-node">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
										'<div>' + data.users.join('\<br\/\>') + '</div>' +
									'</div>';
	                return markup;
					
	            },
	            availabilityNodeSingle:function(data){
	                var nodeID = data['TIME_SLOT'].split(/[^0-9]/).join('-');
	                var markup = 	'<div id="availability-node-' + nodeID + '" class="date-node-single">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
										'<div class="remove-widget" onclick="adri.timeslot.deleteSlot(\'' + data['TSID'] + '\');">&#xf05c;</div>' +
									'</div>';
	                return markup;
	            },
	            userNode:function(data){
	                var fields = [
						'INTERVIEW_REFERENCE_ID',
						'USER_FNAME',
						'USER_ID',
						'USER_LNAME',
						'USER_ROLE',
						'USER_PHONE',
						'USER_EMAIL',
						'ROW_ID'
	                ];
					
	                var fullName = data['USER_FNAME'] + ' ' + data['USER_LNAME'];
					
	                var nodeID = data['USER_ID'];

	                if (data['USER_PHONE'] === null) {
	                    data['USER_PHONE'] = '';
	                }

	                var uid = atob(constants.interview.user);
	                var delUser = '<div class="remove-widget" onclick="adri.interview.deleteUser(\'' + data['ROW_ID'] + '\');">&#xf05c;</div>';
	                if (uid === data.USER_ID) {
	                    delUser = '';
	                }

	                delUser = ''; //uncomment to allow users to be deleted from interviews -- needs to be added to config file

	                var role = data['USER_ROLE'] || '';
	                if (role === null) {
	                    role = '';
	                }
	                
	                role = role.split('Interviewer').join(appconfig.alias.interviewer); //hard-coded
	                role = role.split('Candidate').join(appconfig.alias.candidate);
	                role = role.split('Recruiter').join(appconfig.alias.recruiter);

	                var markup = 	'<div id="user-node-' + nodeID + '" class="ui-user-node">' +
										delUser +
                                        '<div class="ui-user-node-info">' +
                                            '<div class="ui-user-node-header">' + fullName + '</div>' +
                                            '<hr />' +
                                            '<div class="ui-user-node-body">' + role + '</div>' +
                                            '<div class="ui-user-node-body">' + data['USER_PHONE'] + '</div>' +
                                            '<div class="ui-user-node-body">' + data['USER_EMAIL'] + '</div>' +
											'<div id="user-availability-' + nodeID + '" class="user-date-node"></div>' +
											'<div class="add-widget" onclick="adri.timeslot.addControls(\'modal-form\',\'' + data['USER_ID'] + '\',\'' + fullName + '\',\'' + data['USER_ROLE'] + '\');">&#xf271;</div>' +
                                            '<div class="add-widget" onclick="adri.util.emailUser(\'' + data['USER_ID'] + '\');">&#xf003;</div>' +
                                            '<div class="add-widget" onclick="adri.util.smsUser(\'' + data['USER_ID'] + '\');">&#xf10b;</div>' +
                                        '</div>' +
									'</div>';
	                return markup;
	            },
	            addUserNode:function(){
	                return '<div onclick="adri.interview.addUserForm();" class="add-user-container"><div class="add-user-widget">&#xf234;</div></div>';
	            },
	            dateNode: function (nodeID, date) {
	                var field = adri.ui.template.field;
	                var index = $('.ti-schedule-node').length;
                    var startSelector = field.timeNodes('startTime', index);
                    var markup = '<div id="datetime-node-' + nodeID + '" class="ti-schedule-node pBG">' +
										adri.ui.template.date(date) +
										field.wrap('Start Time', startSelector) + '<br />' +
									'</div>';
	                return markup;
	            },
	            timeSelect:function(id, opts, field){
	                return '<select id="' + id + '" class="time-select" onchange="adri.ui.setData(\'' + id + '\',\'' + field + '\',$(this).val())">' + opts + '</select>';
	            },
	            date:function(date){
	                var da = date.split('-');
	                var formattedDate = da[1] + '/' + da[2] + '/' + da[0];
	                var markup = '<span>' + formattedDate + ': </span>'; //fix this up
	                return markup;
	            }
	        },
	        form:{
	            data: {
	                clientID: constants.interview.client,
	                userID: constants.interview.user,
                    uiID: constants.interview.ui,
	                interview:{},
	                positions:{},
	                users:{
	                    candidates:{},
	                    recruiters:{},
	                    interviewers:{}
	                }
	            },
	            resetData: function () {
	                adri.ui.form.data = {
	                    clientID: constants.interview.client,
	                    userID: constants.interview.user,
	                    uiID: constants.interview.ui,
	                    interview: {},
	                    positions: {},
	                    users: {
	                        candidates: {},
	                        recruiters: {},
	                        interviewers: {}
	                    }
	                };
	            },
	            setData: function(updates, field, val){
	                adri.ui.form.data[updates][field] = val;
	            },
	            setSubData: function (updates, field, subField, val) {
	                adri.ui.form.data[updates][field][subField] = val;
	            },
	            setBlockTime: function (category, index, field, value) {
	                var lim = adri.ui.form.data.availability[index].length;
	                
	                for (var i = 0; i < lim; i++){
	                    adri.ui.form.data.availability[index][i].schedule[category][field] = value;
	                }
	            },
	            instantiateDay: function (day, index) {
	                var $node = $('#day-toggle-' + index + '-' + day);
	                var state = $node.attr('data-state');

	                if (state === 'off') {
	                    var lim = adri.ui.form.data.availability[index].length;
	                    var ids = [];
	                    for (var i = 0; i < lim; i++) {
	                        if (adri.ui.form.data.availability[index][i].day === day) {
	                            ids.push(i);
	                        }
	                    }

	                    for (var n = ids.length - 1; n > -1; n--){
	                        adri.ui.form.data.availability[index].splice(ids[n],1);
	                    }
	                }
	                else {
	                    var block = new BlockDay(day);
	                    if (!adri.ui.form.data.availability[index]) {
	                        adri.ui.form.data.availability.push([block]);
	                    }
	                    else {
	                        block.schedule = adri.ui.form.data.availability[index][0].schedule;
	                        adri.ui.form.data.availability[index].push(block);
	                    }
	                }
	            },
	            setUserData: function (role, index, field, val) {
	                adri.ui.form.data.users[role][index][field] = val;
	            },
	            addUser: function(el, role, updates, field){
	                var markup = adri.ui.template.field.user(role, updates, field);
	                $('#' + el).append(markup);
	            },
	            removeUser: function(id, updates){
					
	            },
	            newEvent:function(){
	                var $content = $('#adri-ras-content');
	                var field = adri.ui.template.field;
	                var interview = adri.ui.form.data.interview;
	                var position = adri.ui.form.data.positions;
	                var users = adri.ui.form.data.users;
                    var form = '<div id="new-event-form" class="form-event">' +
                                    '<div class="formHeader secHTxt">Enter ' + appconfig.alias.interview + ' Information</div>' +        //hard-coded
									field.input(appconfig.alias.interview + ' Title', 'interview', 'title') +                       //hard-coded
									'<div style="display:none;">' + field.input(appconfig.alias.interview + ' ID', 'interview', 'id') + '</div>' +
									//field.input(appconfig.alias.interview + ' Address', 'interview', 'address') +
									//field.input(appconfig.alias.interview + ' City', 'interview', 'city') +
									//field.input(appconfig.alias.interview + ' State', 'interview', 'state') +
									//field.input(appconfig.alias.interview + ' Zip', 'interview', 'zip') +
									field.input('Phone/ Conference Number', 'interview', 'conferenceNumber') +   //hard-coded
									field.input('Conference ID', 'interview', 'conferenceID') +           //hard-coded
									field.input('Conference Code', 'interview', 'conferenceCode') +       //hard-coded
									'<hr/>'+
									field.input('Position ID', 'positions', 'id') +
									field.input('Position Name', 'positions', 'name') +
									'<hr/>'+
									field.userRepeater(appconfig.alias.candidate,'users', 'candidates') +
									'<hr/>'+
									field.userRepeater(appconfig.alias.recruiter,'users', 'recruiters') +
									'<hr/>'+
									field.userRepeater(appconfig.alias.interviewer, 'users', 'interviewers') +      //hard-coded
								'</div>' +
								'<div style="width:100%;text-align:center;"><button type="button" onclick="adri.ui.form.submit()">Create Event!</button></div>';
                    $content.html(form);

                    var dNow = new Date();
                    var iid = dNow.getTime() + '-' + atob(constants.interview.user);
                    $('#field-id').val(iid);
                    $('#field-id').change();
	            },
	            submit: function (onComplete) {

	                console.log(JSON.stringify(adri.ui.form.data));

	                $.ajax({
	                    type: "POST",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.addInterview,
	                    data: JSON.stringify(adri.ui.form.data),
	                    success: function(data){
	                        adri.ui.form.resetData();

	                        if (typeof onComplete === "function") {
	                            onComplete();
	                        }
	                    },
	                    error:function(xhr, ajaxOptions, error){
	                        console.log(xhr);
	                    }
	                });
	            },
	            setToggler: function ($toggler) {
	                var state = $toggler.attr('data-state');
	                if (state === 'off') {
	                    $toggler.attr('data-state', 'on');
	                    $toggler.attr('data-value', 'yes');
	                    $toggler.addClass('cked');
	                }
	                else {
	                    $toggler.attr('data-state', 'off');
	                    $toggler.attr('data-value', 'no');
	                    $toggler.removeClass('cked');
	                }
	            },
	            setRadio: function (zone, $radio) {
	                $('#' + zone + ' .radio').removeClass('cked');
	                $radio.addClass('cked');
	            }
	        }
	    },
	    interview:{
	        scheduling:{
	            userID:'',
	            userName:'',
	            userRole:''
	        },
	        get:function(onComplete){
	            $.ajax({
	                type: "GET",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.getInterview + "?iref=" + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client,
	                success: function(data){
	                    onComplete(data[0][0]);
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
            },
	        loadToUI: function (data) {
	            $('#page-title').html(appconfig.alias.interview + ' Details');
	            var $el = $('#dynamic-content-area');
	            var interview = data;

	            var iFields = [
                    //['ID', 'INTERVIEW_REFERENCE_ID'], //hard-coded
                    ['Title', 'INTERVIEW_TITLE'],
                    //['Address', 'INTERVIEW_ADDRESS'], //hard-coded
                    //['City', 'INTERVIEW_CITY'],           //hard-coded
                    //['State', 'INTERVIEW_STATE'],         //hard-coded
                    //['Zip', 'INTERVIEW_ZIP'],             //hard-coded
                    ['Conference Number', 'INTERVIEW_CONFERENCE_NUMBER'],
                    ['Conference Code', 'INTERVIEW_CONFERENCE_CODE'],
                    ['Conference ID', 'INTERVIEW_CONFERENCE_ID']
	            ];
                
	            var iCard = '<div id="interview-info-container" class="int-info-container">' +
                                '<div id="dtl-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="interviewCard">' +
                                    '<div id="dtl-txt-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="interviewCardContents pBG">' +
                                        '<div id="interview-info-header" class="formHeader secHTxt">' + appconfig.alias.interview + ' for ' + interview['POSITION_NAME'] + '</div>' +  //hard-coded
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="interviewNodeArea pBG">' +
                                '<div class="formHeader secHTxt">Users Associated with ' + appconfig.alias.interview + '</div>' +    //hard-coded
                                '<div id="adri-ras-timeNodes"></div>' +
                            '</div>' +
                            '<div id="modal-form" class="modal-form"></div>' +
                            '<div id="modal-bg-overlay" class="modal-overlay" onclick="adri.timeslot.removeControls();"></div>';

	            $el.html(iCard);
	            var tMarkup = '';
	            for (var i = 0; i < iFields.length; i++) {

	                if (interview[iFields[i][1]] === null) {
	                    interview[iFields[i][1]] = '';
	                }

	                tMarkup = '<div class="icardFldWrap">' +
                        '<div class="icardField brightTxt">' + iFields[i][0] + '</div><div class="maintxt fixedHgt">' + interview[iFields[i][1]] + '</div>' +
                        '</div>';
	                $('#dtl-txt-' + interview['INTERVIEW_REFERENCE_ID']).append(tMarkup);
                }

                $('.dynamicContent').fadeIn('fast');
	        },
	        getUsers:function(onComplete){
	            var svc = constants.urls.getUsers + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
	            $.ajax({
	                type: "GET",
	                contentType: 'application/json',
	                dataType: "json",
	                url: svc,
	                success: function(data){
	                    onComplete(data[0]);
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        },
	        addUserNodes: function (data) {
	            var lim = data.length;
	            var $Content = $('#adri-ras-timeNodes');
	            $Content.html('');
	            var map = {};
					
	            for(var i = 0; i < lim; i++){
	                if(!map[data[i]['USER_ID']]){
	                    map[data[i]['USER_ID']] = data[i];
	                }
	            }
					
	            for(var user in map){
	                $Content.append(adri.ui.template.userNode(map[user]));
	            }
	            //$Content.append(adri.ui.template.addUserNode()); uncomment to allow addition of users -- options needs to be added to some config file or something
	        },
	        addUserForm: function () {
	            adri.ui.form.resetData();
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var userFields =    field.userRepeater(appconfig.alias.candidate, 'users', 'candidates') +
                                    field.userRepeater(appconfig.alias.recruiter, 'users', 'recruiters') +
                                    field.userRepeater(appconfig.alias.interviewer, 'users', 'interviewers') +    //hard-coded
                                  '<hr \>' +
                                  '<button class="bigButton mainBG negTxt ckable" onclick="adri.interview.submitUsers()">SUBMIT</button>';
	            $modal.html(userFields);
	            adri.ui.modal.open();
	        },
	        submitUsers:function(){
	            adri.ui.form.data.interview.id = constants.interview.id;

	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.addUsers,
	                data: JSON.stringify(adri.ui.form.data),
	                success: function(data){
	                    adri.ui.form.resetData();
	                    adri.interview.getUsers(function(data){
	                        adri.interview.addUserNodes(data);
	                        adri.ui.availability.get(function(data){
	                            adri.ui.availability.drawUserTimes(data);
	                        });
	                    });
	                    adri.ui.modal.close();
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
				
	        },
	        deleteUser:function(id){
	            var jsData = {
	                id: id,
	                clientID: constants.interview.client,
	                userID: constants.interview.user,
	                uiID: constants.interview.ui,
                    interviewID: constants.interview.id
	            };
	            
	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.deleteUser,
	                data: JSON.stringify(jsData),
	                success: function(data){
						adri.interview.getUsers(function(data){
	                        adri.interview.addUserNodes(data);
	                        adri.ui.availability.get(function(data){
	                            adri.ui.availability.drawUserTimes(data);
	                        });
	                    });
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        }
	    },
	    timeslot:{
	        wrap:function(){
	            var jsData = {
	                data: [],
	                info: {
	                    uiID: constants.interview.ui,
	                    userID: constants.interview.user,
	                    clientID: constants.interview.client
	                }
	            };
	            var index = 0;
	            var timeslot;
				
	            var lim = adri.ui.form.data.availability.length;

	            for (var i = 0; i < lim; i++){
	                timeslot = adri.ui.form.data.availability[i][0];
	                jsData.data[index] = new APITimeInstance(timeslot);
	                index++;
	            }

	            return jsData;
	        },
	        add: function (jsData) {
	            console.log(JSON.stringify(jsData));
	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.addTimeSlot,
	                data: JSON.stringify(jsData),
	                success: function(data){
	                    adri.data = {};
	                    adri.timeslot.removeControls();
	                    adri.ui.availability.get(function(data){
	                        adri.ui.availability.drawUserTimes(data);
	                    });
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        },
	        addControls:function(elmt, userID, userName, userRole){
	            adri.interview.scheduling = {
	                userID:userID,
	                userName:userName,
	                userRole:userRole
	            };
	            adri.ui.time.load(elmt);
	            adri.ui.modal.open();
	        },
	        removeControls:function(){
	            adri.interview.scheduling = {
	                userID:'',
	                userName:'',
	                userRole:''
	            };
	            adri.ui.modal.close();
	        },
	        deleteSlot:function(id){
	            var jsData = {
	                id: id,
	                interviewID: constants.interview.id,
	                uiID: constants.interview.ui,
	                userID: constants.interview.user,
                    clientID: constants.interview.client
	            };

	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.deleteTimeSlot,
	                data: JSON.stringify(jsData),
	                success: function(data){
	                    adri.ui.availability.get(function(data){
	                        adri.ui.availability.drawUserTimes(data);
	                    });
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        }
	    },
	    user:{
	        validate:function(onComplete){
	            var svc = constants.urls.validateUser + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
	            $.ajax({
	                type: "GET",
	                contentType: 'application/json',
	                dataType: "json",
	                url: svc,
	                success: function (data) {
	                    onComplete(data);
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        },
	        info: {
	            launchEditForm: function () {
	                adri.user.info.edit(constants.interview.user);
	            },
	            edit: function (userID) {
	                var $modal = $('#modal-form');
	                var form = adri.user.info.form(userID);
	                $modal.html(form);
	                adri.user.info.load(userID);
	                adri.ui.modal.open();
	            },
	            form: function (userID) {
	                var field = adri.ui.template.field;
	                var wdGroup =   field.dayToggle('Su', 'sunday', 0) +
                                    field.dayToggle('Mo', 'monday', 0) +
                                    field.dayToggle('Tu', 'tuesday', 0) +
                                    field.dayToggle('We', 'wednesday', 0) +
                                    field.dayToggle('Th', 'thursday', 0) +
                                    field.dayToggle('Fr', 'friday', 0) +
                                    field.dayToggle('Sa', 'saturday', 0);

	                var startSelector = field.timeNodes('startTime', 0);
	                var endSelector = field.timeNodes('endTime', 0);
	                var lunchSelector = field.timeNodes('lunchTime', 0);

	                var form = '<div class="formContent pBG">' +
                                    '<div class="formHeader secHTxt centered">Identifying Information</div>' +
                                    field.input('First Name', 'info', 'fName') +
                                    field.input('Last Name', 'info', 'lName') +
	                                field.input('Email Address', 'info', 'email') +
                                    field.input('Phone Number', 'info', 'phone') +
	                                field.input('Location', 'info', 'location') +
                                    field.number('Default ' + appconfig.alias.interview + ' Length (Minutes)', 'info', 'defaultInterviewMinutes', 5, 20, 10) +           //hard-coded
                                    field.number(appconfig.alias.interviewer + ' Rank', 'info', 'ranking', 1, 1, 0) +                                     //hard-coded
                                    '<div class="formHeader secHTxt centered">Persistent Availability</div>' +
                                    '<div id="block-schedule-area" class="block-container">' +
                                        '<div class="block-repeater pBG">' +
	                                        field.wrap('Days Available', wdGroup) + '<br />' +
	                                        field.wrap('Availability Start', startSelector) + '<br />' +
	                                        field.wrap('Availability End', endSelector) + '<br />' +
	                                        field.wrap('Lunch Hour', lunchSelector) +
                                        '</div>' +
	                                '</div>' +
	                                '<div class="block-repeater-add">' +
                                        '<div class="stdWidget ckablef" onclick="adri.user.info.addBlockRepeater();">&#xf017;<div class="inline-text">&nbsp;Add Another Schedule</div></div>' +
	                                '</div>' +
                                    '<div class="centered spanned"><button type="button" class="bigButton mainBG negTxt ckable" onclick="adri.user.info.update(\'' + userID + '\',adri.user.info.updated)">Submit</button></div><div class="spacer"></div>' +
	                            '</div>';
	                return form;
	            },
	            addBlockRepeater: function () {
	                var index = $('.block-repeater').length;
	                var field = adri.ui.template.field;
	                var wdGroup = field.dayToggle('Su', 'sunday', index) +
                                    field.dayToggle('Mo', 'monday', index) +
                                    field.dayToggle('Tu', 'tuesday', index) +
                                    field.dayToggle('We', 'wednesday', index) +
                                    field.dayToggle('Th', 'thursday', index) +
                                    field.dayToggle('Fr', 'friday', index) +
                                    field.dayToggle('Sa', 'saturday', index);

	                var startSelector = field.timeNodes('startTime', index);
	                var endSelector = field.timeNodes('endTime', index);
	                var lunchSelector = field.timeNodes('lunchTime', index);
	                var block = '<div class="block-repeater pBG">' +
	                                field.wrap('Days Available', wdGroup) + '<br />' +
	                                field.wrap('Availability Start', startSelector) + '<br />' +
	                                field.wrap('Availability End', endSelector) + '<br />' +
	                                field.wrap('Lunch Hour', lunchSelector) +
                                '</div>';
	                $('#block-schedule-area').append(block);
	            },
	            load: function (userID) {
                    adri.user.info.get(userID,function (data) {
	                    adri.user.info.set(data);
	                });
	            },
	            get: function (userID, onComplete) {
	                var svc = constants.urls.persistentAvailability + '?uid=' + userID + '&cliid=' + constants.interview.client + '&uiid=' + constants.interview.ui;
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: svc,
	                    success: function (data) {
	                        onComplete(data);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            set: function (data) {

	                var pa = data.persistentAvailability[0];
	                var uInfo = data.userInfo[0][0];

	                adri.ui.form.data = {
	                    userID: btoa(uInfo.USER_ID),
	                    interviewID: constants.interview.id,
	                    clientID: constants.interview.client,
	                    uiID: constants.interview.ui,
	                    info:{
	                        id: btoa(uInfo.USER_ID),
                            fName: '',
                            lName: '',
                            email: '',
                            phone: '',
                            location: '',
                            defaultInterviewMinutes: '20',
                            ranking: '1'
	                    },
	                    availability: []
	                };

	                var flds = [
                        ['fName', 'USER_FNAME'],
                        ['lName', 'USER_LNAME'],
                        ['email', 'USER_EMAIL'],
                        ['phone', 'USER_PHONE'],
                        ['location', 'LOCATION'],
                        ['defaultInterviewMinutes', 'DEFAULT_INTERVIEW_LENGTH'],
                        ['ranking', 'INTERVIEW_RANK']
	                ];

	                var lim = flds.length;

	                for (var i = 0; i < lim; i++){
	                    $('#field-' + flds[i][0]).val(uInfo[flds[i][1]]);
	                    adri.ui.form.data.info[flds[i][0]] = uInfo[flds[i][1]];
	                }

	                var dlm = adri.ui.form.data.info.defaultInterviewMinutes;

	                if(dlm === '' || dlm === null){
	                    adri.ui.form.data.info.defaultInterviewMinutes = 20;
	                    $('#field-defaultInterviewMinutes').val(20);
	                }

	                function timeConvert(ts) {
	                    var tps = ts.split('\:');
	                    if (tps[0] == '12') {
	                        tps[0] = '12PM'
	                    }
	                    else if (+tps[0] > 12) {
	                        tps[0] = (+tps[0] - 12) + 'PM';
	                    }
	                    else {
	                        tps[0] = +tps[0] + 'AM';
	                    }

	                    var o = {
	                        hour: tps[0],
                            minute: tps[1]
	                    };
	                    return o;
	                }

	                function setTimeNode(t, tInstance, field) {
	                    var h;
	                    var m;
	                    var p;
	                    var tm;
	                    tm = timeConvert(tInstance);
	                    h = tm.hour;
	                    m = tm.minute;
	                    
	                    $('#radio-hours-' + t + '-' + field + '-' + t + '-' + h).click();
	                    $('#radio-minutes-' + t + '-' + field + '-' + t + '-' + m).click();
	                }

	                var tLim = pa.length;
	                var tMap = {};
	                var dateKey = '';
	                var cIndex = 0;
	                
	                for(var n = 0; n < tLim; n++){
	                    dateKey = pa[n].AVAILABLE_START + '-' + pa[n].AVAILABLE_END + '-' + pa[n].LUNCH_START;

	                    if (typeof tMap[dateKey] === 'undefined') {
	                        if(n !== 0){
	                            adri.user.info.addBlockRepeater();
	                        }
	                        cIndex = adri.ui.form.data.availability.length;
	                        tMap[dateKey] = cIndex;
	                        $('#day-toggle-' + cIndex + '-' + pa[n].AVAILABLE_DAY.toLowerCase()).click();

	                        setTimeNode(cIndex, pa[n].AVAILABLE_START, 'startTime');
	                        setTimeNode(cIndex, pa[n].AVAILABLE_END, 'endTime');
	                        setTimeNode(cIndex, pa[n].LUNCH_START, 'lunchTime');
	                    }
	                    else {
	                        cIndex = tMap[dateKey];
	                        $('#day-toggle-' + cIndex + '-' + pa[n].AVAILABLE_DAY.toLowerCase()).click();
	                    }
	                }
	            },
	            update: function (userID, onComplete) {
	                var jData = adri.user.info.setJson();

	                $.ajax({
	                    type: "POST",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.persistentAvailability,
	                    data: jData,
	                    success: function (data) {
	                        onComplete();
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            updated: function () {
	                adri.ui.form.resetData();
	                adri.ui.modal.close();
	            },
	            setJson: function () {
	                var jData = adri.ui.form.data;
	                return JSON.stringify(jData);
	            }
	        }
	    },
	    util: {
	        checkNumValue: function ($el, min, step) {
	            var vl = $el.val();
	            
	            step = step || 1;
	            if(step > 1){
	                vl = step * Math.round(vl / step);
	                $el.val(vl);
	            }

	            $el.val(Math.max(min, vl));
	            
	        },
	        emailUser: function (userID) {
	            var data = {
	                interviewID: constants.interview.id,
	                userID: btoa(userID),
	                type: btoa('email'),
	                clientID: constants.interview.client,
                    uiID: constants.interview.ui
	            };

	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.notifyUser,
	                data: JSON.stringify(data),
	                success: function (data) {
	                    
	                },
	                error: function (xhr, ajaxOptions, error) {
	                    console.log(xhr);
	                }
	            });
	        },
	        smsUser: function (userID) {
	            var data = {
                    interviewID: constants.interview.id,
	                userID: btoa(userID),
	                type: btoa('sms'),
	                clientID: constants.interview.client,
	                uiID: constants.interview.ui
	            };
	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.notifyUser,
	                data: JSON.stringify(data),
	                success: function (data) {

	                },
	                error: function (xhr, ajaxOptions, error) {
	                    console.log(xhr);
	                }
	            });
	        },
			getURLParams:function(){
				var uParts = window.location.href.split('?');
				var pObj = {};
				if(uParts.length > 1){
					var paramString = uParts[1];
					var params = paramString.split('\&');
					var pInfo;
					for(var i = 0; i < params.length; i++){
						pInfo = params[i].split(/=(.+)/);
						pInfo.push('');
						pObj[pInfo[0]] = pInfo[1];
					}

                    var ui = location.href.substring(0, location.href.lastIndexOf("/") + 1);
					ui = btoa(ui);
					constants.interview.id = pObj.iref;
					constants.interview.user = pObj.uid;
					constants.interview.ui = ui;
					constants.interview.client = pObj.cliid;
				}
			},
			testFormat:function(){
				var frmt = $('#test-format').val();
				var args = { format: frmt }
				var rtv = adri.util.date.fmt(args);
				$('#test-format-out').html(rtv);
			},
			str:{
				pad:function(str, character, len, direction){
					len = len || 0;
					len = len - str.length;
					if(len < str.length){
						len = 0;
					}
					var d = direction || 'left';
					d = d.toLowerCase();
					var fString = '';
					var padding = {
						'left':function(){
							for(var i = 0; i < len; i++){
								fString = '' + fString + character;
							}
							fString = '' + fString + str;
						},
						'right':function(){
							fString = '' + str;
							for(var i = 0; i < len; i++){
								fString = '' + fString + character;
							}
						}
					};
					padding[d]();
					return fString;
				}
			},
			table:{
				headerCell:function(data){
					return '<div class="ui-header-cell">' + data + '</div>';
				},
				headerRow:function(data){
					var lim = data.length;
					var cells = '';
					for(var i = 0; i < lim; i++){
						cells = cells + adri.util.table.headerCell(data[i]);
					}
					return '<div class="ui-header-row">' + cells + '</div>';
				},
				dataCell:function(data){
					return '<div class="ui-cell">' + data + '</div>';
				},
				indicatorCell: function (data) {
                    //not currently used
					return '<div class="ui-cell"><div class="indicator-cell"></div></div>';
				},
				dataRow:function(data, fields, id){
					var flds = fields.length;
					var cells = '';
					for(var i = 0; i < flds; i++){
						if(fields[i][1] == 'value'){
							cells = cells + adri.util.table.dataCell(data[fields[i][0]]);
						}
						else{
							cells = cells + adri.util.table.indicatorCell(data[fields[i][0]]);
						}
					}
					return '<div class="ui-row" onclick="adri.ui.dashboard.getInterview(\'' + id + '\')">' + cells + '</div>';
				},
				dataRows:function(data,fields){
					var rows = '';
					for(var row in data){
						rows = rows + adri.util.table.dataRow(data[row],fields, data[row][fields[0][0]]);
					}
					return rows;
				},
				body:function(rows){
					return '<div class="spacer"></div><div class="ui-table">' + rows + '</div><div class="spacer"></div>';
				}
			},
			date:{
				propagate:function(minDate, maxDate){
					//returns all dates between min and max date
					var min = minDate.getDate() - 1;
					var max = maxDate.getDate();
					var dates = '';
					var d;
					var y = minDate.getFullYear();
					var m = minDate.getMonth();
					var dates = [];
					
					for(var i = min; i < max; i++){
						d = new Date(y,m,min+i);
						dates.push(d);
					}
					
					return dates;
				},
				fmt:function(args){
					var format = args.format || 'MM/dd/yyyy';
					var dt = args.date || new Date();
					var mth = '' + dt.getMonth();
					var day = '' + dt.getDate();
					var year = '' + dt.getFullYear();
					var hrs = '' + dt.getHours();
					var min = '' + dt.getMinutes();
					var sec = '' + dt.getSeconds();
					var wkdy = '' + dt.getDay();
					var util = adri.util;
					
					var patterns = [
						{ pattern: 'dd', out: util.str.pad(day, '0', 2) },
						{ pattern: 'd', out: day },
						{ pattern: 'DDDD', out: util.date.days[wkdy].name },
						{ pattern: 'DDD', out: util.date.days[wkdy].abbreviation },
						{ pattern: 'DD', out: util.str.pad(util.date.days[wkdy].number, '0', 2) },
						{ pattern: 'D', out: util.date.days[wkdy].number },
						{ pattern: 'MMMM', out: util.date.months[mth].name },
						{ pattern: 'MMM', out: util.date.months[mth].abbreviation },
						{ pattern: 'MM', out: util.str.pad(util.date.months[mth].number, '0', 2) },
						{ pattern: 'M', out: util.date.months[mth].number },
						{ pattern: 'yyyy', out: year },
						{ pattern: 'yy', out: year.slice(-2) },
						{ pattern: 'hh', out: util.str.pad(hrs, '0', 2) },
						{ pattern: 'h', out: hrs },
						{ pattern: 'mm', out: util.str.pad(min, '0', 2) },
						{ pattern: 'm', out: min },
						{ pattern: 'ss', out: util.str.pad(sec, '0', 2) },
						{ pattern: 's', out: sec }
					];
					
					var pLen = patterns.length;
					var out = format;
					var ptn;
					for(var p = 0; p < pLen; p++){
						ptn = new RegExp(patterns[p].pattern + '(?=[^\\]]*(?:\\[|$))');
						out = out.split(ptn).join('[' + patterns[p].out + ']');
					}
					return out.split(/[\[\]]/).join('');
				},
				resolve:function(pattern){
					
				},
				monthIndexes:{
					'January':0,
					'February':1,
					'March':2,
					'April':3,
					'May':4,
					'June':5,
					'July':6,
					'August':7,
					'September':8,
					'October':9,
					'November':10,
					'December':11
				},
				months:[
					{ name: 'January', abbreviation: 'Jan', number: '1' },
					{ name: 'February', abbreviation: 'Feb', number: '2' },
					{ name: 'March', abbreviation: 'Mar', number: '3' },
					{ name: 'April', abbreviation: 'Apr', number: '4' },
					{ name: 'May', abbreviation: 'May', number: '5' },
					{ name: 'June', abbreviation: 'Jun', number: '6' },
					{ name: 'July', abbreviation: 'Jul', number: '7' },
					{ name: 'August', abbreviation: 'Aug', number: '8' },
					{ name: 'September', abbreviation: 'Sep', number: '9' },
					{ name: 'October', abbreviation: 'Oct', number: '10' },
					{ name: 'November', abbreviation: 'Nov', number: '11' },
					{ name: 'December', abbreviation: 'Dec', number: '12' }
				],
				days: [
					{ name: 'Sunday', abbreviation: 'Sun', number: '1' },
					{ name: 'Monday', abbreviation: 'Mon', number: '2' },
					{ name: 'Tuesday', abbreviation: 'Tue', number: '3' },
					{ name: 'Wednesday', abbreviation: 'Wed', number: '4' },
					{ name: 'Thursday', abbreviation: 'Thu', number: '5' },
					{ name: 'Friday', abbreviation: 'Fri', number: '6' },
					{ name: 'Saturday', abbreviation: 'Sat', number: '7' }
				],
				getFirstDayOfWeek: function (d) {
				    var day = d.getDay();
                    var diff = d.getDate() - day;
				    return new Date(d.setDate(diff));
				}
			},
			time: {
				propagate: function(){
					var hours = '';
					var minutes = DDSelectedOption('00','00') + DDOption('15','15') + DDOption('30','30') + DDOption('45','45');
					var period = DDSelectedOption('AM','AM') + DDOption('PM','PM');
					
					for(var i = 0; i < 11; i++){
						hours = hours + DDOption(+i+1, +i+1);
					}
					hours = hours + DDSelectedOption('12','12');
					
					return { hours: hours, minutes: minutes, period: period };
				},
				propagateArray:function(){
				    var hours = [];
				    var minutes = ['00', '15', '30', '45'];
				    var period = ['AM','PM'];

				    for (var i = 0; i < 12; i++) {
				        hours.push(+i+1);
				    }

				    return { hours: hours, minutes: minutes, period: period };
				},
				propagateWorkhoursArray: function () {
				    var hours = [];
				    var minutes = ['00', '15', '30', '45'];
				    var period = ['AM', 'PM'];
				    var arr;
				    var hr = '';

				    for (var i = 0; i < 5; i++) {
				        hr = +i + 7;
				        arr = [
                            hr,
                            'AM'
				        ];
				        hours.push(arr);
				    }

				    arr = [
                        '12',
                        'PM'
				    ];
				    hours.push(arr);

				    for (var i = 0; i < 7; i++) {
				        hr = +i + 1;
				        arr = [
                            hr,
                            'PM'
				        ];
				        hours.push(arr);
				    }

				    return { hours: hours, minutes: minutes, period: period };
				}
			},
			controls:{
				calendar:{
					template:{
						body:function(rows){
							return '<div class="cal-body">' + rows + '</div>';
						},
						wvbody: function (rows) {
						    return '<div class="wvCalBody">' + rows + '</div>';
						},
						row: function(cells){
							return '<div class="cal-row">' + cells + '</div>';
						},
						headerRow: function(cells){
							return '<div class="cal-header-row">' + cells + '</div>';
						},
						cell: function(date){
							var cellid = adri.util.date.fmt({ date: date, format:'MM-dd-yyyy' });
							var sDate = adri.util.date.fmt({ date: date, format:'yyyy-MM-dd' });
							return 	'<div id="cal-cell-' + cellid + '" class="cal-cell" onclick="adri.ui.time.dateNode.add(\'' + sDate + '\',\'ui-datenodes\')">' +
										'<div nohighlight class="cal-cell-date">' + date.getDate() + '</div>' +
									'</div>';
						},
						inactiveCell: function(date){
							var cellid = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
							return 	'<div id="cal-cell-' + cellid + '" class="cal-inactive-cell">' +
										'<div nohighlight class="cal-cell-date">' + date.getDate() + '</div>' +
									'</div>';
						},
						title: function(date){
							return '<div nohighlight class="cal-title">' + adri.util.date.fmt({ date: date, format: 'MMMM yyyy' }) + '</div>';
						},
						wkviewTitle: function (date) {
						    return '<div nohighlight class="title-weekly-calendar vCenter centered">Week of ' + adri.util.date.fmt({ date: date, format: 'MMMM dd, yyyy' }) + '</div>';
						},
						header: function(wkdy){
							return '<div class="cal-header secHTxt">' + wkdy + '</div>';
						},
                        wvheader: function (wkdy) {
						    return '<div class="wvHeader">' + wkdy + '<hr class="smallHR" /></div>';
						},
						button: function(date, dir, elmt){
							var cMap = {
								'up':{
									icon:'&#xf138;',
									i:1
								},
								'down':{
									icon:'&#xf137;',
									i:-1
								}
							};
							
							dir = cMap[dir];
							
							var d = new Date(date.getFullYear(), date.getMonth()+dir.i, 1);
							var mthYr = adri.util.date.fmt({ date: d, format:'MMMM yyyy' });
							var clk = 'adri.util.controls.calendar.draw(\'' + elmt + '\',\'' + d.getMonth() + '\',\'' + d.getFullYear() + '\')';
							
							return '<div nohighlight class="cal-button" onclick="' + clk + ';">' + dir.icon + '</div>';
						},
						controls: function(date, elmt){
							var tmp = adri.util.controls.calendar.template;
							return tmp.button(date, 'down', elmt) + tmp.title(date) + tmp.button(date, 'up', elmt);
						},
						wvCell: function (date) {
						    var cellid = adri.util.date.fmt({ date: date, format: 'MM-dd-yyyy' });
						    var sDate = adri.util.date.fmt({ date: date, format: 'yyyy-MM-dd' });
						    var cellDate = adri.util.date.fmt({ date: date, format: 'MMM d' });
                            
						    return '<div id="cal-cell-' + cellid + '" class="wvCell pBG ckable" onclick="adri.ui.dashboard.getInterviewsForDate(\'' + sDate + '\')">' +
										'<div nohighlight class="wv-cell-date">' + cellDate + '</div>' +
                                        '<div id="cal-cell-nodes-' + cellid + '"></div>' +
									'</div>';
						}
					},
					frame:function(minDate, maxDate, elmt){
						var tmp = adri.util.controls.calendar.template;
						var header = '';
						for(var d = 0; d < 7; d++){
							header = header + tmp.header(adri.util.date.days[d].abbreviation);
						}
						
						var row = '';
						var cell = '';
						var body = '';
						var firstWeekday = minDate.getDay();
						var firstDayDifference = 0 - firstWeekday;
						var calDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + firstDayDifference);
						var exNodes = $('#ui-datenodes').html();
						if(exNodes === undefined){
						    exNodes = '';
						}

						for(var w = 0; w < 6; w++){
							row = '';
							for(var d = 0; d < 7; d++){
								if(calDate < minDate || calDate > maxDate){
									cell = tmp.inactiveCell(calDate);
								}
								else{
									cell = tmp.cell(calDate);
								}
								
								row = row + cell;
								calDate.setDate(calDate.getDate() + 1);
							}
							row = tmp.row(row);
							body = body + row;
						}
						
						header = tmp.headerRow(header,elmt);
                        body = '<div class="cal-monthHeader">' + tmp.controls(minDate, elmt) + '</div><div class="cal-body">' + header + body + '</div>';
                        body = body + '<div id="ui-datenodes" class="ti-schedule-nodes">' + exNodes + '</div>';
                        body = body + '<div class="cal-footer-row"><button class="bigButton mainBG negTxt ckable" type="button" onclick="adri.ui.time.submit()">Add Times</button></div>';
						return body;
					},
					draw: function(elmt, mth, yr){
						var cal = adri.util.controls.calendar;
						var minDate = new Date(yr, mth, 1); 
						var maxDate = new Date(yr, (+mth+1), 0); 
						
						var dates = adri.util.date.propagate(minDate, maxDate);
						var times = adri.util.time.propagate();
						
						var $el = $('#' + elmt);
						$el.html(cal.frame(minDate, maxDate, elmt));
					},
					frameWeeklyView: function (wkDate) {
					    var fDate = adri.util.date.getFirstDayOfWeek(wkDate);
					    var tmp = adri.util.controls.calendar.template;
					    var header = '';
					    for (var d = 0; d < 7; d++) {
					        header = header + tmp.wvheader(adri.util.date.days[d].abbreviation);
					    }

					    var row = '';
					    var cell = '';
					    var body = '';
					    
					    row = '';
					    for (var d = 0; d < 7; d++) {
					        cell = tmp.wvCell(fDate);
					        row = row + cell;
					        fDate.setDate(fDate.getDate() + 1);
					    }
					    row = tmp.row(row);
					    body = body + row;
					    
					    header = tmp.headerRow(header);
					    body = '<div class="mobile-hscroll"><div class="wvCalBody">' + header + body + '</div></div>';
					    body = body + '<div id="ui-datenodes" class="date-nodes"></div>';
					    body = body + '<div class="cal-footer-row"></div>';
					    body = '<div class="cycle-weekly-calendar"><div class="stdWidget vCenter right ckablef" onclick="adri.util.controls.calendar.cycleWeeklyView(-1,\'' + wkDate + '\');">&#xf137;</div></div>' +
                                '<div class="weekly-cal-title-cntr">' +tmp.wkviewTitle(wkDate) + '</div>' +
                                '<div class="cycle-weekly-calendar"><div class="stdWidget vCenter left ckablef" onclick="adri.util.controls.calendar.cycleWeeklyView(1,\'' + wkDate + '\');">&#xf138;</div></div>' +
                                '<hr class="titleHR" />' +
                            body;
					    return body;
					},
					drawWeeklyView: function (wkDate) {
					    var wkvw = adri.util.controls.calendar.frameWeeklyView(wkDate);
					    return wkvw;
					},
					cycleWeeklyView: function (m, wkDate) {
					    m = m * 7;
					    var db = adri.ui.dashboard;
					    var d = new Date(wkDate);
                        d.setDate(d.getDate() + m);

                        $('#db-weekly-view').html(adri.util.controls.calendar.drawWeeklyView(d));
					    db.getInterviews(function (data) {
					        db.drawInterviews(data);
					    });
					}
                },
                switchCSS: function () {
                    $('#css-switch-trugreen').click(function () {
                        $('link[href="adri/adri.ras.generic.css"]').attr('href', 'adri/adri.ras.css');
                    });
                    $('#css-switch-adri').click(function () {
                        $('link[href="adri/adri.ras.css"]').attr('href', 'adri/adri.ras.generic.css');
                    });
                },
                reloadLocation: function () {
                    location.reload();
                }
			}
		}
	};
	return adri;
})();

$(document).ready(function(){
    adri.util.getURLParams();
    adri.ui.zone();
    adri.ui.nav.setup();
    adri.ui.slideshow.initialize();
	adri.ui.dashboard.open();
});