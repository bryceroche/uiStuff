
window.constants = 
{
   helpdesk:
   {
      id:     '',
      user:   '',
      client: '',
      ui:     '',
	  searchclient: ''
	},
	urls:{
		searchUser: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/searchUser',
	    getClientList: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getClientList',
		getTimeSlots: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getTimeSlots',
		addTimeSlot: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addTimeSlot',
		getInterview: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/GetInterviewDetails',
		addInterview: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/AddEvent',
		validateUser: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/validateUser',
		getUsers: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getUsers',
		deleteTimeSlot:'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/deleteTimeslot',
		deleteUser:'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/deleteUser',
		addUsers: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addUsers',
		getUnscheduledInterviews: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getInterviews',
		getInterviewsDate: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getInterviewsDate',
		getPositions: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getPositions',
		getAllPositions:'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/allpositions',
		addPosition: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/addPosition',
		getUserTimeSlots: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getAvailabilityUser',
		notifyUser: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/NotifyUser',
		persistentAvailability: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/updatePersistentUserInfo',
		getCandidateInfo: 'https://4jja3nb0yf.execute-api.us-west-2.amazonaws.com/prod/getCandidateInfo'
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



window.adri = (function()
{
   function ADRITime(d, h, m, p, s)
   {
      this.interviewID = constants.helpdesk.id;
		this.userID      = adri.helpdesk.scheduling.userID;
		this.date        = d;
		this.hour        = h;
		this.minute      = m;
		this.period      = p;
		this.status      = s;
	}
	
	function APITimeSlot(timeslot)
   {
      this.interviewID = timeslot.interviewID;
		this.userID      = timeslot.userID;
		this.status      = timeslot.status;
		
		var ts = +timeslot.hour;
		if(timeslot.period.toLowerCase() == 'pm' && timeslot.hour != 12)
      {
			ts += 12;
		}
		else if(timeslot.period.toLowerCase() == 'am' && timeslot.hour == 12)
      {
			ts = '00';
		}
		ts = '' + ts + ':' + timeslot.minute + ':00';
		ts = timeslot.date + ' ' + ts;
		
		this.timeSlot = ts;
      this.clientID = constants.helpdesk.client;
      this.uiID     = constants.helpdesk.ui;

	}
	
	function timePeriod(h,m,p) 
   {
	    this.hour = h || '7';
	    this.minutes = m || '00';
	    this.period = p || 'AM';
	}
	function ADRIBlock() 
   {
	    this.startTime = new timePeriod();
	    this.endTime = new timePeriod();
	    this.lunchTime = new timePeriod();
	}

	function BlockDay(d) 
   {
	    this.day = d || '';
	    this.schedule = new ADRIBlock();
	}

   function setClass(e) 
   {
      if (!constants.elements[e]) 
      {
         constants.elements[e] = 
         {
            structureClass: '',
            stylingClass:''
         };
         console.log('Class ' + e + ' is not defined.');
      }
      return constants.elements[e].structureClass + ' ' + constants.elements[e].stylingClass;
   } // end setClass

   var adri= 
   {

      ui:
      {
         clientListArray : '',

         checkUser: function (user) 
         {
            var welcome = 'Welcome, ' + user.firstName + ' ' + user.lastName + '!';
            $('#welcome-box').html(welcome);
         }, // end checkUser

         setClientListValues: function (data) 
         {
            adri.ui.clientListArray = data;
            console.log( JSON.stringify(adri.ui.clientListArray ));

            var $clientId = $('#client-Id');
            var lim = data.length;
            console.log('clientList length = ' + lim );

            //for (var i = 0; i < lim; i++)
            //{
            //   $clientId.append('<option value="' + adri.ui.clientListArray[i].CLIENT_ID + '">' + adri.ui.clientListArray[i].CLIENT_NAME + '</option>');
            //}

         }, // end setClientListValues

         setup: function () 
         {
            $('#page-title').html('Help Desk');

            var $el = $('#dynamic-content-area');
            var wkDate = new Date();
            var field = adri.ui.template.field;

			console.log('setup = ' + JSON.stringify(adri.ui.clientListArray) );
		    console.log('setup = ' + JSON.stringify(adri.ui.clientListArray) );
			//console.log('constants.helpdesk.id     '+ constants.helpdesk.id +     ' atob(constants.helpdesk.id)     ' + atob(constants.helpdesk.id));
			console.log('constants.helpdesk.user   '+ constants.helpdesk.user +   ' atob(constants.helpdesk.user)   ' + atob(constants.helpdesk.user));
			console.log('constants.helpdesk.client '+ constants.helpdesk.client + ' atob(constants.helpdesk.client) ' + atob(constants.helpdesk.client));
            var form = 
            '<div id="new-event-form" style="margin: 0 auto;" class="' + setClass('eventForm') + '">' +
               '<div id="function-header-button" style="text-align: center; 3px solid #73AD21; " >' +
                  //'<div title="Add User" style="display: inline-block; margin: 10px;"><button onclick="adri.ui.form.addUserForm();"    class="thinButton hlBG negTxt ckable"><span>Add User</span></button></div>'+       
                  '<div title="Add Position" style="display: inline-block; margin: 10px;"><button onclick="adri.ui.openPositions();" class="thinButton hlBG negTxt ckable"><span>Add Position</span></button></div>'+ 
                  '<div title="Add Interview" style="display: inline-block; margin: 10px;"><button onclick="adri.ui.newEvent();" class="thinButton hlBG negTxt ckable"><span>Add Interview</span></button></div>'+ 
                  '<div title="Load File" style="display: inline-block; margin: 10px;"><button onclick="adri.ui.form.loadFileForm();"    class="thinButton hlBG negTxt ckable"><span>Load File</span></button></div>'+       
			  '</div>' +
               '<div class="formHeader secHTxt">Search for User</div>' +
               '<div id="sch-int-ctrls" class="container-controls">' +
                     field.select('Client Number', 'client-Id', adri.ui.clientListArray,'CLIENT_NAME','CLIENT_ID') +
                     field.input('Name or Email', 'info', 'search_user') +
                     '<div style="display: inline-block; padding-top: 50px;padding-left:10px;width:100%;text-align:left;">' + 
                       '<button type="button" class="submit-button-styling submit-button-struct" onclick="adri.ui.form.callSearchUsers();">Search</button>&nbsp;'+
                       '<button type="button" class="submit-button-styling submit-button-struct" onclick="adri.ui.clearSection(\'section-search-results\');">Clear Results</button>'+
                     '</div>'+
               '</div>'+              
            '</div>' + 
            '<div id="section-search-results" style="text-align: center; margin: 0 auto;"  class="' + setClass('eventForm') + '"></div>'+	
            '<div id="modal-form" class="' + setClass('modalForm') + '"></div>' +
            '<div id="modal-bg-overlay" class="' + setClass('modalOverlay') + '" onclick=""></div>';

            $el.html(form);
			
         }, // end setup    

         open: function () 
         {
            adri.database.validate(adri.ui.checkUser);
            adri.ui.setup();
            adri.database.getClientList(function (data) 
                                        {
	                                       console.log('hello getClientList should be set');
							               adri.ui.setClientListValues(data);
	                                    });
										}, // end open        

         drawSearchUserResults: function( clientid,searchresults)
         {
 
            $schresults = $('#section-search-results');
            $schresults.empty();

            $schresults.append('<div id="search-results-detail" style="margin: auto; width: 60%;" class="formHeader secHTxt">User List </div>');

            $.each(searchresults.users,function(index,result)
            {
               console.log('clientid = ' + clientid + ' aka ' + btoa(clientid));
               $schresults.append('<div style="display: inline-block; margin: 10px;" onclick="adri.ui.searchUserForm(\''+ btoa(result.USER_ID)  + '\',\''+ btoa(clientid) + '\');" class="thinButton mainBG negTxt ckable">' + result.USER_FNAME + ' ' +result.USER_LNAME+ '</div>');
            });
				    
            //'<div id="unscheduled-interviews"></div>' +
            //'<div id="modal-form" class="' + setClass('modalForm') + '"></div>' +
           // '<div id="modal-bg-overlay" class="' + setClass('modalOverlay') + '" onclick="adri.timeslot.removeControls();"></div>';
 
         }, // end drawSearchUserResults

         clearSection: function(element_str)
         {
            $section = $('#' +element_str );
            $schresults.empty();
         }, // end clearSection

         modal:
         {
            open:function()
            {
               $('.' + constants.elements.modalOverlay.stylingClass).fadeIn(400,function()
                                                                                 {
                                                                                    $('.' + constants.elements.modalForm.stylingClass).fadeIn(400);
	                                                                              });
	         },
	         close:function()
            {
	                $('.' + constants.elements.modalForm.stylingClass).fadeOut(400,function()
                                                                                    {
	                                                                                    $('.' + constants.elements.modalOverlay.stylingClass).fadeOut(400);
	                                                                                 });
	         }
	      },// end modal
         
         form:
         {
            data: 
            {
               clientID: constants.helpdesk.client,
               userID:   constants.helpdesk.user,
               uiID:     constants.helpdesk.ui,
               interview:{},
               positions:{},

               users:
               {
                  candidates:{},
                  recruiters:{},
                  interviewers:{}
               }

            }, // end data

	        refreshModal: function () 
            {
               adri.ui.form.resetData();
               adri.ui.modal.close();
            },
            
	        setData:function(id, field, value)
            {
               adri.ui.form.data[id][field] = value;
            },
            
            setBlockTime: function (category, index, field, value) 
            {
               var lim = adri.ui.form.data.availability[index].length;
	                
               for (var i = 0; i < lim; i++)
               {
                  adri.ui.form.data.availability[index][i].schedule[category][field] = value;
               }
            }, // end setBlockTime         

            callSearchUsers: function () 
            {
               console.log('------------------ begin callSearchUsers -----------------------');

				   var usersearch_str = $('#field-search_user').val();
				   var clientid_str   = $('#client-Id').val()
				   console.log('clientid_str = ' + clientid_str + ' about to call searchUsers');
				   console.log('search_str   = ' + usersearch_str + ' about to call searchUsers');
				   adri.database.searchUsers(clientid_str,usersearch_str,function(data)
                                                                    {
                                                                       adri.ui.drawSearchUserResults(clientid_str,data);
                                                                       console.log('called drawSearchUserResults');
                                                                    }
                                       );
				   console.log('------------------ end  callSearchUsers -----------------------');
            }, // end callSearchUsers

            addUserForm: function () 
			{
	            //adri.ui.form.resetData();
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var userFields = field.userRepeater('Candidate', 'users', 'candidates') +
                                field.userRepeater('Recruiter', 'users', 'recruiters') +
                                field.userRepeater('Hiring Manager', 'users', 'interviewers') +    //hard-coded
                                '<hr \>' +
                                '<button class="bigButton mainBG negTxt ckable" onclick="adri.database.submitUsers()">SUBMIT</button>';
	            $modal.html(userFields);
	            adri.ui.modal.open();            

            },// end addUserForm

            addUser: function(el, role, updates, field)
            {
               var markup = adri.ui.template.field.user(role, updates, field);
               $('#' + el).append(markup);
            }, // end addUser

            setUserData: function (role, index, field, val) 
            {
               adri.ui.form.data.users[role][index][field] = val;
               console.log(JSON.stringify(adri.ui.form.data.users[role]));
            }, // end setUserData

            resetData: function () 
            {
               adri.ui.form.data = 
               {
                  clientID:   constants.helpdesk.client,
                  userID:     constants.helpdesk.user,
                  uiID:       constants.helpdesk.ui,
                  interview: {},
                  positions: {},
                  users: 
                  {
                     candidates: {},
                     recruiters: {},
                     interviewers: {}
                  }
               };
            },

            setUser: function (data) 
            {

               var pa    = data.persistentAvailability[0];
               var uInfo = data.userInfo[0][0];

               adri.ui.form.data = 
               {
                  userID:      btoa(uInfo.USER_ID),
                  interviewID: constants.helpdesk.id,
                  clientID:    constants.helpdesk.client,
                  uiID:        constants.helpdesk.ui,
                  info:
                  {
                     id:    btoa(uInfo.USER_ID),
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

               var flds =  [
                              ['fName', 'USER_FNAME'],
                              ['lName', 'USER_LNAME'],
                              ['email', 'USER_EMAIL'],
                              ['phone', 'USER_PHONE'],
                              ['location', 'LOCATION'],
                              ['defaultInterviewMinutes', 'DEFAULT_INTERVIEW_LENGTH'],
                              ['ranking', 'INTERVIEW_RANK']
                           ];

               var lim = flds.length;

               for (var i = 0; i < lim; i++)
               {
                  $('#field-' + flds[i][0]).val(uInfo[flds[i][1]]);
                  adri.ui.form.data.info[flds[i][0]] = uInfo[flds[i][1]];
               }

               var dlm = adri.ui.form.data.info.defaultInterviewMinutes;

               if(dlm === '' || dlm === null)
               {
                  adri.ui.form.data.info.defaultInterviewMinutes = 20;
                  $('#field-defaultInterviewMinutes').val(20);
               }
               function timeConvert(ts) 
               {
                  var tps = ts.split('\:');
                  if (tps[0] == '12') 
                  {
                     tps[0] = '12PM';
                  }
                  else if (+tps[0] > 12)
                  {
                     tps[0] = (+tps[0] - 12) + 'PM';
                  }
                  else 
                  {
                     tps[0] = +tps[0] + 'AM';
                  }

                  var o =  {
                              hour: tps[0],
                              minute: tps[1]
                           };
                  return o;
               }

               function setTimeNode(t, tInstance, field) 
               {
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
	                
               for(var n = 0; n < tLim; n++)
               {
                  dateKey = pa[n].AVAILABLE_START + '-' + pa[n].AVAILABLE_END + '-' + pa[n].LUNCH_START;

                  if (typeof tMap[dateKey] === 'undefined') 
                  {
                     if(n !== 0)
                     {
                        adri.user.info.addBlockRepeater();
                     }
                     cIndex = adri.ui.form.data.availability.length;
                     tMap[dateKey] = cIndex;
                     $('#day-toggle-' + cIndex + '-' + pa[n].AVAILABLE_DAY.toLowerCase()).click();

                     setTimeNode(cIndex, pa[n].AVAILABLE_START, 'startTime');
                     setTimeNode(cIndex, pa[n].AVAILABLE_END, 'endTime');
                     setTimeNode(cIndex, pa[n].LUNCH_START, 'lunchTime');
                  }
                  else 
                  {
                     cIndex = tMap[dateKey];
                     $('#day-toggle-' + cIndex + '-' + pa[n].AVAILABLE_DAY.toLowerCase()).click();
                  }
               }
            },

	        submit: function (onComplete) 
			{

			   console.log(JSON.stringify(adri.ui.form.data));

	           $.ajax(
			   {
					type: "POST",
					contentType: 'application/json',
					dataType: "json",
					url: constants.urls.addInterview,
					data: JSON.stringify(adri.ui.form.data),
					success: function(data)
					{
						console.log(data);
						//adri.ui.form.resetData();
						console.log('Successfully submitted');
						if (typeof onComplete === "function") 
						{
							onComplete();
						}
					},
					error:function(xhr, ajaxOptions, error)
					{
						console.log(xhr);
					}
	            });
	        }, // end submit
 
            loadFileForm: function () 
			{
	            var $modal = $('#modal-form');
	            var field = adri.ui.template.field;
	            var userFields = field.inputFile('Load File', 'cancan', 'loadfile') +
                                '<hr \>' +
                                '<button class="bigButton mainBG negTxt ckable" onclick="adri.ui.form.sendFile()">SUBMIT</button>';
	            $modal.html(userFields);
	            adri.ui.modal.open();            

            },// end addUserForm

            sendFile: function () 
			{
                var files    = $('#field-loadfile').get(0).files;
				
				
				if(files.length > 0)
				{
				   alert('have files');
	               
				   var formData = new FormData();
				   
				   for(var i = 0; i < files.length; i++)
				   {
				      var file = files[i];
					  formData.append('uploads[]', file,file.name);
				   }
                
				   $.ajax
				   ({
				      url: '/upload',
					  type: 'POST',
					  data: formData,
					  processData: false,
					  contentType: false,
					  success: function(data){
					     console.log('upload successfule');
					  }
				   
				   
				   });
				   
				   
				   
				}
         

            },// end addUserForm

         }, // end form

         template:
         {
            field:
            {
               wrap: function (label, field) 
               {
                  var markup ='<div class="repeaterField left">' +
                                 '<span class="mainHTxt">' + label + '</span>' +
                                 '<hr class="tightHR" />' +
											field +
										'</div>';
                  return markup;
               },

               input:function(label, updates, field)
               {
                  var markup =   '<div class="' + setClass('fieldWrapper') + '">' +
                                    '<span>' + label + '</span>' +
                                      // '<input id="field-' + field + '" ></input>' +
                                      '<input id="field-' + field + '" onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());"></input>' +
                                 '</div>';
                  return markup;
	            },// end input

               inputFile:function(label, updates, field)
               {
                  var markup =   '<div class="' + setClass('fieldWrapper') + '">' +
                                    '<span>' + label + '</span>' +
                                      '<input id="field-' + field + '" type="File"></input>' +
                                 '</div>';
                  return markup;
	            },// end inputFile
				
               dayToggle: function (icon, updates, index) 
               {
                  var markup = '<div class="field-toggler ckable" id="day-toggle-' + index + '-' + updates + '" data-state="off" data-value="no" onclick="adri.ui.template.field.setToggler($(this)); adri.ui.template.field.instantiateDay(\'' + updates + '\',\'' + index + '\');"><div>' + icon + '</div></div>';
                  return markup;
               }, // end dayToggle

	           setToggler: function ($toggler) 
			   {
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
	           }, // end setToggler

               instantiateDay: function (day, index) 
               {
                  var $node = $('#day-toggle-' + index + '-' + day);
                  var state = $node.attr('data-state');

                  if (state === 'off') 
                  {
                     var lim = adri.ui.form.data.availability[index].length;
                     var ids = [];
                     for (var i = 0; i < lim; i++) 
                     {
                        if (adri.ui.form.data.availability[index][i].day === day) 
                        {
                           ids.push(i);
                        }
                     }

                     for (var n = ids.length - 1; n > -1; n--)
                     {
                        adri.ui.form.data.availability[index].splice(ids[n],1);
                     }
                  }
                  else 
                  {
                     var block = new BlockDay(day);
                     if (!adri.ui.form.data.availability[index]) 
                     {
                        adri.ui.form.data.availability.push([block]);
                     }
                     else 
                     {
                        block.schedule = adri.ui.form.data.availability[index][0].schedule;
                        adri.ui.form.data.availability[index].push(block);
                     }
                  }
	            }, // end instantiateDay

	           setRadio: function (zone, $radio) 
               {
	                $('#' + zone + ' .radio').removeClass('cked');
	                $radio.addClass('cked');
	            },
               
               userInput:function(label, role, index, field)
               {
                  var markup = 	'<div class="' + setClass('fieldWrapper') + '">' + 
											   '<span>' + label + '</span>' +
											   '<input onchange="adri.ui.form.setUserData(\'' + role + '\',\'' + index + '\',\'' + field + '\',$(this).val());"></input>' +
										   '</div>';
	                    return markup;
               }, // end userInput
               
               select: function (label,idname, choices,choice_lable,choice_value) 
               {
                  console.log('choices = ' + choices );
				  var lim = choices.length;
                  var opts = '';
                  for (var i = 0; i < lim; i++) 
                  {
					 opts = opts + '<option value="' +  choices[i][choice_value]  + '">' + choices[i][choice_lable]  + '</option>';
                  }

                  var markup = '<div class="' + setClass('fieldWrapper') + '">' +
                                  '<span>' + label + '</span>' +
											 '<select id="'+idname+ '" value="">' + opts + '</select>' +
										 '</div>';
	                    return markup;
	            },
               select2: function (label, updates, field, choices) 
               {
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
               }, // end select

	           userRepeater: function(label, updates, field)
               {
                  var rid = label.split(/[^A-Za-z0-9]/).join('');
                  var markup = '<div id="user-repeater-' + rid + '"></div><button class="thinButton hlBG negTxt ckable" onclick="adri.ui.form.addUser(\'user-repeater-' + rid + '\',\'' + label + '\',\'' + updates + '\',\'' + field + '\')"><span>Add ' + label + '</span></button>';
                  return markup;
	            },

               user: function (role, updates, fld) 
               {
                  var nodes = $('.form-user-node-struct').length;
                  adri.ui.form.data.users[fld][nodes] = {};
                  var field = adri.ui.template.field;
                  var markup = '<div id="user-' + nodes + '" class="' + setClass('userNode') + '">' +
                               '<div id="user-' + nodes + '" class="formHeader secHTxt">Enter ' + role + ' Information</div>' +
                                field.userInput(role + ' ID', fld, nodes, 'id') +
                                field.userInput(role + ' First Name', fld, nodes, 'firstName') +
                                field.userInput(role + ' Last Name', fld, nodes, 'lastName') +
                                field.userInput(role + ' Email', fld, nodes, 'email') +
                                field.userInput(role + ' Phone', fld, nodes, 'phone') +
                            '</div>';
                  return markup;
               }, // end user

               timeNodes: function (category, index) 
               {
                  var zone;
                  var markup = '';;
                  var timeData = adri.util.time.propagateWorkhoursArray();
                  var hours = timeData.hours;
                  var minutes = timeData.minutes;
                  var period = timeData.period;
                  var hrs = hours.length;
                  var mins = minutes.length;

                  var hmkup = '';
                  for (var h = 0; h < hrs; h++) 
                  {
                     hmkup = hmkup + adri.ui.template.field.workHourNode(category, index, 'radio-hours-' + index + '-' + category, hours[h]);
                  }

                  markup = '<div id="radio-hours-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Hour</div><div>' + hmkup + '</div></div><div class="ampmGradient timenode-bar"></div>';

                  var mmkup = '';
                  for (var m = 0; m < mins; m++) 
                  {
                     mmkup = mmkup + adri.ui.template.field.timeNode(category, index, 'radio-minutes-' + index + '-' + category, minutes[m], minutes[m]);
                  }

                  markup = markup + '<div id="radio-minutes-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Minute</div>' + mmkup + '</div>';

                  return markup;
               }, // end timeNodes

               workHourNode: function (category, index, zone, value) 
               {
                  var markup = '<div id="' + zone + '-' + index + '-' + value.join('') + '" class="field-toggler ckable radio" data-value="' + value[0] + '" onclick="adri.ui.template.field.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'hour\',\'' + value[0] + '\'); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'period\',\'' + value[1] + '\');"><div>' + value[0] + '</div></div>';
                  return markup;
               }, // end workHourNode

               timeNode: function (category, index, zone, value, icon) 
               {
                  var markup = '<div class="field-toggler ckable radio" id="' + zone + '-' + index + '-' + value + '" onclick="adri.ui.template.field.setRadio(\'' + zone + '\',$(this)); adri.ui.form.setBlockTime(\'' + category + '\',\'' + index + '\',\'minutes\',\'' + value + '\');"><div>' + icon + '</div></div>';
                  return markup;
               } // end timeNode
 
            }, // end field

         }, // end template
               
         searchUserForm: function (Userid,clientID) 
         {
            console.log('Showing userId ' + Userid +  ' plus setting client id to ' +  clientID + 'aka ' + atob(clientID) );
			constants.helpdesk.searchclient = clientID;
            adri.ui.form.resetData();
            var $modal = $('#modal-form');
            var field = adri.ui.template.field;
            var userFields =  '<hr \>' +
                              '<button class="thinButton mainBG negTxt ckable" onclick="adri.ui.launchEditForm(\''+Userid+ '\');">Edit Details</button>'+
                              '<button class="thinButton mainBG negTxt ckable" onclick="adri.ui.openInterviews(\''+Userid+ '\');">View Interviews</button>'+
                              '<button class="thinButton mainBG negTxt ckable" onclick="adri.ui.openUserPositions(\''+Userid+ '\');">View Positions</button>' + 

                                  '<div id="' + constants.elements.schedulingArea.id + '" class="' + setClass('schedulingArea') + '">' +
                                  '<div class="section-header centered secHTxt">Positions:</div>' +
                                  '<div class="section-header centered secHTxt">Interviews:</div>' +
                                  '<div id="scheduled-interviews-container" class="halfWidth-container pBG">' +
                                    '<div id="sch-int-ctrls" class="container-controls">' +

                                    '</div>' +
                                    '<div id="position-pool"></div>' + // this should be positions list
                                  '</div>' +

                                  '<div id="unscheduled-interviews-container" class="halfWidth-container pBG">' +
                                     '<div id="unsch-int-ctrls" class="container-controls">111' +
                                     //   '<div class="inline-field-ctnr">' +
                                     //      '<span class="secHTxt">Show: </span>' +
                                     //      '<select id="unsch-position-filter" class="inline-field" onchange="adri.ui.dashboard.filter.unscheduled();">' +
                                     //         '<option value="All">All</option>' +
                                     //      '</select>' +
                                      //  '</div>' +
                                     '</div>' +
                                     '<div id="unscheduled-interviews"></div>' +
                                  '</div>' ;

								  $modal.html(userFields);
	            adri.ui.modal.open();
         },         

         launchEditForm: function (userID) 
         {
            var $modal = $('#modal-form');
            var field = adri.ui.template.field;
            var wdGroup =  field.dayToggle('Su', 'sunday', 0) +
                           field.dayToggle('Mo', 'monday', 0) +
                           field.dayToggle('Tu', 'tuesday', 0) +
                           field.dayToggle('We', 'wednesday', 0) +
                           field.dayToggle('Th', 'thursday', 0) +
                           field.dayToggle('Fr', 'friday', 0) +
                           field.dayToggle('Sa', 'saturday', 0);

            var startSelector = field.timeNodes('startTime', 0);
            var endSelector = field.timeNodes('endTime', 0);
            var lunchSelector = field.timeNodes('lunchTime', 0);

            var form =  '<div class="formContent pBG">' +
                           '<div class="formHeader secHTxt centered">Identifying Information</div>' +
                           field.input('First Name', 'info', 'fName') +
                           field.input('Last Name', 'info', 'lName') +
                           field.input('Email Address', 'info', 'email') +
                           field.input('Phone Number', 'info', 'phone') +
                           field.input('Location', 'info', 'location') +
                           field.input('Default Call Length (Minutes)', 'info', 'defaultInterviewMinutes') +           //hard-coded
                           field.input('Hiring Manager Rank', 'info', 'ranking') +                                     //hard-coded
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
                           '<div ><button type="button" class="bigButton mainBG negTxt ckable" onclick="adri.database.updateUser(\'' + userID + '\',adri.ui.form.refreshModal)">Submit</button>&nbsp;<button type="button" class="bigButton mainBG negTxt ckable" onclick="adri.ui.modal.close()">Cancel</button></div>' +
                         '</div>';
	         $modal.html(form);
            adri.database.getUser(userID,function(data){
                console.log('should call database.getUser' + JSON.stringify(data) );
				
                adri.ui.form.setUser(data);
            });
	      },         

         setupPositions: function () 
         {
            var $el = $('#dynamic-content-area');
            $el.empty();
            var wkDate = new Date();
            var iCard = '<br><div id="' + constants.elements.schedulingArea.id + '" class="' + setClass('schedulingArea') + '">' +
                           '<div class="section-header centered secHTxt">Manage Positions:</div><br>' +
                           '<div id="position-pool" class="halfWidth-container pBG"></div><br>' +
                        '</div>' +
                        '<div id="modal-form" class="' + setClass('modalForm') + '"></div>' +
                        '<div id="modal-bg-overlay" class="' + setClass('modalOverlay') + '" onclick="adri.ui.removeControls();"></div>';
            $el.html(iCard);
         },

         openPositions: function () 
         {
            adri.ui.setupPositions();
			console.log('calling getAllPositions from openPositions'  );
            adri.database.getAllPositions(function (data) 
            {
               adri.ui.drawPositionPool(data);
            });
         },

         drawPositionPool: function(data) 
         {
            var $pool = $('#position-pool');
            var lim = data.length;
			var positionsArray = data[0];
            $pool.html('');
            for (var i = 0; i < positionsArray.length; i++) 
            {
			   $pool.append('<div onclick="adri.ui.scheduleInterview(\'' + positionsArray[i]['POSITION_ID'] + '\');" class="pool-node mainBG negTxt ckable">' + positionsArray[i]['POSITION_NAME'] + '</div>');
            }

            $pool.append('<button onclick="adri.ui.addPosition();" class="thinButton hlBG negTxt ckable"><span>Add Position</span></button>');
         },         

         openUserPositions: function (userId) 
         {
			console.log('calling getPositions from openUserPositions for userID ' + userId );
            adri.database.getPositions(userId,function (data) 
            {
               adri.ui.drawUserPositionPool(data);
            });
         },

         drawUserPositionPool: function(data) 
         {
            var $pool = $('#position-pool');
            var lim = data.length;
			var positionsArray = data[0];
            $pool.html('');
            for (var i = 0; i < positionsArray.length; i++) 
            {
			   $pool.append('<div onclick="adri.ui.scheduleInterview(\'' + positionsArray[i]['POSITION_ID'] + '\');" class="pool-node mainBG negTxt ckable">' + positionsArray[i]['POSITION_NAME'] + '</div>');
            }

            $pool.append('<button onclick="adri.ui.addPosition();" class="thinButton hlBG negTxt ckable"><span>Add Position</span></button>');
         },    

         addPosition: function () 
         {
            adri.ui.addPositionForm();
         }, // end addPosition

         addPositionForm: function () 
         {
            var $modal = $('#modal-form');
            var field = adri.ui.template.field;
            var posFields = field.input('Position ID', 'positions', 'id') + '<br/>' +
                            field.input('Position Name', 'positions', 'name') + '<br/>' +
                            field.select2('Position Type', 'positions', 'type', ['Vacancy', 'Evergreen']); //TO-DO: un-hardcode this
                                  
	            posFields  = '<div class="smallForm"><div class="smallFormFields"><div class="formHeader secHTxt">New Position</div>' + posFields + '</div></div>';
	            posFields  = 
                            posFields +
                            '<hr />' +
                            '<button class="bigButton mainBG negTxt ckable" onclick="adri.database.submitPosition(adri.ui.refreshPool)">SUBMIT</button>';
	            $modal.html(posFields);
	            adri.ui.modal.open();
         },// addPositionForm

         refreshPool: function () 
         {
            adri.ui.modal.close();
            adri.database.getAllPositions(function (data) 
            {
               adri.ui.drawPositionPool(data);
            });
         }, // end refreshPool

         init: function()
         {
            adri.util.getURLParams();
            adri.ui.open();
         }, // end init     
         
         scheduleInterview: function (positionID) 
         {
            adri.ui.scheduleInterviewForm(positionID);
         }, // end scheduleInterview

         scheduleInterviewForm: function (positionID) 
         {
            adri.ui.form.resetData();
            adri.ui.form.data.positions[0] = 
            {
               id: positionID
            };

            var $modal = $('#modal-form');
            var field = adri.ui.template.field;
            var intFields =   '<div id="new-event-form" class="' + setClass('eventForm') + '">' +
                                 '<div class="formHeader secHTxt">Enter Interview Information</div>' +
                                 field.input('Call Title', 'interview', 'title') +                                   //hard-coded
                                 '<div style="display:none;">' + 
								 field.input('Call ID', 'interview', 'id') + '</div>' +                              //hard-coded
                                 field.input('Phone/ Conference Number', 'interview', 'conferenceNumber') +          //hard-coded
                                 field.input('Conference ID', 'interview', 'conferenceID') +                         //hard-coded
                                 field.input('Conference Code', 'interview', 'conferenceCode') +                     //hard-coded
                                 '<hr/>' +                                                                           
                                 field.userRepeater('Candidate', 'users', 'candidates') +
                                 '<hr/>' +
                                 field.userRepeater('Recruiter', 'users', 'recruiters') +
                                 '<hr/>' +
                                 field.userRepeater('Hiring Manager', 'users', 'interviewers') +                     //hard-coded
                              '</div>';
                                 intFields = intFields +
                               '<hr />' +
                               '<button class="bigButton mainBG negTxt ckable" onclick="adri.ui.form.submit(adri.ui.refreshInterviews)">SUBMIT</button>';
	            $modal.html(intFields);

	            var dNow = new Date();
	            var iid = dNow.getTime() + '-' + atob(constants.helpdesk.user);
	            $('#field-id').val(iid);
	            $('#field-id').change();

	            adri.ui.modal.open();
         },

         removeControls:function()
         {
            adri.ui.modal.close();
         },
         
	     newEvent:function()
		 {
            var $content  = $('#dynamic-content-area');
            var field     = adri.ui.template.field;
            var interview = adri.ui.form.data.interview;
            var position  = adri.ui.form.data.positions;
            var users     = adri.ui.form.data.users;
            var form = '<div id="new-event-form" class="' + setClass('eventForm') + '">' +
                          '<div class="formHeader secHTxt">Enter Call Information</div>' +        //hard-coded
						  '<div style="display:none;">' + field.input('Call ID', 'interview', 'p_id') + '</div>' +
						  field.input('Call Title', 'interview', 'p_title') +                       //hard-coded
                          field.input('Interview Address', 'interview', 'p_address') +
                          field.input('Interview City', 'interview', 'p_city') +
                          field.input('Interview State', 'interview', 'p_state') +
                          field.input('Interview Zip', 'interview', 'p_zip') +
                          field.input('Phone/ Conference Number', 'interview', 'p_conferenceNumber') +   //hard-coded
                          field.input('Conference ID', 'interview', 'p_conferenceID') +           //hard-coded
                          field.input('Conference Code', 'interview', 'p_conferenceCode') +       //hard-coded
                          '<hr/>'+
                          field.input('Position ID', 'positions', 'id') +
                          field.input('Position Name', 'positions', 'name') +
                          '<hr/>'+
                          field.userRepeater('Candidate','users', 'candidates') +
                          '<hr/>'+
                          field.userRepeater('Recruiter','users', 'recruiters') +
                          '<hr/>'+
                          field.userRepeater('Hiring Manager', 'users', 'interviewers') +      //hard-coded
                       '</div>' +
                       '<div style="width:100%;text-align:center;"><button type="button" onclick="adri.ui.form.submit()">Create Event!</button></div>';
            $content.html(form);

            var dNow = new Date();
            var iid = dNow.getTime() + '-' + atob(constants.helpdesk.user);
            $('#field-id').val(iid);
            $('#field-id').change();

         }, // end newEvent

         openInterviews: function (userId) 
         {

            adri.database.getInterviews(userId,function (data) 
            {
               adri.ui.drawInterviewsForDate('unsch-int-ctrls',data);
            });

         },  // end  openInterviews      


		 drawInterviewsForDate: function (screen_location,data) 
		 {
            var $schArea = $('#' + screen_location);
            $schArea.html('');
            var lim = data.length;

			var dtlBar = '';
			var canName = '';
			var tslot = '';
			var phone = '';

			for (var i = 0; i < lim; i++) 
			{
				if (data[i]['CANDIDATE_ID'] !== null) 
				{
					canName = data[i]['FULL_NAME']
				}
				else 
				{
					canName = 'TBD';
				}

				if (data[i]['TIME_SLOT'] !== null) 
				{
					tslot = data[i]['CLEAN_DATE']
				}
				else 
				{
					tslot = 'TBD';
				}

				phone = data[i]['CANDIDATE_PHONE'] || '';

				if (phone === null) 
				{
					phone = '';
				}
				dtlBar = '<div class="scheduled-interview-info"><span class="brightTxt">With:</span> ' + canName + '</div>' +
							'<div class="scheduled-interview-info"><span class="brightTxt">For:</span> ' + data[i]['POSITION_NAME'] + '</div>' +
							'<div class="scheduled-interview-info"><span class="brightTxt">At:</span> ' + tslot + '</div><br/>' +
							'<div class="scheduled-interview-info"><span class="brightTxt">Phone:</span> ' + phone.toPhone() + '</div>' +
							'<div class="scheduled-interview-info"><span class="brightTxt">Email:</span> ' + data[i]['CANDIDATE_EMAIL'] + '</div>';
				$schArea.append('<div onclick="adri.ui.dashboard.getInterview(\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');" class="interview-sch-info-node ckable">' + dtlBar + '</div>');
			}
				    
	     },   // end drawInterviewsForDate    


	}, // end ui

      util:
      {
         getURLParams:function()
         {
            var uParts = window.location.href.split('?');
            var pObj = {};
            if(uParts.length > 1)
            {
               var paramString = uParts[1];
               var params = paramString.split('\&');
               var pInfo;
               for(var i = 0; i < params.length; i++)
               {
                  pInfo = params[i].split(/=(.+)/);
                  pInfo.push('');
                  pObj[pInfo[0]] = pInfo[1];
               }
               constants.helpdesk.id     = pObj.iref;
               constants.helpdesk.user   = pObj.uid;
               constants.helpdesk.ui     = pObj.uiid;
               constants.helpdesk.client = pObj.cliid;
            }
         },

         time: 
         {
            propagate: function()
            {
               var hours = '';
					var minutes = DDSelectedOption('00','00') + DDOption('15','15') + DDOption('30','30') + DDOption('45','45');
					var period = DDSelectedOption('AM','AM') + DDOption('PM','PM');
					
					for(var i = 0; i < 11; i++)
               {
                  hours = hours + DDOption(+i+1, +i+1);
					}
					hours = hours + DDSelectedOption('12','12');
					
					return { hours: hours, minutes: minutes, period: period };
				},

				propagateArray:function()
            {
				    var hours = [];
				    var minutes = ['00', '15', '30', '45'];
				    var period = ['AM','PM'];

				    for (var i = 0; i < 12; i++) 
                {
				        hours.push(+i+1);
				    }

				    return { hours: hours, minutes: minutes, period: period };
				},

				propagateWorkhoursArray: function () 
            {
				    var hours = [];
				    var minutes = ['00', '15', '30', '45'];
				    var period = ['AM', 'PM'];
				    var arr;
				    var hr = '';

				    for (var i = 0; i < 5; i++) 
                {
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
         
      },// end util

      database:
      {
         validate:function(onComplete)
         {
            //console.log('iref=' + constants.helpdesk.id + ' aka ' + atob(constants.helpdesk.id) );
			var svc = constants.urls.validateUser + '?iref=' + constants.helpdesk.id + '&uid=' + constants.helpdesk.user + '&uiid=' + constants.helpdesk.ui + '&cliid=' + constants.helpdesk.client;
            $.ajax
            (
               {
	                type: "GET",
	                contentType: 'application/json',
	                dataType: "json",
	                url: svc,
	                success: function(data)
                   {
	                    onComplete(data);
	                },
	                error:function(xhr, ajaxOptions, error)
                   {
	                    console.log(xhr);
	                }
	            }
            );
	      }, // end validate

         getClientList: function (onComplete) 
         {
            $.ajax(
            {
               type: "GET",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.getClientList + '?uid=' + constants.helpdesk.user + '&uiid=' + constants.helpdesk.ui + '&cliid=' + constants.helpdesk.client,
               success: function (data) 
               {
	                        onComplete(data);
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
	          });
         }, // end getClientList

         searchUsers: function (clientid_str,usersearch_str, onComplete) 
         {

            var jData = {
                           searchString: usersearch_str,
                           clientID:     clientid_str,
                        };

            $.ajax(
            {
               type: "POST",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.searchUser,
               data: JSON.stringify(jData),
               success: function (data) 
               {
                  console.log('Success should call adri.ui.form.drawSearchUserResults = ' + JSON.stringify(data))
                  onComplete(data);
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });

         } , // end searchUsers       

         getUser: function (userID, onComplete) 
         {
            console.log('is it encoded userID = ' + userID );
			console.log('constants.helpdesk.client is ' + constants.helpdesk.client );
			console.log('constants.helpdesk.searchclient is ' + constants.helpdesk.searchclient );
            var svc = constants.urls.persistentAvailability + '?uid=' + userID + '&cliid=' + constants.helpdesk.searchclient + '&uiid=' + constants.helpdesk.ui;
            $.ajax(
            {
               type: "GET",
               contentType: 'application/json',
               dataType: "json",
               url: svc,
               success: function (data) 
               {
                  onComplete(data);
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });
         }, // getUser

         updateUser: function (userID, onComplete) 
         {
            console.log('JSON - updateUser ' + JSON.stringify(adri.ui.form.data));
            var jData = JSON.stringify(adri.ui.form.data);
            $.ajax(
            {
               type:        "POST",
               contentType: 'application/json',
               dataType:    "json",
               url:         constants.urls.persistentAvailability,
               data:        jData,
               
               success: function (data) 
               {
                  onComplete();
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });
         },
         
         submitUsers:function()
         {
            adri.ui.form.data.interview.id = constants.helpdesk.id;

            $.ajax(
            {
               type: "POST",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.addUsers,
               data: JSON.stringify(adri.ui.form.data),
               success: function(data)
               {
                  console.log( 'Data info : ' +JSON.stringify(data) );
                  console.log( 'Form info : ' + JSON.stringify(adri.ui.form.data) );
                  adri.ui.form.resetData();
                  
                  /*
                     adri.interview.getUsers(function(data)
                     {
                        adri.interview.addUserNodes(data);
                        adri.ui.availability.get(function(data)
                           {
                              adri.ui.availability.drawUserTimes(data);
                           });
                     });
                     */
                     adri.ui.modal.close();
               },
               error:function(xhr, ajaxOptions, error)
               {
                  console.log(xhr);
	            }
            });
				
         },

         getPositions: function (userID,onComplete) 
         {
            $.ajax(
            {
               type: "GET",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.getPositions + '?userID=' + userID + '&uiID=' + constants.helpdesk.ui + '&clientId=' + constants.helpdesk.client,
               success: function (data) 
               {
                  console.log(JSON.stringify(data));
                  onComplete(data);
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });
         }, 

         getAllPositions: function (onComplete) 
         {
            $.ajax(
            {
               type: "GET",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.getAllPositions + '?uid=' + constants.helpdesk.user + '&uiid=' + constants.helpdesk.ui + '&cliid=' + constants.helpdesk.client,
               success: function (data) 
               {
                  onComplete(data);
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });
         }, 

         submitPosition: function (onComplete) 
         {

            var jData      = adri.ui.form.data.positions;
            jData.clientID = constants.helpdesk.client;
            jData.userID   = constants.helpdesk.user;
            jData.uiID     = constants.helpdesk.ui;

            $.ajax(
            {
               type: "POST",
               contentType: 'application/json',
               dataType: "json",
               url: constants.urls.addPosition,
               data: JSON.stringify(jData),
               success: function (data) 
               {
                  adri.ui.form.resetData();
                  onComplete();
               },
               error: function (xhr, ajaxOptions, error) 
               {
                  console.log(xhr);
               }
            });
         },

		 getUserInterviews: function (userId,onComplete) 
		 {
            var posFilter = 'All';
            console.log('constants.urls.getUnscheduledInterviews = ' + constants.urls.getUnscheduledInterviews + '?uid=' + userId + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client + '&pfl=' + btoa(posFilter));
            $.ajax(
			{
                type: "GET",
                contentType: 'application/json',
                dataType: "json",
                url: constants.urls.getUnscheduledInterviews + '?uid=' + userId + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client + '&pfl=' + btoa(posFilter),
				success: function (data) 
                {
                   JSON.stringify(data);
                   onComplete(data[0]);
                },
                error: function (xhr, ajaxOptions, error)
                {
                  console.log(xhr);
	            }
	        });
	     },	// end getUserInterviews	 

         getInterviews: function (userId,onComplete) 
		 {
            var posFilter = 'All';

			console.log('userId = ' + atob(userId) + ' posFilter =  ' + posFilter);
			
			
            $.ajax(
		    {
		 	   type: "GET",
			   contentType: 'application/json',
			   dataType: "json",
			   url: constants.urls.getUserTimeSlots + "?userID=" + userId + '&uiID=' + constants.helpdesk.ui + '&clientID=' + constants.helpdesk.client + '&positionName=' + btoa(posFilter),
			   success: function (data)
			   {
			      console.log('user time slots ' + JSON.stringify(data));
				  onComplete(data);
			   },
			   error: function (xhr, ajaxOptions, error)
			   {
			      console.log(xhr);
			   }
	        }); 
	     },	// end 	getInterviews


	  }  // end Database



      
   }

   return adri;

})();


/********************************************************/

$(document).ready(function(){
		adri.util.getURLParams();
		adri.ui.open();
});