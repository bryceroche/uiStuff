

window.constants = {
	interview:{
		id: '',
		user: ''
	},
	urls:{
		getTimeSlots: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getTimeSlots',
		addTimeSlot: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addTimeSlot',
		getInterview: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/GetInterviewDetails',
		addInterview: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/AddEvent',
		validateUser: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/validateUser',
		getUsers: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getUsers',
		deleteTimeSlot:'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/deleteTimeslot',
		deleteUser:'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/deleteUser',
		addUsers: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addUsers',
		getInterviews: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getInterviews',
		getInterviewsDate: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getInterviewsDate',
		getPositions: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getPositions',
		addPosition: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addPosition',
		getUserTimeSlots: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getAvailabilityUser',
		notifyUser: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/NotifyUser',
		persistentAvailability: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/persistentAvailability'
	},
	elements: {
	    weeklyView: {
            id:'db-weekly-view',
	        structureClass: 'dashboard-date-browser-struct',
	        stylingClass: 'dashboard-date-browser-styling'
	    },
	    weeklyViewCell: {
	        structureClass: 'weekly-view-cell-struct',
	        stylingClass: 'weekly-view-cell-styling'
	    },
	    schedulingArea: {
            id:'db-scheduling',
	        structureClass: 'dashboard-scheduling-struct',
	        stylingClass: 'dashboard-scheduling-styling'
	    },
	    schedulingSubArea: {
	        structureClass: 'dashboard-sub-scheduling-struct',
	        stylingClass: 'dashboard-sub-scheduling-styling'
	    },
		mainHeaderArea:{
			structureClass:'main-header-struct',
			stylingClass:'main-header-styling'
        },
        monthHeader: {
            structureClass: 'cal-monthHeader-struct',
            stylingClass: 'cal-monthHeader-styling'
        },
		contentArea:{
			id:'adri-ras-content',
			structureClass:'content-area-struct',
			stylingClass:'content-area-styling'
		},
		nodeArea:{
			id:'adri-ras-timeNodes',
			structureClass:'ui-node-area-struct',
			stylingClass:'ui-node-area-styling'
		},
		interviewCard:{
			structureClass:'interview-card-struct',
			stylingClass:'interview-card-styling'
		},
		interviewCardField:{
			structureClass:'interview-card-field-struct',
			stylingClass:'interview-card-field-styling'
		},
		interviewCardText:{
			structureClass:'interview-card-text-struct',
			stylingClass:'interview-card-text-styling'
		},
		interviewCardRow:{
			structureClass:'interview-card-row-struct',
			stylingClass:'interview-card-row-styling'
		},
		interviewInfoContainer:{
			structureClass:'int-info-container-struct',
			stylingClass:'int-info-container-styling'
		},
		interviewControls:{
			structureClass:'int-controls-struct',
			stylingClass:'int-controls-styling'
		},
		interviewControlWidget:{
			structureClass:'int-control-widget-struct',
			stylingClass:'int-control-widget-styling'
		},
		calendar:{
			id:'adri-ras-calendar-control',
			structureClass:'cal-body-struct',
			stylingClass:'cal-body-styling'
		},
		row:{
			structureClass:'cal-row-struct',
			stylingClass:'cal-row-styling'
		},
		header:{
			structureClass:'cal-header-struct',
			stylingClass:'cal-header-styling'
		},
		monthHeader: {
		    structureClass: 'cal-monthHeader-struct',
		    stylingClass: 'cal-monthHeader-styling'
		},
		headerRow:{
			structureClass:'cal-header-row-struct',
			stylingClass:'cal-header-row-styling'
		},
		footerRow:{
			structureClass:'cal-footer-row-struct',
			stylingClass:'cal-footer-row-styling'
		},
		title:{
			structureClass:'cal-title-struct',
			stylingClass:'cal-title-styling'
        },
        buttonOne: {
            structureClass: 'button-one-struct',
            stylingClass: 'button-one-styling',
        },
        buttonTwo: {
            structureClass: 'button-two-struct',
            stylingClass: 'button-two-styling',
        },
        cellDate: {
            structureClass: 'cal-cell-date-struct',
            stylingClass: 'cal-cell-date-styling'
        },
        cell: {
            structureClass: 'cal-cell-struct',
            stylingClass: 'cal-cell-styling'
        },
        uiTable: {
            structureClass: 'ui-table-struct',
            stylingClass: 'ui-table-styling'
        },
        uiRow: {
            structureClass: 'ui-row-struct',
            stylingClass: 'ui-row-styling'
        },
        uiCell: {
            structureClass: 'ui-cell-struct',
            stylingClass: 'ui-cell-styling'
        },
        uiHeaderCell: {
            structureClass: 'ui-header-cell-struct',
            stylingClass: 'ui-header-cell-styling'
        },
        uiHeaderRow: {
            structureClass: 'ui-header-row-struct',
            stylingClass: 'ui-header-row-styling'
        },
        button: {
            structureClass: 'cal-button-struct',
            stylingClass: 'cal-button-styling'
        },
        indicatorInvalid: {
            structureClass: 'indicator-struct',
            stylingClass: 'indicator-invalid-styling'
        },
        indicatorMissingInterviewers: {
            structureClass: 'indicator-struct',
            stylingClass: 'indicator-interviewer-styling'
        },
        indicatorMissingCandidates: {
            structureClass: 'indicator-struct',
            stylingClass: 'indicator-candidate-styling'
        },
        indicatorMissingRecruiters: {
            structureClass: 'indicator-struct',
            stylingClass: 'indicator-recruiter-styling'
        },
        indicatorFullyScheduled: {
            structureClass: 'indicator-struct',
            stylingClass: 'indicator-scheduled-styling'
        },
        submitButton: {
            structureClass: 'submit-button-struct',
            stylingClass: 'submit-button-styling'
        },
        inactiveCell: {
            structureClass: 'cal-inactive-cell-struct',
            stylingClass: 'cal-inactive-cell-styling'
        },
        timeNode: {
            structureClass: 'time-node-struct',
            stylingClass: 'time-node-styling'
        },
        dateNode: {
            structureClass: 'date-node-struct',
            stylingClass: 'date-node-styling'
        },
        dateNodeSingle: {
            structureClass: 'date-node-single-struct',
            stylingClass: 'date-node-single-styling'
        },
        userAvailability: {
            structureClass: 'user-date-node-struct',
            stylingClass: 'user-date-node-styling'
        },
        dateNodes: {
            structureClass: 'date-nodes-struct',
            stylingClass: 'date-nodes-styling'
        },
        timeSelect: {
            structureClass: 'timeSelect-struct',
            stylingClass: 'timeSelect-styling'
        },
        eventForm: {
            structureClass: 'form-event-struct',
            stylingClass: 'form-event-styling'
        },
        fieldWrapper: {
            structureClass: 'field-wrapper-struct',
            stylingClass: 'field-wrapper-styling'
        },
        userNode: {
            structureClass: 'form-user-node-struct',
            stylingClass: 'form-user-node-styling'
        },
        userNodeHeader: {
            structureClass: 'form-user-node-header-struct',
            stylingClass: 'form-user-node-header-styling'
        },
        addWidget: {
            structureClass: 'add-widget-struct',
            stylingClass: 'add-widget-styling'
        },
        removeWidget: {
            structureClass: 'remove-widget-struct',
            stylingClass: 'remove-widget-styling'
        },
        acceptWidget: {
            structureClass: 'accept-widget-struct',
            stylingClass: 'accept-widget-styling'
        },
        uiUserNodeInfo: {
            structureClass: 'ui-user-node-info-struct',
            stylingClass: 'ui-user-node-info-styling'
        },
        uiUserNode: {
            structureClass: 'ui-user-node-struct',
            stylingClass: 'ui-user-node-styling'
        },
        uiUserNodeHeader: {
            structureClass: 'ui-user-node-header-struct',
            stylingClass: 'ui-user-node-header-styling'
        },
        uiUserNodeBody: {
            structureClass: 'ui-user-node-body-struct',
            stylingClass: 'ui-user-node-body-styling'
        },
        addUserContainer: {
            structureClass: 'add-user-container-struct',
            stylingClass: 'add-user-container-styling'
        },
        addUserWidget: {
            structureClass: 'add-user-widget-struct',
            stylingClass: 'add-user-widget-styling'
        },
        modalForm: {
            structureClass: 'modal-form-struct',
            stylingClass: 'modal-form-styling'
        },
        modalOverlay: {
            structureClass: 'modal-overlay-struct',
            stylingClass: 'modal-overlay-styling'
        },
        repeaterControl: {
            structureClass: 'form-repeater-ctrl-struct',
            stylingClass: 'form-repeater-ctrl-styling'
        },
        logoArea: {
            structureClass: 'logo-area-struct',
            stylingClass: 'logo-area-styling'
        },
        logoAreaCompany: {
            structureClass: 'logo-areaCompany-struct',
            stylingClass: 'logo-areaCompany-styling'
        },
        errMsg: {
            structureClass: 'errMsg-struct',
            stylingClass: 'errMsg-styling'
        }
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
	}
	
	function timePeriod(h,m,p) {
	    this.hour = h || '7';
	    this.minutes = m || '00';
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

	function DDOption(value, text){
		text = text || value;
		return '<option value="' + value + '">' + text + '</option>';
	}
	
	function DDSelectedOption(value, text){
		text = text || value;
		return '<option selected="selected" value="' + value + '">' + text + '</option>';
	}
	
	function setClass(e) {
	    if (!constants.elements[e]) {
	        constants.elements[e] = {
	            structureClass: '',
                stylingClass:''
	        };
	        console.log('Class ' + e + ' is not defined.');
	    }
		return constants.elements[e].structureClass + ' ' + constants.elements[e].stylingClass;
	}

	var adri = {
	    data:{},
	    error:{
	        noParams:function(){
	            $('#' + constants.elements.contentArea.id).html('Sorry, but we couldn\'t find your information. Please try clicking your invitation link again.');
	        }
	    },
	    ui: {
	        selectedDate:'',
	        initialize:function(){
	            adri.user.validate(adri.ui.checkUser);
	        },
	        checkUser: function (user) {
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
	            open:function(){
	                adri.user.validate(adri.ui.dashboard.checkUser);
	            },
	            checkUser:function(user){
	                adri.ui.dashboard.route[user.role](user);
	            },
	            route:{
	                'Recruiter':function(user){
	                    var db = adri.ui.dashboard;
	                    db.setup();
	                    db.getInterviews(function (data) {
	                        db.drawInterviews(data);
	                    });
	                    db.getPositions(function (data) {
	                        db.drawPositionPool(data);
	                    });
	                },
	                'Candidate':function(user){
						
	                },
	                'Interviewer':function(user){
	                    var db = adri.ui.dashboard;
	                    db.setup();
	                    db.getInterviews(function (data) {
	                        db.drawInterviews(data);
	                    });
	                },
	                'INVALID':function(){
					
	                } 
	            },
	            setup:function(){
	                var $el = $('#' + constants.elements.contentArea.id);
	                var wkDate = new Date();
	                var iCard = '<div id="interview-info-container" class="' + setClass('mainHeaderArea') + '">' +
                                    '<div id="interview-info-logo-container" class="' + setClass('logoArea') + '" onclick="adri.util.controls.reloadLocation()">&#xf06c</div>' +
                                    '<div id="interview-info-container" class="' + setClass('logoAreaCompany') + '">' +
                                        '<img src= "adri/TrugreenLogo.png" style= "width:100%;height:100%;" />' +
                                    '</div > ' +
									'<div id="interview-controls" class="' + setClass('interviewControls') + '">' +
										'<div class="' + setClass('interviewControlWidget') + '" onclick="adri.ui.dashboard.open()">&#xf00a;</div>' +
                                        '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="adri.user.info.edit(\'' + constants.interview.user + '\');">&#xf2c3;</div>' + //id card
                                        '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="">&#xf085;</div>' +
                                        '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="">&#xf080;</div>' +
									'</div>' +
                                '</div>' +
								'<div id="' + constants.elements.weeklyView.id + '" class="' + setClass('weeklyView') + '">' +
                                    adri.util.controls.calendar.drawWeeklyView(wkDate) +
                                '</div>' +
                                '<div id="' + constants.elements.schedulingArea.id + '" class="' + setClass('schedulingArea') + '">' +
                                    '<div class="bucket-label">Interviews</div>' +
                                    '<div class="bucket-label">Position Pool</div>' +
                                    '<div id="scheduled-interviews" style="background:#157dbb;" class="' + setClass('schedulingSubArea') + '"></div>' +
                                    '<div id="position-pool" class="' + setClass('schedulingSubArea') + '"></div>' +
                                '</div>' +
								'<div id="modal-form" class="' + setClass('modalForm') + '"></div>' +
								'<div id="modal-bg-overlay" class="' + setClass('modalOverlay') + '" onclick="adri.timeslot.removeControls();"></div>';
					
	                $el.html(iCard);
	            },
	            getInterviewsForDate: function (date) {
	                var db = adri.ui.dashboard;
	                adri.ui.selectedDate = date;
	                db.getInterviewsDate(date, function (data) {
	                    db.drawInterviewsForDate(data);
	                });
	            },
	            getInterviews: function (onComplete) {
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getUserTimeSlots + "?uid=" + constants.interview.user,
	                    success: function (data) {
	                        onComplete(data[0][0]);
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
	                    url: constants.urls.getTimeSlots + "?uid=" + constants.interview.user,
	                    success: function (data) {
	                        onComplete(data[0][0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            getInterviewsDate: function (date, onComplete) {
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: constants.urls.getInterviewsDate + "?uid=" + constants.interview.user + "&adate=" + btoa(date),
	                    success: function(data){
	                        onComplete(data[0][0]);
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
	                    url: constants.urls.getPositions,
	                    success: function (data) {
	                        onComplete(data[0][0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            drawInterviews:function(data){
	                var lim = data.length;

	                var iFields = [
						['INTERVIEW_REFERENCE_ID', 'value'],
						['INTERVIEW_TITLE', 'value'],
						['INTERVIEW_ADDRESS', 'value'],
						['INTERVIEW_CITY', 'value'],
						['INTERVIEW_STATE', 'value'],
						['INTERVIEW_ZIP', 'value'],
						['INTERVIEW_CONFERENCE_NUMBER', 'value'],
						['INTERVIEW_CONFERENCE_CODE', 'value'],
						['INTERVIEW_CONFERENCE_ID', 'value'],
						['OVERALL_STATUS', 'indicator']
	                ];

	                var $date;
	                var dt;
	                var ndt;
	                for (var i = 0; i < lim; i++) {
	                    dt = data[i]['TIME_SLOT'];
	                    if (dt !== null) {
	                        dt = dt.split('T')[0];
	                        dt = dt.split('-');
	                        ndt = dt[1] + '-' + dt[2] + '-' + dt[0];
	                        $date = $('#cal-cell-' + ndt);
	                        //$date.append('<div onclick="adri.ui.dashboard.getInterview(\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');" class="interview-sch-node ckable">' + data[i]['INTERVIEW_TITLE'] + '</div>');
	                        $date.append('<div class="interview-sch-node">' + data[i]['INTERVIEW_TITLE'] + '</div>');
	                    }
	                }
					
					
	            },
	            drawInterviewsForDate: function (data) {
	                var $schArea = $('#scheduled-interviews');
	                $schArea.html('');
	                var lim = data.length;

	                var iFields = [
						['INTERVIEW_REFERENCE_ID', 'value'],
						['INTERVIEW_TITLE', 'value'],
						['INTERVIEW_ADDRESS', 'value'],
						['INTERVIEW_CITY', 'value'],
						['INTERVIEW_STATE', 'value'],
						['INTERVIEW_ZIP', 'value'],
						['INTERVIEW_CONFERENCE_NUMBER', 'value'],
						['INTERVIEW_CONFERENCE_CODE', 'value'],
						['INTERVIEW_CONFERENCE_ID', 'value'],
						['OVERALL_STATUS', 'indicator']
	                ];

	                var dtlBar = '';
	                var canName = '';
	                var tslot = '';

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

	                    dtlBar = '<div class="scheduled-interview-info">With: ' + canName + '</div>' +
	                                '<div class="scheduled-interview-info">For: ' + data[i]['POSITION_NAME'] + '</div>' +
	                                '<div class="scheduled-interview-info">At: ' + tslot + '</div>';
	                    $schArea.append('<div onclick="adri.ui.dashboard.getInterview(\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');" class="interview-sch-node ckable">' + dtlBar + '</div>');
	                }
				    
	            },
	            drawPositionPool: function(data) {
	                var $pool = $('#position-pool');
	                var lim = data.length;
	                $pool.html('');

	                for (var i = 0; i < lim; i++) {
	                    $pool.append('<div onclick="adri.ui.dashboard.scheduleInterview(\'' + data[i]['POSITION_ID'] + '\');" class="pool-node">' + data[i]['POSITION_NAME'] + '</div>');
	                }

	                $pool.append('<button onclick="adri.ui.dashboard.addPosition();" class="' + setClass('buttonTwo') + '"><span>Add Position</span></button>');
	                //<button class="' + setClass('buttonTwo') + '" onclick="adri.ui.form.addUser(\'user-repeater-' + rid + '\',\'' + label + '\',\'' + updates + '\',\'' + field + '\')"><span>Add ' + label + '</span></button>';
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
	        modal:{
	            open:function(){
	                $('.' + constants.elements.modalOverlay.stylingClass).fadeIn(400,function(){
	                    $('.' + constants.elements.modalForm.stylingClass).fadeIn(400);
	                });
	            },
	            close:function(){
	                $('.' + constants.elements.modalForm.stylingClass).fadeOut(400,function(){
	                    $('.' + constants.elements.modalOverlay.stylingClass).fadeOut(400);
	                });
	            }
	        },
	        addPositionForm: function () {
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var posFields = field.input('Position ID', 'positions', 'id') + '<br/>' +
                                    field.input('Position Name', 'positions', 'name') + '<br/>' +
                                    field.select('Position Type', 'positions', 'type', ['Vacancy', 'Evergreen']); //TO-DO: un-hardcode this
                                  
	            posFields = '<div class="smallForm"><div class="smallFormFields"><div class="' + setClass('userNodeHeader') + '">New Position</div>' + posFields + '</div></div>';
	            posFields = 
                            posFields +
                            '<hr />' +
                            '<button class="button-one-struct" onclick="adri.ui.submitPosition(adri.ui.dashboard.refreshPool)">SUBMIT</button>';
	            $modal.html(posFields);
	            adri.ui.modal.open();
	        },
	        scheduleInterviewForm: function (positionID) {
	            adri.ui.form.data.positions[0] = {
	                id: positionID
	            };
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var intFields = '<div id="new-event-form" class="' + setClass('eventForm') + '">' +
                                    '<div class="' + setClass('userNodeHeader') + '">Enter Interview Information</div>' +
									field.input('Interview Title', 'interview', 'title') +
									field.input('Interview ID', 'interview', 'id') +
									field.input('Interview Address', 'interview', 'address') +
									field.input('Interview City', 'interview', 'city') +
									field.input('Interview State', 'interview', 'state') +
									field.input('Interview Zip', 'interview', 'zip') +
									field.input('Interview Conference Number', 'interview', 'conferenceNumber') +
									field.input('Interview Conference ID', 'interview', 'conferenceID') +
									field.input('Interview Conference Code', 'interview', 'conferenceCode') +
									'<hr/>' +
									field.userRepeater('Candidate', 'users', 'candidates') +
									'<hr/>' +
									field.userRepeater('Recruiter', 'users', 'recruiters') +
									'<hr/>' +
									field.userRepeater('Interviewer', 'users', 'interviewers') +
								'</div>';

	            //intFields = '<div class="smallForm"><div class="smallFormFields">' + intFields + '</div></div>';
	            intFields = intFields +
                            '<hr />' +
                            '<button class="button-one-struct" onclick="adri.ui.form.submit(adri.ui.dashboard.refreshInterviews)">SUBMIT</button>';
	            $modal.html(intFields);
	            adri.ui.modal.open();
	        },
	        submitPosition: function (onComplete) {
	            $.ajax({
	                type: "POST",
	                contentType: 'application/json',
	                dataType: "json",
	                url: constants.urls.addPosition,
	                data: JSON.stringify(adri.ui.form.data.positions),
	                success: function (data) {
	                    adri.ui.form.data = {
	                        interview: {},
	                        positions: {},
	                        users: {
	                            candidates: {},
	                            recruiters: {},
	                            interviewers: {}
	                        }
	                    };
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
	            var $Content = $('#' + constants.elements.contentArea.id);
	            var b1 = '<button type="button" onclick="adri.interview.get()">Get Interview Info</button>';
	            var b2 = '<button type="button" onclick="adri.ui.time.load(\''+ constants.elements.contentArea.id + '\')">Load Time Controls</button>';
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
	            load:function(elmt){
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
	                var svc = constants.urls.getTimeSlots + '?iref=' + constants.interview.id;
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: svc,
	                    success: function(data){
	                        onComplete(data[0][0]);
	                    },
	                    error:function(xhr, ajaxOptions, error){
	                        console.log(xhr);
	                    }
	                });
	            },
	            drawNodes:function(data){
	                var lim = data.length;
	                var $Content = $('#' + constants.elements.nodeArea.id);
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
	                    var markup = '<div class="' + setClass('fieldWrapper') + '">' +
											'<span>' + label + '</span>' +
											field +
										'</div>';
	                    return markup;
	                },
	                toggler: function (label, icon, updates, field, value) {
	                    var markup = '<div class="' + setClass('fieldWrapper') + '">' +
											'<span>' + label + '</span>' +
											'<div class="field-toggler ckable" data-state="off" data-value="' + value + '" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).attr(\'data-value\'));"><div>' + icon + '</div></div>' +
										'</div>';
	                    return markup;
	                },
	                groupToggle: function (icon, updates, field) {
	                    var markup = '<div class="field-toggler ckable" data-state="off" data-value="no" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).attr(\'data-value\'));"><div>' + icon + '</div></div>';
	                    return markup;
	                },
	                dayToggle: function (icon, updates, index) {
	                    var markup = '<div class="field-toggler ckable" data-state="off" data-value="no" onclick="adri.ui.form.setToggler($(this)); adri.ui.form.instantiateDay(\'' + updates + '\',\'' + index + '\');"><div>' + icon + '</div></div>';
	                    return markup;
	                },
	                select: function (label, updates, field, choices) {
	                    var lim = choices.length;
	                    var opts = '';
	                    for (var i = 0; i < lim; i++) {
	                        opts = opts + '<option value="' + choices[i] + '">' + choices[i] + '</option>';
	                    }

	                    adri.ui.form.setData(updates, field, choices[0]);

	                    var markup = '<div class="' + setClass('fieldWrapper') + '">' +
											'<span>' + label + '</span>' +
											'<select onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());">' + opts + '</select>' +
										'</div>';
	                    return markup;
	                },
	                input:function(label, updates, field){
	                    var markup = 	'<div class="' + setClass('fieldWrapper') + '">' + 
											'<span>' + label + '</span>' +
											'<input onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
	                    return markup;
	                },
	                userInput:function(label, role, index, field){
	                    var markup = 	'<div class="' + setClass('fieldWrapper') + '">' + 
											'<span>' + label + '</span>' +
											'<input onchange="adri.ui.form.setUserData(\'' + role + '\',\'' + index + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
	                    return markup;
	                },
	                userRepeater: function(label, updates, field){
	                    var rid = label.split(/[^A-Za-z0-9]/).join('');
	                    var markup = '<div id="user-repeater-' + rid + '"></div><button class="' + setClass('buttonTwo') + '" onclick="adri.ui.form.addUser(\'user-repeater-' + rid + '\',\'' + label + '\',\'' + updates + '\',\'' + field + '\')"><span>Add ' + label + '</span></button>';
	                    return markup;
	                },
	                user: function (role, updates, fld) {
	                    var nodes = $('.form-user-node-struct').length;
	                    adri.ui.form.data.users[fld][nodes] = {};
	                    var field = adri.ui.template.field;
	                    var markup = '<div id="user-' + nodes + '" class="' + setClass('userNode') + '">' +
                            '<div id="user-' + nodes + '" class="' + setClass('userNodeHeader') + '">Enter ' + role + ' Information</div>' +
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
	                        hmkup = hmkup + adri.ui.template.field.workHourNode(category, index, 'radio-hours-' + category, hours[h]);
	                    }

	                    markup = '<div id="radio-hours-' + category + '" class="timenodes"><div>Hour</div><div class="ampmGradient">' + hmkup + '</div></div>';

	                    var mmkup = '';
	                    for (var m = 0; m < mins; m++) {
	                        mmkup = mmkup + adri.ui.template.field.timeNode(category, index, 'radio-minutes-' + category, minutes[m], minutes[m]);
	                    }

	                    markup = markup + '<div id="radio-minutes-' + category + '" class="timenodes"><div>Minute</div>' + mmkup + '</div>';

	                    return markup;
	                },
	                workHourNode: function (category, index, zone, value) {
	                    var markup = '<div class="field-toggler ckable radio" data-value="' + value[0] + '" onclick="adri.ui.form.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'hour\',\'' + value[0] + '\'); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'period\',\'' + value[1] + '\');"><div>' + value[0] + '</div></div>';
	                    return markup;
	                },
	                timeNode: function (category, index, zone, value, icon) {
	                    var markup = '<div class="field-toggler ckable radio" onclick="adri.ui.form.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'minutes\',\'' + value + '\');"><div>' + icon + '</div></div>';
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
	                var markup = 	'<div id="availability-node-' + nodeID + '" class="' + setClass('dateNode') + '">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
										'<div>' + data.users.join('\<br\/\>') + '</div>' +
									'</div>';
	                return markup;
					
	            },
	            availabilityNodeSingle:function(data){
	                var nodeID = data['TIME_SLOT'].split(/[^0-9]/).join('-');
	                var markup = 	'<div id="availability-node-' + nodeID + '" class="' + setClass('dateNodeSingle') + '">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
										'<div class="' + setClass('removeWidget') + '" onclick="adri.timeslot.deleteSlot(\'' + data['TSID'] + '\');">&#xf05c;</div>' +
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

	                //uiUserNodeInfo
	                var markup = 	'<div id="user-node-' + nodeID + '" class="' + setClass('uiUserNode') + '">' +
										'<div class="' + setClass('removeWidget') + '" onclick="adri.interview.deleteUser(\'' + data['ROW_ID'] + '\');">&#xf05c;</div>' +
                                        '<div class="' + setClass('uiUserNodeInfo') + '">' +
                                            '<div class="' + setClass('uiUserNodeHeader') + '">' + fullName + '</div>' +
                                            '<hr>' +
                                            '<div class="' + setClass('uiUserNodeBody') + '">' + data['USER_ROLE'] + '</div>' +
                                            '<div class="' + setClass('uiUserNodeBody') + '">' + data['USER_PHONE'] + '</div>' +
                                            '<div class="' + setClass('uiUserNodeBody') + '">' + data['USER_EMAIL'] + '</div>' +
											'<div id="user-availability-' + nodeID + '" class="' + setClass('userAvailability') + '"></div>' +
											'<div class="' + setClass('addWidget') + '" onclick="adri.timeslot.addControls(\'modal-form\',\'' + data['USER_ID'] + '\',\'' + fullName + '\',\'' + data['USER_ROLE'] + '\');">&#xf271;</div>' +
                                            '<div class="' + setClass('addWidget') + '" onclick="adri.util.emailUser(\'' + data['USER_ID'] + '\');">&#xf003;</div>' +
                                            '<div class="' + setClass('addWidget') + '" onclick="adri.util.smsUser(\'' + data['USER_ID'] + '\');">&#xf10b;</div>' +
                                        '</div>' +
									'</div>';
	                return markup;
	            },
	            addUserNode:function(){
	                return '<div onclick="adri.interview.addUserForm();" class="' + setClass('addUserContainer') + '"><div class="' + setClass('addUserWidget') + '">&#xf234;</div></div>';
	            },
	            dateNode:function(nodeID, date){
	                var selectors = adri.util.time.propagate();
	                var markup = 	'<div id="datetime-node-' +  nodeID + '" class="' + setClass('dateNode') + '">' +
										adri.ui.template.date(date) +
										adri.ui.template.timeSelect(nodeID, selectors.hours, 'hour') +
										adri.ui.template.timeSelect(nodeID, selectors.minutes, 'minute') +
										adri.ui.template.timeSelect(nodeID, selectors.period, 'period') +
									'</div>';
	                return markup;
	            },
	            timeSelect:function(id, opts, field){
	                return '<select id="' + id + '" class="' + setClass('timeSelect') + '" onchange="adri.ui.setData(\'' + id + '\',\'' + field + '\',$(this).val())">' + opts + '</select>';
	            },
	            date:function(date){
	                var da = date.split('-');
	                var formattedDate = da[1] + '/' + da[2] + '/' + da[0];
	                var markup = '<span>' + formattedDate + ': </span>'; //fix this up
	                return markup;
	            }
	        },
	        form:{
	            data:{
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
	                var block = new BlockDay(day);
	                if (!adri.ui.form.data.availability[index]) {
	                    adri.ui.form.data.availability.push([block]);
	                }
	                else {
	                    adri.ui.form.data.availability[index].push(block);
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
	                var $content = $('#' + constants.elements.contentArea.id);
	                var field = adri.ui.template.field;
	                var interview = adri.ui.form.data.interview;
	                var position = adri.ui.form.data.positions;
	                var users = adri.ui.form.data.users;
                    var form = '<div id="new-event-form" class="' + setClass('eventForm') + '">' +
                                    '<div class="' + setClass('userNodeHeader') + '">Enter Interview Information</div>' +
									field.input('Interview Title', 'interview', 'title') +
									field.input('Interview ID', 'interview', 'id') +
									field.input('Interview Address', 'interview', 'address') +
									field.input('Interview City', 'interview', 'city') +
									field.input('Interview State', 'interview', 'state') +
									field.input('Interview Zip', 'interview', 'zip') +
									field.input('Interview Conference Number', 'interview', 'conferenceNumber') +
									field.input('Interview Conference ID', 'interview', 'conferenceID') +
									field.input('Interview Conference Code', 'interview', 'conferenceCode') +
									'<hr/>'+
									field.input('Position ID', 'positions', 'id') +
									field.input('Position Name', 'positions', 'name') +
									'<hr/>'+
									field.userRepeater('Candidate','users', 'candidates') +
									'<hr/>'+
									field.userRepeater('Recruiter','users', 'recruiters') +
									'<hr/>'+
									field.userRepeater('Interviewer','users', 'interviewers') +
								'</div>' +
								'<div style="width:100%;text-align:center;"><button type="button" onclick="adri.ui.form.submit()">Create Event!</button></div>';
	                $content.html(form);
	            },
	            submit:function(onComplete){
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
	                url: constants.urls.getInterview + "?iref=" + constants.interview.id,
	                success: function(data){
	                    onComplete(data[0][0]);
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
            },
	        loadToUI: function (data) {
	            var $el = $('#' + constants.elements.contentArea.id);
	            var interview = data['0'];

	            var iFields = [
                    ['ID', 'INTERVIEW_REFERENCE_ID'],
                    ['Title', 'INTERVIEW_TITLE'],
                    ['Address', 'INTERVIEW_ADDRESS'],
                    ['City', 'INTERVIEW_CITY'],
                    ['State', 'INTERVIEW_STATE'],
                    ['Zip', 'INTERVIEW_ZIP'],
                    ['Conference Number', 'INTERVIEW_CONFERENCE_NUMBER'],
                    ['Conference Code', 'INTERVIEW_CONFERENCE_CODE'],
                    ['Conference ID', 'INTERVIEW_CONFERENCE_ID']
	            ];
                
	            var iCard = '<div id="interview-info-header-container" class="' + setClass('mainHeaderArea') + '">' +
                                 '<div id="interview-info-logo-container" class="' + setClass('logoArea') + '" onclick="adri.util.controls.reloadLocation()">&#xf06c</div>' +
                                 '<div id="interview-info-logoCo-container" class="' + setClass('logoAreaCompany') + '">' +
                                    '<img src= "adri/TrugreenLogo.png" style= "width:100%;height:100%;" >' +
                                 '</div > ' +
                                '<div id="interview-controls" class="' + setClass('interviewControls') + '">' + 
                                    '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="adri.ui.dashboard.open()">&#xf00a;</div>' +
                                    '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="adri.user.info.edit(\'' + constants.interview.user + '\');">&#xf2c3;</div>' + //id card
                                    '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="">&#xf085;</div>' +
                                    '<div class="' + setClass('interviewControlWidget') + ' ckablef" onclick="">&#xf080;</div>' +
                                 '</div>' +
                            '</div > ' +
                            '<div id="interview-info-container" class="' + setClass('interviewInfoContainer') + '">' +
                                '<div id="dtl-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="' + setClass('interviewCard') + '">' +
                                    '<div id="dtl-txt-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="' + setClass('interviewCardText') + '">' +
                                    '</div>' +
                                '</div>' +

                            '</div>' +
                            '<div id="' + constants.elements.nodeArea.id + '" class="' + setClass('nodeArea') + '"></div>' +
                            '<div id="modal-form" class="' + setClass('modalForm') + '"></div>' +
                            '<div id="modal-bg-overlay" class="' + setClass('modalOverlay') + '" onclick="adri.timeslot.removeControls();"></div>';

	            $el.html(iCard);
	            var tMarkup = '';
	            for (var i = 0; i < iFields.length; i++) {

	                if (interview[iFields[i][1]] === null) {
	                    interview[iFields[i][1]] = '';
	                }

	                tMarkup = '<div class="' + setClass('interviewCardRow') + '">' +
                        '<div class="' + setClass('interviewCardField') + '">' + iFields[i][0] + '</div>' + interview[iFields[i][1]] +
                        '</div>';
	                $('#dtl-txt-' + interview['INTERVIEW_REFERENCE_ID']).append(tMarkup);
                }
	        },
	        getUsers:function(onComplete){
	            var svc = constants.urls.getUsers + '?iref=' + constants.interview.id;
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
	        addUserNodes:function(data){
	            var lim = data.length;
	            var $Content = $('#' + constants.elements.nodeArea.id);
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
	            $Content.append(adri.ui.template.addUserNode());
	        },
	        addUserForm: function () {
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var userFields =    field.userRepeater('Candidate', 'users', 'candidates') +
                                    field.userRepeater('Recruiter', 'users', 'recruiters') +
                                    field.userRepeater('Interviewer', 'users', 'interviewers') +
                                  '<hr \>' +
                                  '<button class="button-one-struct" onclick="adri.interview.submitUsers()">SUBMIT</button>';
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
	                    adri.ui.form.data = {
	                        interview:{},
	                        positions:{},
	                        users:{
	                            candidates:{},
	                            recruiters:{},
	                            interviewers:{}
	                        }
	                    };
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
	                id: id
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
	            var jsData = {};
	            var index = 0;
	            var timeslot;
				
	            for(var ts in adri.data){
	                timeslot = adri.data[ts];
	                jsData[index] = new APITimeSlot(timeslot);
	                index++;
	            }
				
	            return jsData;
	        },
	        add:function(jsData){
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
	                id: id
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
	            var svc = constants.urls.validateUser + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user;
	            $.ajax({
	                type: "GET",
	                contentType: 'application/json',
	                dataType: "json",
	                url: svc,
	                success: function(data){
	                    onComplete(data);
	                },
	                error:function(xhr, ajaxOptions, error){
	                    console.log(xhr);
	                }
	            });
	        },
	        info: {
	            edit: function (userID) {
	                var $modal = $('#modal-form');
	                var form = adri.user.info.form();
	                $modal.html(form);
	                adri.user.info.load();
	                adri.ui.modal.open();
	            },
	            form: function () {
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

	                var form =  field.input('First Name', 'info', 'fName') + '<br/>' +
                                field.input('Last Name', 'info', 'lName') + '<br/>' +
	                            field.input('Email Address', 'info', 'email') + '<br/>' +
                                field.input('Phone Number', 'info', 'phone') + '<br/>' +
	                            field.input('Location', 'info', 'location') + '<br/>' +
                                field.input('Default Interview Length (Minutes)', 'info', 'defaultInterviewMinutes') + '<br/>' +
                                field.input('Competetion Ranking', 'info', 'ranking') + '<br/>' +
	                            field.wrap('Days Available', wdGroup) + '<br />' +
	                            field.wrap('Availability Start', startSelector) + '<br />' +
	                            field.wrap('Availability End', endSelector) + '<br />' +
	                            field.wrap('Lunch Hour', lunchSelector);
	                return form;
	            },
	            load: function (userID) {
                    /*
	                adri.user.info.get(userID,function (data) {
	                    adri.user.info.set(data);
	                });
                    */
	                adri.user.info.set();
	            },
	            get: function (userID, onComplete) {
	                var svc = constants.urls.persistentAvailability + '?iref=' + userID;
	                $.ajax({
	                    type: "GET",
	                    contentType: 'application/json',
	                    dataType: "json",
	                    url: svc,
	                    success: function (data) {
	                        onComplete(data[0][0]);
	                    },
	                    error: function (xhr, ajaxOptions, error) {
	                        console.log(xhr);
	                    }
	                });
	            },
	            set: function (data) {
	                adri.ui.form.data = {
	                    info:{
                            id: '',
                            fName: '',
                            lName: '',
                            email: '',
                            phone: '',
                            location: '',
                            defaultInterviewMinutes: '15',
                            ranking: '1'
	                    },
	                    availability: []
	                };
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
	        },
	        schedule: {
	            load: function () {

	            },
	            get: function () {

	            },
	            set: function () {

	            },
	            update: function () {

	            }
	        }
	    },
	    util: {
	        emailUser: function (userID) {
	            var data = {
	                interviewID: constants.interview.id,
	                userID: btoa(userID),
                    type: btoa('email')
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
	                type: btoa('sms')
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
					constants.interview.id = pObj.iref;
					constants.interview.user = pObj.uid;
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
					return '<div class="' + setClass('uiHeaderCell') + '">' + data + '</div>';
				},
				headerRow:function(data){
					var lim = data.length;
					var cells = '';
					for(var i = 0; i < lim; i++){
						cells = cells + adri.util.table.headerCell(data[i]);
					}
					return '<div class="' + setClass('uiHeaderRow') + '">' + cells + '</div>';
				},
				dataCell:function(data){
					return '<div class="' + setClass('uiCell') + '">' + data + '</div>';
				},
				indicatorCell:function(data){
					return '<div class="' + setClass('uiCell') + '"><div class="' + setClass('indicator' + data) + '"></div></div>';
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
					return '<div class="' + setClass('uiRow') + '" onclick="adri.ui.dashboard.getInterview(\'' + id + '\')">' + cells + '</div>';
				},
				dataRows:function(data,fields){
					var rows = '';
					for(var row in data){
						rows = rows + adri.util.table.dataRow(data[row],fields, data[row][fields[0][0]]);
					}
					return rows;
				},
				body:function(rows){
					return '<div class="spacer"></div><div class="' + setClass('uiTable') + '">' + rows + '</div><div class="spacer"></div>';
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
							return '<div class="' + setClass('calendar') + '">' + rows + '</div>';
						},
						wvbody: function (rows) {
						    return '<div class="wvCalBody">' + rows + '</div>';
						},
						row: function(cells){
							return '<div class="' + setClass('row') + '">' + cells + '</div>';
						},
						headerRow: function(cells){
							return '<div class="' + setClass('headerRow') + '">' + cells + '</div>';
						},
						cell: function(date){
							var cellid = adri.util.date.fmt({ date: date, format:'MM-dd-yyyy' });
							var sDate = adri.util.date.fmt({ date: date, format:'yyyy-MM-dd' });
							return 	'<div id="cal-cell-' + cellid + '" class="' + setClass('cell') + '" onclick="adri.ui.time.dateNode.add(\'' + sDate + '\',\'ui-datenodes\')">' +
										'<div nohighlight class="' + setClass('cellDate') + '">' + date.getDate() + '</div>' +
									'</div>';
						},
						inactiveCell: function(date){
							var cellid = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
							return 	'<div id="cal-cell-' + cellid + '" class="' + setClass('inactiveCell') + '">' +
										'<div nohighlight class="' + setClass('cellDate') + '">' + date.getDate() + '</div>' +
									'</div>';
						},
						title: function(date){
							return '<div nohighlight class="' + setClass('title') + '">' + adri.util.date.fmt({ date: date, format: 'MMMM yyyy' }) + '</div>';
						},
						header: function(wkdy){
							return '<div class="' + setClass('header') + '">' + wkdy + '</div>';
						},
                        wvheader: function (wkdy) {
						    return '<div class="wvHeader">' + wkdy + '</div>';
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
							
							return '<div nohighlight class="' + setClass('button') + '" onclick="' + clk + ';">' + dir.icon + '</div>';
						},
						controls: function(date, elmt){
							var tmp = adri.util.controls.calendar.template;
							return tmp.button(date, 'down', elmt) + tmp.title(date) + tmp.button(date, 'up', elmt);
						},
						wvCell: function (date) {
						    var cellid = adri.util.date.fmt({ date: date, format: 'MM-dd-yyyy' });
						    var sDate = adri.util.date.fmt({ date: date, format: 'yyyy-MM-dd' });
                            
						    return '<div id="cal-cell-' + cellid + '" class="' + setClass('weeklyViewCell') + ' ckable" onclick="adri.ui.dashboard.getInterviewsForDate(\'' + sDate + '\')">' +
										'<div nohighlight class="wv-cell-date">' + date.getDate() + '</div>' +
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
                        body = '<div class="' + setClass('monthHeader') + '">' + tmp.controls(minDate, elmt) + '</div><div class="' + setClass('calendar') + '">' + header + body + '</div>';
						body = body + '<div id="ui-datenodes" class="' + setClass('dateNodes') + '"></div>';
						body = body + '<div class="' + setClass('footerRow') + '"><button class="' + setClass('submitButton') + '" type="button" onclick="adri.ui.time.submit()">Add Times</button></div>';
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
					    body = '<div class="wvCalBody">' + header + body + '</div>';
					    body = body + '<div id="ui-datenodes" class="' + setClass('dateNodes') + '"></div>';
					    body = body + '<div class="' + setClass('footerRow') + '"></div>';
                        body = '<div class="cycle-weekly-calendar" style="-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);-o-transform: rotate(180deg);transform: rotate(180deg);"><div class="bigWidget centered ckable" onclick="adri.util.controls.calendar.cycleWeeklyView(-1,\'' + wkDate + '\');">&#xf139;</div></div>' +
                                '<div class="cycle-weekly-calendar"><div class="bigWidget centered ckable" onclick="adri.util.controls.calendar.cycleWeeklyView(1,\'' + wkDate + '\');">&#xf139;</div></div>' +
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

					    $('#' + constants.elements.weeklyView.id).html(adri.util.controls.calendar.drawWeeklyView(d));
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
		adri.ui.initialize();
		//adri.ui.debug();
		/*
		if(constants.interview.id != '' && constants.interview.user != ''){
			//adri.interview.get(interviewID); //----- to display interview info
			//adri.ui.time.load(); //----- for calendar selections
			//adri.ui.availability.load(); //----- for viewing timeslots
			adri.ui.initialize();
		}
		else{
			adri.error.noParams();
		}
		*/
});