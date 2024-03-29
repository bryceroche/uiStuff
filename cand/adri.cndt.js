window.constants = {
    interview: {
        id: '',
        user: ''
    },
    urls: {
        getAvailability: appconfig.api.base + '/' + appconfig.api.stage + '/getAvailability',
        getAvailabilityDate: appconfig.api.base + '/' + appconfig.api.stage + '/getAvailabilityDate',
        acceptTimeSlot: appconfig.api.base + '/' + appconfig.api.stage + '/acceptTimeSlot',
        deleteTimeSlot: appconfig.api.base + '/' + appconfig.api.stage + '/deleteTimeslot',
        getInterview: appconfig.api.base + '/' + appconfig.api.stage + '/GetInterviewDetails',
        validateUser: appconfig.api.base + '/' + appconfig.api.stage + '/validateUser',
        getUsers: appconfig.api.base + '/' + appconfig.api.stage + '/getUsers',
        getInterviews: appconfig.api.base + '/' + appconfig.api.stage + '/getInterviews',
        persistentInfo: appconfig.api.base + '/' + appconfig.api.stage + '/candidateinfo'
    }
};

window.adri = (function () {

    function ADRITime(d, h, m, p, s) {
        this.interviewID = constants.interview.id;
        this.userID = adri.interview.scheduling.userID;
        this.date = d;
        this.hour = h;
        this.minute = m;
        this.period = p;
        this.status = s;
    }

    function APITimeSlot(timeslot) {
        this.interviewID = timeslot.interviewID;
        this.userID = timeslot.userID;
        this.status = timeslot.status;

        var ts = +timeslot.hour;
        if (timeslot.period.toLowerCase() == 'pm' && timeslot.hour != 12) {
            ts += 12;
        }
        else if (timeslot.period.toLowerCase() == 'am' && timeslot.hour == 12) {
            ts = '00';
        }
        ts = '' + ts + ':' + timeslot.minute + ':00';
        ts = timeslot.date + ' ' + ts;

        this.timeSlot = ts;
    }

    function DDOption(value, text) {
        text = text || value;
        return '<option value="' + value + '">' + text + '</option>';
    }

    function DDSelectedOption(value, text) {
        text = text || value;
        return '<option selected="selected" value="' + value + '">' + text + '</option>';
    }

    var adri = {
        data: {},
        error: {
            noParams: function () {
                $('#adri-ras-content').html('Sorry, but we couldn\'t find your information. Please try clicking your invitation link again.');
            }
        },
        ui: {
            loader: {
                open: function () {
                    $('#msg-bg-overlay').stop();
                    $('#msg-bg-overlay').fadeIn(200);
                },
                close: function () {
                    $('#msg-bg-overlay').stop();
                    $('#msg-bg-overlay').fadeOut(200);
                }
            },
            message: function (txt) {
                $('#smallModal').html('<div class="infoTxt">' + txt + '</div>');
                adri.ui.modal.small.open();
            },
            confirmCancel: function(tsid, iref){
                var conf = confirm('Are you sure you want to cancel this ' + appconfig.alias.interview.toLowerCase() + '?');
                if(conf){
                    adri.timeslot.deleteSlot(tsid, function () {
                        adri.interview.get(function (data) {
                            adri.interview.loadToUI(data);
                            adri.ui.availability.get(function (data) {
                                adri.ui.availability.highlightAvailableDays(data);
                            });
                        });
                    });
                }
            },
            initialize: function () {
                var zones = '<div id="dynamic-content-area"></div>';
                $('#core-content').html(zones);
                adri.user.validate(adri.ui.checkUser);
            },
            checkUser: function (user) {
                if (!user.firstName) {
                    //invalid user
                }
                else {
                    var welcome = 'Welcome, ' + user.firstName + ' ' + user.lastName + '!';
                    $('#welcome-box').html(welcome);
                    adri.ui.load();
                }
            },
            load: function () {
               adri.interview.get(function (data) {
                    adri.interview.loadToUI(data);
                    adri.ui.loader.open();
                    adri.ui.availability.get(function (data) {
                        adri.ui.availability.highlightAvailableDays(data);
                        adri.ui.loader.close();
                        var msg = '<div class="formHeader secHTxt ttlTxt">Instructions</div>' +
                                   'To schedule your ' + appconfig.alias.interview.toLowerCase() + ', select one of the highlighed days from the calendar; once the available times finish loading (this may take a few seconds), select the desired time.';
                        adri.ui.message(msg);
                    });
                });
            },
            refreshAvailability: function () {
                adri.ui.availability.get(function (data) {
                    adri.ui.availability.highlightAvailableDays(data);
                });
            },
            dashboard: {
                open: function () {
                    adri.user.validate(adri.ui.dashboard.checkUser);
                },
                checkUser: function (user) {
                    adri.ui.dashboard.route[user.role](user);
                },
                route: {
                    'Recruiter': function (user) {

                    },
                    'Candidate': function (user) {
                        var db = adri.ui.dashboard;
                        db.setup();
                        adri.ui.loader.open();
                        db.getInterviews(function (data) {
                            db.drawInterviews(data);
                            adri.ui.loader.close();
                        });
                    },
                    'Interviewer': function (user) {

                    },
                    'INVALID': function () {

                    }
                },
                setup: function () {
                    var $el = $('#adri-ras-content');

                    var iCard = '<div id="interview-info-header-container" class="main-header">' +
                                    '<div id="interview-info-logo-container" class="logo-area">ADRI</div>' +
                                    '<div id="interview-info-logoCo-container" class="logo-areaCompany">' +
                                        '<img src= "adri/TrugreenLogo.png" style= "width:100%;height:100%;" >' +
                                    '</div > ' +
                                    '<div id="interview-controls" class="int-controls">' +
                                        '<div class="int-control-widget" onclick="adri.ui.dashboard.open()">&#xf00a;</div>' +
                                        
                                    '</div>' +
                                '</div > ' +
                                '<div id="interview-info-container" class="int-info-container">' +
                                        
                                    '</div>' +
                                '<div id="adri-ras-timeNodes" class="ui-node-area"></div>' +
                                '<div id="modal-form" class="modal-form"></div>' +
                                '<div id="smallModal" class="modal-small"></div>' +
                                '<div id="modal-bg-overlay" class="modal-overlay" onclick="adri.timeslot.removeControls();"></div>' +
                                '<div id="small-modal-bg-overlay" class="modal-overlay" onclick="adri.ui.modal.small.close();"></div>';

                    $el.html(iCard);
                },
                getInterviews: function (onComplete) {
                    $.ajax({
                        type: "GET",
                        contentType: 'application/json',
                        dataType: "json",
                        url: constants.urls.getInterviews + "?uid=" + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client,
                        success: function (data) {
                            onComplete(data[0]);
                        },
                        error: function (xhr, ajaxOptions, error) {
                            console.log(xhr);
                        }
                    });
                },
                drawInterviews: function (data) {
                    var $nodeArea = $('#adri-ras-timeNodes');
                    $nodeArea.html('');
                    var headers = [
						'ID',
						'Title',
						'Address',
						'City',
						'State',
						'Zip',
						'Conference Number',
						'Conference Code',
						'Conference ID',
						'Status'
                    ];

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

                    var headers = adri.util.table.headerRow(headers);
                    var rows = adri.util.table.dataRows(data, iFields);
                    var table = adri.util.table.body(headers + rows);
                    $nodeArea.html(table);
                },
                getInterview: function (id) {
                    constants.interview.id = btoa(id);
                    adri.ui.initialize();
                }
            },
            modal: {
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
            debug: function () {
                var $Content = $('#adri-ras-content');
                var b1 = '<button type="button" onclick="adri.interview.get()">Get Interview Info</button>';
                var b2 = '<button type="button" onclick="adri.ui.time.load(\'adri-ras-content\')">Load Time Controls</button>';
                var b3 = '<button type="button" onclick="adri.ui.availability.load()">Get Availability</button>';
                var b4 = '<button type="button" onclick="adri.ui.form.newEvent()">Create Event</button>';
                var markup = '<div style="text-align:center;">' +
									b1 +
									b2 +
									b3 +
									b4 +
								'</div>';
                $Content.html(markup);
            },
            setData: function (id, field, value) {
                adri.data[id][field] = value;
            },
            time: {
                load: function (elmt) {
                    var today = new Date();
                    var cctr = '<div id="adri-ras-calendar-control" class="cal-body"></div>';
                    $('#' + elmt).html(cctr);
                    adri.util.controls.calendar.draw('adri-ras-calendar-control', today.getMonth(), today.getFullYear());
                },
                submit: function () {
                    var jData = adri.timeslot.wrap();
                    adri.timeslot.add(jData);
                },
                dateNode: {
                    add: function (date, element) {
                        var dtNode = adri.ui.template.dateNode(adri.ui.time.dateNode.count, date);
                        $('#' + element).append(dtNode);
                        adri.data[adri.ui.time.dateNode.count] = new ADRITime(date, '12', '00', 'AM', 'Accepted');
                        adri.ui.time.dateNode.count++;
                    },
                    remove: function (id) {
                        var $nodeID = $('#datetime-node-' + id);
                        $nodeID.remove();
                    },
                    count: 0
                }
            },
            availability: {
                load: function () {
                    adri.ui.loader.open();
                    adri.ui.availability.get();
                },
                get: function (onComplete) {
                    var svc = constants.urls.getAvailability + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
                    $.ajax({
                        type: "GET",
                        contentType: 'application/json',
                        dataType: "json",
                        url: svc,
                        success: function (data) {
                            onComplete(data[0]);
                        },
                        error: function (xhr, ajaxOptions, error) {
                            console.log(xhr);
                        }
                    });
                },
                drawNodes: function (data) {
                    var lim = data.length;
                    var $Content = $('#adri-ras-timeNodes');
                    $Content.html('');
                    var map = {};
                    for (var i = 0; i < lim; i++) {
                        if (!map[data[i]['TIME_SLOT']]) {
                            map[data[i]['TIME_SLOT']] = data[i];
                            map[data[i]['TIME_SLOT']].users = [];
                        }

                        map[data[i]['TIME_SLOT']].users.push(data[i]['USER_FNAME'] + ' ' + data[i]['USER_LNAME']);

                    }

                    for (var time in map) {
                        $Content.append(adri.ui.template.availabilityNode(map[time]));
                    }
                },
                highlightAvailableDays: function (data) {
                    var lim = data.length;
                    var map = {};
                    var ts = 'TIME_SLOT';
                    var aDate = '';
                    var ds = [];
                    var $cell;
                    var av = [];

                    $('.availableCell').removeClass('availableCell');
                    $('.availableCell-inactive').removeClass('availableCell-inactive');

                    for (var i = 0; i < lim; i++) {
                        av = data[i][ts].split('T');
                        aDate = av[0];
                        
                        if (data[i]['CANDIDATE_ID'] !== null) {
                            $('#interview-info-start').html(data[i]['CLEAN_DATE']);
                            var allSet = '<div class="infoTxt vCenter centered">You\'re all set!<br/>Your ' + appconfig.alias.interview.toLowerCase() + ' is scheduled for <span onclick="adri.ui.confirmCancel(\'' + data[i].TSID + '\',\'' + data[i]['INTERVIEW_REFERENCE_ID'] + '\');" class="brightTxt ckablef">' + data[i]['CLEAN_DATE'] + '</span>.</div>';  //hard-coded
                            var $cal = $('#calendar-' + data[i]['INTERVIEW_REFERENCE_ID']);
                            $cal.html(allSet);
                        }

                        if (!map[data[i][ts]] && data[i]['CANDIDATE_ID'] === null) {
                            map[data[i][ts]] = [];
                            ds = aDate.split('-');
                            $cell = $('#cal-cell-' + ds[1] + '-' + ds[2] + '-' + ds[0]);

                            if ($cell.attr('data-cellType') === 'inactive') {
                                $cell.addClass('availableCell-inactive');
                            }
                            else {
                                $cell.addClass('availableCell');
                            }
                        }
                    }

                    $('.smallCalLoader').removeClass('pBG');
                    $('.smallCalLoader').html('');
                    window.setTimeout(function () {
                        $('.smallCalLoader').remove();
                    }, 200);

                },
                validateCanSelect: function (date) {
                    adri.ui.loader.open();
                    var me = constants.interview.user;
                    adri.user.info.get(me, function (data) {
                        var uInfo = data[0][0];
                        var phone = uInfo.USER_PHONE || '';
                        if (phone === 'null' || phone === '') {
                            adri.ui.loader.close();
                            var msg = '<div class="formHeader secHTxt ttlTxt">Missing Info</div>' +
                                        'It looks like we don\'t have your phone number.<br/><br/>Please click the ID card widget (<div class="medWidget">&#xf2c3;</div>) in the upper right portion of the page ' +
                                        'and add your phone number, then click submit.<br/><br/>Once you\'ve done that, you may select a date from the calendar.';
                            adri.ui.message(msg);
                        }
                        else {
                            adri.ui.availability.getSelectableTimes(date);
                        }
                    });
                },
                getSelectableTimes: function (date) {
                    var svc = constants.urls.getAvailabilityDate + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&adate=' + btoa(date) + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
                    $.ajax({
                        type: "GET",
                        contentType: 'application/json',
                        dataType: "json",
                        url: svc,
                        success: function (data) {
                            adri.ui.availability.drawSelectableTimes(data[0],date);
                            adri.ui.loader.close();
                        },
                        error: function (xhr, ajaxOptions, error) {
                            console.log(xhr);
                        }
                    });
                },
                drawSelectableTimes: function (data, date) {
                    var lim = data.length;
                    var markup;
                    var $nodes = $('#adri-ras-timeNodes');
                    var map = {};
                    var timeSlot;
                    var ds;
                    $nodes.html('');

                    for (var i = 0; i < lim; i++) {
                        if (!map[data[i]['CLEAN_TIME']]) {
                            map[data[i]['CLEAN_TIME']] = data[i]['CLEAN_TIME'];
                            markup = '<div class="time-node" onclick="adri.timeslot.acceptTimeslot(\'' + data[i]['TSID'] + '\');">' + data[i]['CLEAN_TIME'] + '</div>';
                            $nodes.append(markup);
                        }
                    }

                    var cdate = date.split('-');
                    cdate = [cdate[1],cdate[2],cdate[0]];
                    cdate = cdate.join('\/');
                    $('#avtimes-date').html(cdate);
                    $('.interviewNodeArea').fadeIn(200);
                },
                drawUserTimes: function (data) {
                    var lim = data.length;
                    var $Content = $('#adri-ras-timeNodes');
                    $Content.html('');
                    var map = {};
                    var sch = {};
                    var uid = atob(constants.interview.user);
                    sch[uid] = {};
                    for (var i = 0; i < lim; i++) {
                        if (!map[data[i]['USER_ID']]) {
                            map[data[i]['USER_ID']] = [];
                            $Content.append(adri.ui.template.userNode(data[i]));
                        }
                        if (!sch[data[i]['CANDIDATE_ID']]) {
                            sch[data[i]['CANDIDATE_ID']] = {};
                        }
                        map[data[i]['USER_ID']].push(data[i]);
                        sch[data[i]['CANDIDATE_ID']][data[i]['USER_ID']] = data[i]['TIME_SLOT_STATUS'];
                        sch[data[i]['CANDIDATE_ID']][data[i]['TIME_SLOT']] = data[i]['TIME_SLOT_STATUS'];
                    }
                    var $user;
                    var $self = $('#user-availability-' + uid);
                    var nodes;

                    for (var user in map) {

                        nodes = map[user].length;

                        for (var n = 0; n < nodes; n++) {
                            if (map[user][n]['TIME_SLOT'] !== null) {
                                $user = $('#user-availability-' + map[user][n]['USER_ID']);
                                if (map[user][n]['CANDIDATE_ID'] == uid) {
                                    $self.append(adri.ui.template.availabilityNodeSelf(map[user][n]));
                                }
                                if (!sch[uid][map[user][n]['USER_ID']] && !sch[uid][map[user][n]['TIME_SLOT']]) {
                                    $user.append(adri.ui.template.availabilityNodeSingle(map[user][n]));
                                }
                                else {
                                    $user.append(adri.ui.template.availabilityNodeSelf(map[user][n]));
                                }
                            }
                        }
                    }
                }
            },
            template: {
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
                    input: function (label, updates, field) {
                        var markup = '<div class="field-wrapper">' +
											'<span>' + label + '</span>' +
											'<input id="field-' + field + '" onchange="adri.ui.form.setData(\'' + updates + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
                        return markup;
                    },
                    userInput: function (label, role, index, field) {
                        var markup = '<div class="field-wrapper">' +
											'<span>' + label + '</span>' +
											'<input onchange="adri.ui.form.setUserData(\'' + role + '\',\'' + index + '\',\'' + field + '\',$(this).val());"></input>' +
										'</div>';
                        return markup;
                    },
                    userRepeater: function (label, updates, field) {
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

                        markup = '<div id="radio-hours-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Hour</div><div>' + hmkup + '</div></div><div class="ampmGradient timenode-bar"></div>';

                        var mmkup = '';
                        for (var m = 0; m < mins; m++) {
                            mmkup = mmkup + adri.ui.template.field.timeNode(category, index, 'radio-minutes-' + index + '-' + category, minutes[m], minutes[m]);
                        }

                        markup = markup + '<div id="radio-minutes-' + index + '-' + category + '" class="timenodes"><div class="secHTxt">Minute</div>' + mmkup + '</div>';

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
                availabilityNode: function (data) {
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
                    var markup = '<div id="availability-node-' + nodeID + '" class="date-node">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
									'</div>';
                    return markup;

                },
                availabilityNodeSingle: function (data) {
                    var nodeID = data['TIME_SLOT'].split(/[^0-9]/).join('-');
                    var markup = '<div id="availability-node-' + nodeID + '" class="date-node-single">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
										'<div class="accept-widget" onclick="adri.timeslot.acceptTimeslot(\'' + data['TSID'] + '\');">&#xf274;</div>' +
									'</div>';
                    return markup;
                },
                availabilityNodeSelf: function (data) {
                    var nodeID = data['TIME_SLOT'].split(/[^0-9]/).join('-');
                    var markup = '<div id="availability-node-' + nodeID + '" class="date-node-single">' +
										adri.ui.template.date(data['TIME_SLOT'].split('T')[0]) +
										'<div>' + data['TIME_SLOT'].split('T')[1].split('Z')[0] + '</div>' +
									'</div>';
                    return markup;
                },
                userNode: function (data) {
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
                    var role = data['USER_ROLE'] || '';
                    if (role === null) {
                        role = '';
                    }

                    role = role.split('Interviewer').join(appconfig.alias.interviewer);
                    role = role.split('Recruiter').join(appconfig.alias.recruiter);
                    role = role.split('Candidate').join(appconfig.alias.candidate);
                    var nodeID = data['USER_ID'];
                    //uiUserNodeInfo
                    var markup = '<div id="user-node-' + nodeID + '" class="ui-user-node">' +
										'<div class="ui-user-node-info">' +
                                            '<div class="ui-user-node-header">' + fullName + '</div>' +
                                            '<hr>' +
                                            '<div class="ui-user-node-body">' + role + '</div>' +
                                            '<div class="ui-user-node-body">' + data['USER_PHONE'] + '</div>' +
                                            '<div class="ui-user-node-body">' + data['USER_EMAIL'] + '</div>' +
											'<div id="user-availability-' + nodeID + '" class="user-date-node"></div>' +
                                        '</div>' +
									'</div>';
                    return markup;
                },
                addUserNode: function () {
                    return '<div onclick="adri.interview.addUserForm();" class="add-user-container"><div class="add-user-widget">&#xf234;</div></div>';
                },
                dateNode: function (nodeID, date) {
                    var selectors = adri.util.time.propagate();
                    var markup = '<div id="datetime-node-' + nodeID + '" class="date-node">' +
										adri.ui.template.date(date) +
										adri.ui.template.timeSelect(nodeID, selectors.hours, 'hour') +
										adri.ui.template.timeSelect(nodeID, selectors.minutes, 'minute') +
										adri.ui.template.timeSelect(nodeID, selectors.period, 'period') +
									'</div>';
                    return markup;
                },
                timeSelect: function (id, opts, field) {
                    return '<select id="' + id + '" class="time-select" onchange="adri.ui.setData(\'' + id + '\',\'' + field + '\',$(this).val())">' + opts + '</select>';
                },
                date: function (date) {
                    var da = date.split('-');
                    var formattedDate = da[1] + '/' + da[2] + '/' + da[0];
                    var markup = '<span>' + formattedDate + ': </span>'; //fix this up
                    return markup;
                }
            },
            form: {
                data: {
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
                setData: function (updates, field, val) {
                    adri.ui.form.data[updates][field] = val;
                },
                setUserData: function (role, index, field, val) {
                    adri.ui.form.data.users[role][index][field] = val;
                },
                addUser: function (el, role, updates, field) {
                    var markup = adri.ui.template.field.user(role, updates, field);
                    $('#' + el).append(markup);
                },
                removeUser: function (id, updates) {

                },
                newEvent: function () {
                    var $content = $('#adri-ras-content');
                    var field = adri.ui.template.field;
                    var interview = adri.ui.form.data.interview;
                    var position = adri.ui.form.data.positions;
                    var users = adri.ui.form.data.users;
                    var form = '<div id="new-event-form" class="form-event">' +
									field.input(appconfig.alias.interview +' Title', 'interview', 'title') +       //hard-coded
									'<div style="display:none;">' + field.input(appconfig.alias.interview + ' ID', 'interview', 'id') + '</div>' +
									//field.input(appconfig.alias.interview + ' Address', 'interview', 'address') +
									//field.input(appconfig.alias.interview + ' City', 'interview', 'city') +
									//field.input(appconfig.alias.interview + ' State', 'interview', 'state') +
									//field.input(appconfig.alias.interview + ' Zip', 'interview', 'zip') +
									field.input('Phone/ Conference Number', 'interview', 'conferenceNumber') +       //hard-coded
									field.input('Conference ID', 'interview', 'conferenceID') +               //hard-coded
									field.input('Conference Code', 'interview', 'conferenceCode') +           //hard-coded
									'<hr/>' +
									field.input('Position ID', 'positions', 'id') +
									field.input('Position Name', 'positions', 'name') +
									'<hr/>' +
									field.userRepeater(appconfig.alias.candidate, 'users', 'candidates') +
									'<hr/>' +
									field.userRepeater(appconfig.alias.recruiter, 'users', 'recruiters') +
									'<hr/>' +
									field.userRepeater(appconfig.alias.interviewer, 'users', 'interviewers') +
								'</div>' +
								'<div style="width:100%;text-align:center;"><button type="button" onclick="adri.ui.form.submit()">Create Event!</button></div>';
                    $content.html(form);
                },
                submit: function () {
                    $.ajax({
                        type: "POST",
                        contentType: 'application/json',
                        dataType: "json",
                        url: constants.urls.addInterview,
                        data: JSON.stringify(adri.ui.form.data),
                        success: function (data) {
                            adri.ui.form.resetData();
                        },
                        error: function (xhr, ajaxOptions, error) {
                            console.log(xhr);
                        }
                    });
                }
            }
        },
        interview: {
            scheduling: {
                userID: '',
                userName: '',
                userRole: ''
            },
            get: function (onComplete) {
                $.ajax({
                    type: "GET",
                    contentType: 'application/json',
                    dataType: "json",
                    url: constants.urls.getInterview + "?iref=" + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client,
                    success: function (data) {
                        onComplete(data[0]);
                    },
                    error: function (xhr, ajaxOptions, error) {
                        console.log(xhr);
                    }
                });
            },
            loadToUI: function (data) {
                var $el = $('#dynamic-content-area');
                var interview = data['0'];

                var iFields = [
					//['ID', 'INTERVIEW_REFERENCE_ID'],
					['Title', 'INTERVIEW_TITLE'],
					//['Address', 'INTERVIEW_ADDRESS'],
					//['City', 'INTERVIEW_CITY'],
					//['State', 'INTERVIEW_STATE'],
					//['Zip', 'INTERVIEW_ZIP'],
					['Conference Number', 'INTERVIEW_CONFERENCE_NUMBER'],
					['Conference Code', 'INTERVIEW_CONFERENCE_CODE'],
					['Conference ID', 'INTERVIEW_CONFERENCE_ID']
                ];

                var iCard = '<div id="interview-info-container" class="int-info-container">' +
                                '<div id="dtl-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="interviewCard">' +
                                    '<div id="dtl-txt-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="interviewCardContents pBG">' +
                                        '<div id="interview-info-header" class="formHeader secHTxt">' + appconfig.alias.interview + ' for ' + interview['POSITION_NAME'] + '</div>' +    //hard-coded
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="smallCalWrapper pBG">' +
                                '<div class="smallCalPackage">' +
                                    '<div id="calendar-' + interview['INTERVIEW_REFERENCE_ID'] + '" class="smallCalContainer"></div>' +
                                    '<div class="smallCalLoader pBG">' +
                                        '<div class="infoTxt vCenter centered">Loading...</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="bigSpacer"></div>' +
                            '<div class="interviewNodeArea pBG hidden">' +
                                '<div class="formHeader secHTxt">Available Times for <span id="avtimes-date"></span></div>' +
                                '<div id="adri-ras-timeNodes"></div>' +
                            '</div>' +
                            '<div id="modal-form" class="modal-form"></div>' +
                            '<div id="smallModal" class="modal-small"></div>' +
                            '<div id="modal-bg-overlay" class="modal-overlay" onclick="adri.timeslot.removeControls();"></div>' +
                            '<div id="small-modal-bg-overlay" class="modal-overlay" onclick="adri.ui.modal.small.close();"></div>' +
                            '<div id="msg-bg-overlay" class="loaderBG"><div class="loadTxt centered vCenter">Loading...</div></div>';

                $el.html(iCard);
                var d = new Date();
                var mth = d.getMonth();
                var year = d.getFullYear();
                adri.util.controls.calendar.draw('calendar-' + interview['INTERVIEW_REFERENCE_ID'], mth, year);
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

                tMarkup = '<div class="icardFldWrap">' +
								'<div class="icardField brightTxt">Start Time</div>' +
								'<div id="interview-info-start" class="maintxt fixedHgt"></div>' +
							'</div>';
                $('#dtl-txt-' + interview['INTERVIEW_REFERENCE_ID']).append(tMarkup);
            },
            getUsers: function (onComplete) {
                var svc = constants.urls.getUsers + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
                $.ajax({
                    type: "GET",
                    contentType: 'application/json',
                    dataType: "json",
                    url: svc,
                    success: function (data) {
                        onComplete(data[0]);
                    },
                    error: function (xhr, ajaxOptions, error) {
                        console.log(xhr);
                    }
                });
            },
            addUserNodes: function (data) {
                var lim = data.length;
                var $Content = $('#adri-ras-timeNodes');
                $Content.html('');
                var map = {};

                for (var i = 0; i < lim; i++) {
                    if (!map[data[i]['USER_ID']]) {
                        map[data[i]['USER_ID']] = data[i];
                    }
                }

                for (var user in map) {
                    $Content.append(adri.ui.template.userNode(map[user]));
                }
                $Content.append(adri.ui.template.addUserNode());
            },
            addUserForm: function () {
                var $modal = $('#modal-form');
                var field = adri.ui.template.field;
                var userFields = field.userRepeater(appconfig.alias.candidate, 'users', 'candidates') +
                                    field.userRepeater(appconfig.alias.recruiter, 'users', 'recruiters') +
                                    field.userRepeater(appconfig.alias.interviewer, 'users', 'interviewers') +
                                  '</div>' +
                                  '<hr \>' +
                                  '<button class="button-one-struct" onclick="adri.interview.submitUsers()">SUBMIT</button>';
                $modal.html(userFields);
                adri.ui.modal.open();
            },
            submitUsers: function () {
                adri.ui.form.data.interview.id = constants.interview.id;
                
                $.ajax({
                    type: "POST",
                    contentType: 'application/json',
                    dataType: "json",
                    url: constants.urls.addUsers,
                    data: JSON.stringify(adri.ui.form.data),
                    success: function (data) {
                        adri.ui.form.resetData();
                        adri.interview.getUsers(function (data) {
                            adri.interview.addUserNodes(data);
                            adri.ui.availability.get(function (data) {
                                adri.ui.availability.drawUserTimes(data);
                            });
                        });
                        adri.ui.modal.close();
                    },
                    error: function (xhr, ajaxOptions, error) {
                        console.log(xhr);
                    }
                });

            }
        },
        timeslot: {
            wrap: function () {
                var jsData = {};
                var index = 0;
                var timeslot;

                for (var ts in adri.data) {
                    timeslot = adri.data[ts];
                    jsData[index] = new APITimeSlot(timeslot);
                    index++;
                }

                return jsData;
            },
            addControls: function (elmt, userID, userName, userRole) {
                adri.interview.scheduling = {
                    userID: userID,
                    userName: userName,
                    userRole: userRole
                };
                adri.ui.time.load(elmt);
                adri.ui.modal.open();
            },
            removeControls: function () {
                adri.interview.scheduling = {
                    userID: '',
                    userName: '',
                    userRole: ''
                };
                adri.ui.modal.close();
            },
            acceptTimeslot: function (id) {
                adri.ui.loader.open();
                var $nodes = $('.interviewNodeArea');
                $nodes.fadeOut(200);

                var jsData = {
                    id: id,
                    userID: constants.interview.user,
                    interviewID: constants.interview.id,
                    clientID: constants.interview.client,
                    uiID: constants.interview.ui
                };

                $.ajax({
                    type: "POST",
                    contentType: 'application/json',
                    dataType: "json",
                    url: constants.urls.acceptTimeSlot,
                    data: JSON.stringify(jsData),
                    success: function (data) {
                        if (data !== null) {
                            console.log(data);
                            adri.interview.get(function (data) {
                                adri.interview.loadToUI(data);
                                adri.ui.availability.get(function (data) {
                                    adri.ui.availability.highlightAvailableDays(data);
                                    adri.ui.loader.close();
                                    var msg = '<div class="formHeader secHTxt">OOPS!</div>' +
                                        'Looks like you just missed that one. Please select another time from the available times.';
                                    adri.ui.message(msg);
                                });
                            });
                        }
                        else {
                            adri.interview.get(function (data) {
                                adri.interview.loadToUI(data);
                                adri.ui.availability.get(function (data) {
                                    adri.ui.availability.highlightAvailableDays(data);
                                    adri.ui.loader.close();
                                });
                            });
                        }
                    },
                    error: function (xhr, ajaxOptions, error) {
                        console.log(xhr);
                        
                    }
                });
            },
            deleteSlot: function (id, onComplete) {
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
                    success: function (data) {
                        onComplete();
                    },
                    error: function (xhr, ajaxOptions, error) {
                        console.log(xhr);
                    }
                });
            }
        },
        user: {
            validate: function (onComplete) {
                var svc = constants.urls.validateUser + '?iref=' + constants.interview.id + '&uid=' + constants.interview.user + '&uiid=' + constants.interview.ui + '&cliid=' + constants.interview.client;
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
                    
                    var form = '<div class="formContent pBG">' +
                                    '<div class="formHeader secHTxt centered">Identifying Information</div>' +
                                    field.input('First Name', 'info', 'fName') +
                                    field.input('Last Name', 'info', 'lName') +
	                                field.input('Email Address', 'info', 'email') +
                                    field.input('Phone Number', 'info', 'phone') +
	                                '<div class="centered spanned"><button type="button" class="bigButton mainBG negTxt ckable" onclick="adri.user.info.update(\'' + userID + '\',adri.user.info.updated)">Submit</button></div><div class="spacer"></div>' +
	                            '</div>';
                    return form;
                },
                load: function (userID) {
                    adri.user.info.get(userID, function (data) {
                        adri.user.info.set(data);
                    });
                },
                get: function (userID, onComplete) {
                    var svc = constants.urls.persistentInfo + '?uid=' + userID + '&cliid=' + constants.interview.client + '&uiid=' + constants.interview.ui;
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
                    var uInfo = data[0][0];
                    adri.ui.form.data = {
                        userID: btoa(uInfo.USER_ID),
                        interviewID: constants.interview.id,
                        clientID: constants.interview.client,
                        uiID: constants.interview.ui,
                        info: {
                            id: btoa(uInfo.USER_ID),
                            fName: '',
                            lName: '',
                            email: '',
                            phone: ''
                        }
                    };

                    var flds = [
                        ['fName', 'USER_FNAME'],
                        ['lName', 'USER_LNAME'],
                        ['email', 'USER_EMAIL'],
                        ['phone', 'USER_PHONE']
                    ];

                    var lim = flds.length;

                    for (var i = 0; i < lim; i++) {
                        $('#field-' + flds[i][0]).val(uInfo[flds[i][1]]);
                        adri.ui.form.data.info[flds[i][0]] = uInfo[flds[i][1]];
                    }
                },
                update: function (userID, onComplete) {
                    var jData = adri.user.info.setJson();
                    $.ajax({
                        type: "POST",
                        contentType: 'application/json',
                        dataType: "json",
                        url: constants.urls.persistentInfo,
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
            getURLParams: function () {
                var uParts = window.location.href.split('?');
                var pObj = {};
                if (uParts.length > 1) {
                    var paramString = uParts[1];
                    var params = paramString.split('\&');
                    var pInfo;
                    for (var i = 0; i < params.length; i++) {
                        pInfo = params[i].split(/=(.+)/);
                        pInfo.push('');
                        pObj[pInfo[0]] = pInfo[1];
                    }

                    var ui = window.location.href.toLowerCase().split('candidate')[0];
                    ui = btoa(ui);
                    constants.interview.id = pObj.iref;
                    constants.interview.user = pObj.uid;
                    constants.interview.ui = ui;
                    constants.interview.client = pObj.cliid;
                }
            },
            testFormat: function () {
                var frmt = $('#test-format').val();
                var args = { format: frmt }
                var rtv = adri.util.date.fmt(args);
                $('#test-format-out').html(rtv);
            },
            str: {
                pad: function (str, character, len, direction) {
                    len = len || 0;
                    len = len - str.length;
                    if (len < str.length) {
                        len = 0;
                    }
                    var d = direction || 'left';
                    d = d.toLowerCase();
                    var fString = '';
                    var padding = {
                        'left': function () {
                            for (var i = 0; i < len; i++) {
                                fString = '' + fString + character;
                            }
                            fString = '' + fString + str;
                        },
                        'right': function () {
                            fString = '' + str;
                            for (var i = 0; i < len; i++) {
                                fString = '' + fString + character;
                            }
                        }
                    };
                    padding[d]();
                    return fString;
                }
            },
            table: {
                headerCell: function (data) {
                    return '<div class="ui-header-cell">' + data + '</div>';
                },
                headerRow: function (data) {
                    var lim = data.length;
                    var cells = '';
                    for (var i = 0; i < lim; i++) {
                        cells = cells + adri.util.table.headerCell(data[i]);
                    }
                    return '<div class="ui-header-row">' + cells + '</div>';
                },
                dataCell: function (data) {
                    return '<div class="ui-cell">' + data + '</div>';
                },
                indicatorCell: function (data) {
                    return '<div class="ui-cell"><div class="indicator-cell"></div></div>';
                },
                dataRow: function (data, fields, id) {
                    var flds = fields.length;
                    var cells = '';
                    for (var i = 0; i < flds; i++) {
                        if (fields[i][1] == 'value') {
                            cells = cells + adri.util.table.dataCell(data[fields[i][0]]);
                        }
                        else {
                            cells = cells + adri.util.table.indicatorCell(data[fields[i][0]]);
                        }
                    }
                    return '<div class="ui-row" onclick="adri.ui.dashboard.getInterview(\'' + id + '\')">' + cells + '</div>';
                },
                dataRows: function (data, fields) {
                    var rows = '';
                    for (var row in data) {
                        rows = rows + adri.util.table.dataRow(data[row], fields, data[row][fields[0][0]]);
                    }
                    return rows;
                },
                body: function (rows) {
                    return '<div class="spacer"></div><div class="ui-table">' + rows + '</div><div class="spacer"></div>';
                }
            },
            date: {
                propagate: function (minDate, maxDate) {
                    //returns all dates between min and max date
                    var min = minDate.getDate() - 1;
                    var max = maxDate.getDate();
                    var dates = '';
                    var d;
                    var y = minDate.getFullYear();
                    var m = minDate.getMonth();
                    var dates = [];

                    for (var i = min; i < max; i++) {
                        d = new Date(y, m, min + i);
                        dates.push(d);
                    }

                    return dates;
                },
                fmt: function (args) {
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
                    for (var p = 0; p < pLen; p++) {
                        ptn = new RegExp(patterns[p].pattern + '(?=[^\\]]*(?:\\[|$))');
                        out = out.split(ptn).join('[' + patterns[p].out + ']');
                    }
                    return out.split(/[\[\]]/).join('');
                },
                resolve: function (pattern) {

                },
                monthIndexes: {
                    'January': 0,
                    'February': 1,
                    'March': 2,
                    'April': 3,
                    'May': 4,
                    'June': 5,
                    'July': 6,
                    'August': 7,
                    'September': 8,
                    'October': 9,
                    'November': 10,
                    'December': 11
                },
                months: [
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
                ]
            },
            time: {
                propagate: function () {
                    var hours = '';
                    var minutes = DDSelectedOption('00', '00') + DDOption('15', '15') + DDOption('30', '30') + DDOption('45', '45');
                    var period = DDSelectedOption('AM', 'AM') + DDOption('PM', 'PM');

                    for (var i = 0; i < 11; i++) {
                        hours = hours + DDOption(+i + 1, +i + 1);
                    }
                    hours = hours + DDSelectedOption('12', '12');

                    return { hours: hours, minutes: minutes, period: period };
                }
            },
            controls: {
                calendar: {
                    template: {
                        body: function (rows) {
                            return '<div class="cal-body">' + rows + '</div>';
                        },
                        row: function (cells) {
                            return '<div class="cal-row">' + cells + '</div>';
                        },
                        headerRow: function (cells) {
                            return '<div class="cal-header-row">' + cells + '</div>';
                        },
                        cell: function (date) {
                            var cellid = adri.util.date.fmt({ date: date, format: 'MM-dd-yyyy' });
                            var sDate = adri.util.date.fmt({ date: date, format: 'yyyy-MM-dd' });
                            return '<div id="cal-cell-' + cellid + '" data-cellType="active" class="cal-cell" onclick="adri.ui.availability.validateCanSelect(\'' + sDate + '\',\'ui-datenodes\')">' +
										'<div nohighlight class="cal-cell-date">' + date.getDate() + '</div>' +
									'</div>';
                        },
                        inactiveCell: function (date) {
                            var cellid = adri.util.date.fmt({ date: date, format: 'MM-dd-yyyy' });
                            return '<div id="cal-cell-' + cellid + '" data-cellType="inactive" class="cal-inactive-cell">' +
										'<div nohighlight class="cal-cell-date">' + date.getDate() + '</div>' +
									'</div>';
                        },
                        title: function (date) {
                            return '<div nohighlight class="cal-title">' + adri.util.date.fmt({ date: date, format: 'MMMM yyyy' }) + '</div>';
                        },
                        header: function (wkdy) {
                            return '<div class="cal-header secHTxt">' + wkdy + '</div>';
                        },
                        button: function (date, dir, elmt) {
                            var cMap = {
                                'up': {
                                    icon: '&#xf138;',
                                    i: 1
                                },
                                'down': {
                                    icon: '&#xf137;',
                                    i: -1
                                }
                            };

                            dir = cMap[dir];

                            var d = new Date(date.getFullYear(), date.getMonth() + dir.i, 1);
                            var mthYr = adri.util.date.fmt({ date: d, format: 'MMMM yyyy' });
                            var clk = 'adri.util.controls.calendar.draw(\'' + elmt + '\',\'' + d.getMonth() + '\',\'' + d.getFullYear() + '\');adri.ui.refreshAvailability();';

                            return '<div nohighlight class="cal-button" onclick="' + clk + ';">' + dir.icon + '</div>';
                        },
                        controls: function (date, elmt) {
                            var tmp = adri.util.controls.calendar.template;
                            return tmp.button(date, 'down', elmt) + tmp.title(date) + tmp.button(date, 'up', elmt);
                        }
                    },
                    frame: function (minDate, maxDate, elmt) {
                        var tmp = adri.util.controls.calendar.template;
                        var header = '';
                        for (var d = 0; d < 7; d++) {
                            header = header + tmp.header(adri.util.date.days[d].abbreviation);
                        }

                        var row = '';
                        var cell = '';
                        var body = '';
                        var firstWeekday = minDate.getDay();
                        var firstDayDifference = 0 - firstWeekday;
                        var calDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + firstDayDifference);

                        for (var w = 0; w < 6; w++) {
                            row = '';
                            for (var d = 0; d < 7; d++) {
                                if (calDate < minDate || calDate > maxDate) {
                                    cell = tmp.inactiveCell(calDate);
                                }
                                else {
                                    cell = tmp.cell(calDate);
                                }

                                row = row + cell;
                                calDate.setDate(calDate.getDate() + 1);
                            }
                            row = tmp.row(row);
                            body = body + row;
                        }

                        header = tmp.headerRow(header);
                        body = '<div class="cal-monthHeader">' + tmp.controls(minDate, elmt) + '</div><div class="cal-body">' + header + body + '</div>';
                        body = body + '<div id="ui-datenodes" class="date-nodes"></div>';
                        return body;
                    },
                    draw: function (elmt, mth, yr) {
                        var cal = adri.util.controls.calendar;
                        var minDate = new Date(yr, mth, 1);
                        var maxDate = new Date(yr, (+mth + 1), 0);

                        var dates = adri.util.date.propagate(minDate, maxDate);
                        var times = adri.util.time.propagate();

                        var $el = $('#' + elmt);
                        $el.html(cal.frame(minDate, maxDate, elmt));
                    }
                }
            }
        }
    };
    return adri;
})();

$(document).ready(function () {
    $('#page-title').html(appconfig.alias.interview + ' Self-Scheduler');
    adri.util.getURLParams();
    adri.ui.initialize();
    $('.dynamicContent').fadeIn('fast');
});