angular.module('CareerPortal').run(['$templateCache', function($templateCache) {$templateCache.put('app/detail/detail.html','<section class="job-detail"><div class="card apply" data-ng-if="detail.job.isPublic && !detail.job.isDeleted && detail.job.isOpen"><span class="card-date" data-ng-if="detail.job.dateLastPublished">{{\'common.addedLabel\' | i18n}} - {{detail.job.dateLastPublished | displayDate}}</span><span class="card-title-category"><span class="card-title">{{::detail.job.title}}</span> <span class="card-category">{{::detail.job.publishedCategory.name}}</span></span><span class="card-location">{{::detail.job.address.city}}<span data-ng-if="::(detail.job.address.city && detail.job.address.state)">,&nbsp;</span>{{::detail.job.address.state}}</span><span class="card-separator" data-ng-show="::((detail.job.address.city || detail.job.address.state) && detail.job.employmentType)">&nbsp;|&nbsp;</span><span class="card-type">{{::detail.job.employmentType.toString()}}</span><button class="apply" data-ng-click="detail.applyModal()" data-ng-disabled="detail.alreadyApplied" data-ng-class="{ \'disabled\': detail.alreadyApplied }"><span data-ng-if="!detail.alreadyApplied">{{\'detail.applyButton\' | i18n}}</span> <span data-ng-if="detail.alreadyApplied">{{\'detail.alreadyApplied\' | i18n}}</span></button><hr data-ng-if="detail.relatedJobs.length !== 0"><div class="related-jobs" data-ng-if="detail.relatedJobs.length !== 0"><h5>{{\'detail.relatedLabel\' | i18n}} {{::detail.job.publishedCategory.name}} {{\'common.jobsLabel\' | i18n}}</h5><div class="related-job" data-ng-repeat="job in detail.relatedJobs"><a data-ng-href="#/jobs/{{::job.id}}">{{::job.title}}</a> <span class="location">{{::job.address.city}}<span data-ng-if="::(job.address.city && job.address.state)">,</span>{{::job.address.state}}</span></div></div><hr><a href="" data-ng-click="detail.loadJobsWithCategory(detail.job.publishedCategory.id)" class="category-filter">{{\'detail.viewAllJobsLabel\' | i18n}}<i class="bhi-arrow-right"></i></a></div><div class="card description" data-ng-if="detail.job.isPublic && !detail.job.isDeleted && detail.job.isOpen"><div class="job-heading"><span class="fill"></span><div class="job-actions" data-ng-class="{ \'share-open\' : detail.open }"><div class="share-outlets"><a data-ng-href="{{ detail.emailLink() }}"><i class="bhi-email"></i></a> <a href="" data-ng-click="detail.shareTwitter();"><i class="bhi-twitter"></i></a> <a href="" data-ng-click="detail.shareFacebook();"><i class="bhi-facebook"></i></a> <a href="" data-ng-click="detail.shareLinkedin();"><i class="bhi-linkedin"></i></a></div><button name="share" data-ng-click="detail.open = !detail.open;"><i class="bhi-share"></i> {{\'common.shareLabel\' | i18n}}</button><button name="print" data-ng-click="detail.print();"><i class="bhi-print"></i> {{\'common.printLabel\' | i18n}}</button></div><h2>{{\'detail.jobDescriptionHeading\' | i18n}}</h2></div><div class="job-details" data-ng-bind-html="detail.job.publicDescription"></div></div><div class="no-data-message" data-ng-if="!(detail.job.isPublic && !detail.job.isDeleted && detail.job.isOpen)"><h2>{{\'common.noDataHeading\' | i18n}}</h2><h3>{{\'detail.jobClosedMessage\' | i18n}}</h3><p>{{\'detail.jobClosedOtherJobsLabel\' | i18n}} <a href="" data-ng-click="detail.loadJobsWithCategory(detail.job.publishedCategory.id)">{{\'common.hereLabel\' | i18n}}</a></p></div></section>');
$templateCache.put('app/header/header.html','<header class="app"><button class="toggle-filters" name="filters-menu" data-ng-click="header.toggleFilters()"><i class="bhi-search-menu open"></i> <i class="bhi-times close"></i> <span class="badge" data-ng-show="header.SearchService.searchParams.category.length + header.SearchService.searchParams.location.length > 0">{{header.SearchService.searchParams.category.length + header.SearchService.searchParams.location.length}}</span></button> <button class="go-back" name="over-arrow-back" data-ng-click="header.goBack()"><i class="bhi-arrow-left"></i></button> <label>{{::header.configuration.companyName}}</label></header>');
$templateCache.put('app/list/list.html','<section class="job-list"><h4 data-ng-if="!list.SearchService.helper.isSearching && list.SearchService.currentListData.length">{{\'list.jobListHeading\' | i18n}}</h4><div class="cards"><div class="card-wrapper" data-ng-repeat="job in list.SearchService.currentListData | orderBy:dateLastPublished"><a class="card slide-up-item" data-ng-href="#/jobs/{{job.id}}"><span class="card-date" data-ng-if="job.dateLastPublished">{{\'common.addedLabel\' | i18n}} - {{job.dateLastPublished | displayDate}}</span><span class="card-title-category"><span class="card-title">{{::job.title}}</span> <span class="card-category">{{::job.publishedCategory.name}}</span></span><span class="card-location">{{::job.address.city}}<span data-ng-if="::(job.address.city && job.address.state)">,&nbsp;</span>{{::job.address.state}}</span> <span class="card-separator" data-ng-show="::((job.address.city || job.address.state) && job.employmentType)">|</span> <span class="card-type">{{::job.employmentType.toString()}}</span><span class="card-description">{{ ::job.publicDescription | stripHtml }}</span><i class="bhi-arrow-right"></i></a></div></div><div class="no-data-message" data-ng-if="!list.SearchService.helper.isSearching && !list.SearchService.currentListData.length"><h2>{{\'common.noDataHeading\' | i18n}}</h2><h3>{{\'list.noDataMessage\' | i18n}}</h3><p data-ng-if="list.SearchService.searchParams.location.length || list.SearchService.searchParams.category.length || list.SearchService.searchParams.textSearch.length"><a href="" data-ng-click="list.clearSearchParamsAndLoadData();">{{\'list.noDataResolution\' | i18n}}</a></p></div><p class="load-more-data" data-ng-click="list.loadMoreData();" data-ng-show="list.SearchService.helper.hasMore">{{\'list.loadMoreDataLabel\' | i18n}}</p></section>');
$templateCache.put('app/main/main.html','<section class="main" data-ng-class="[main.SharedData.viewState, main.SharedData.gridState]"><career-portal-modal data-ng-show="main.SharedData.modalState === \'open\'"></career-portal-modal><section class="portal"><div class="portal-canvas"><career-portal-sidebar></career-portal-sidebar><section class="main"><career-portal-header></career-portal-header><section class="fade" data-ui-view=""></section><div id="mask" class="mask" data-ng-click="main.closeFilters();"></div></section></div></section></section>');
$templateCache.put('app/modal/modal.html','<div class="modal-container" id="modal-container"><div class="modal slide-up" data-ng-class="{\'success\':!modal.showForm}"><header><section data-ng-if="modal.showForm"><h2>{{ modal.SearchService.currentDetailData.title }}</h2><span class="category">{{ modal.SearchService.currentDetailData.publishedCategory.name }}</span><span class="location">{{ modal.SearchService.currentDetailData.address.city }}<span data-ng-if="(modal.SearchService.currentDetailData.address.city && modal.SearchService.currentDetailData.address.state)">,&nbsp;</span>{{ modal.SearchService.currentDetailData.address.state }}</span><span class="separator" data-ng-show="::((modal.SearchService.currentDetailData.address.city || modal.SearchService.currentDetailData.address.state) && modal.SearchService.currentDetailData.employmentType)">|</span><span class="type">{{ ::modal.SearchService.currentDetailData.employmentType }}</span><i class="bhi-times close" data-ng-click="modal.closeModal(applyForm)"></i></section><section class="success" data-ng-if="!modal.showForm"><h2>{{ \'modal.successHeading\' | i18n }}</h2><h3>{{ \'modal.successSubHeading\' | i18n }}</h3></section></header><div class="main" data-ng-class="{\'success\':!modal.showForm}"><section><form name="applyForm" class="apply-form" novalidate="" data-ng-show="modal.showForm"><div class="form-field"><div class="input"><span class="required">*</span> <input type="text" name="firstName" value="" data-ng-model="modal.ApplyService.form.firstName" data-i18n-attr="{placeholder: \'modal.firstNamePlaceholder\'}" required=""></div><span class="error" data-ng-show="applyForm.firstName.$dirty || applyForm.$submitted"><span data-ng-show="applyForm.firstName.$error.required">{{ \'modal.firstNameValidation\' | i18n }}</span></span></div><div class="form-field"><div class="input"><span class="required">*</span> <input type="text" name="lastName" value="" data-ng-model="modal.ApplyService.form.lastName" data-i18n-attr="{placeholder: \'modal.lastNamePlaceholder\'}" required=""></div><span class="error" data-ng-show="applyForm.lastName.$dirty || applyForm.$submitted"><span data-ng-show="applyForm.lastName.$error.required">{{ \'modal.lastNameValidation\' | i18n }}</span></span></div><div class="form-field"><div class="input"><span class="required">*</span> <input type="email" name="email" value="" data-ng-model="modal.ApplyService.form.email" data-i18n-attr="{placeholder: \'common.emailPlaceholder\'}" required=""></div><span class="error" data-ng-show="applyForm.email.$dirty || applyForm.$submitted"><span data-ng-show="applyForm.email.$error.required">{{ \'modal.emailValidationRequired\' | i18n }}</span> <span data-ng-show="applyForm.email.$error.email">{{ \'modal.emailValidationFormat\' | i18n }}</span></span></div><div class="form-field"><div class="input"><span>&nbsp;</span> <input type="text" name="mobile-phone" value="" data-ng-model="modal.ApplyService.form.phone" data-i18n-attr="{placeholder: \'modal.phonePlaceholder\'}"></div></div><div class="tooltip-info" data-ng-show="!modal.isToolTipHidden"><div ng-style="modal.tooltipStyle" class="tooltip-modal"><div class="tooltip-info-closer"><i class="bhi-close" data-ng-click="modal.hideTooltip()"></i></div><div data-ng-if="modal.currentToolTip === 0"><strong>{{ \'modal.supportedFileFormatsLabel\' | i18n }}</strong><ul><li data-ng-repeat="type in modal.configuration.acceptedResumeTypes">{{ type }}</li></ul></div><div data-ng-if="modal.currentToolTip === 1" data-i18n="eeoc.genderRaceEthnicityHelp" data-companyname="{{ modal.configuration.companyName }}"></div><div data-ng-if="modal.currentToolTip === 2"><ul><li>{{ \'eeoc.raceEthnicityHL\' | i18n }}: {{ \'eeoc.raceEthnicityHLHelp\' | i18n }}</li><li>{{ \'eeoc.raceEthnicityWH\' | i18n }}: {{ \'eeoc.raceEthnicityWHHelp\' | i18n }}</li><li>{{ \'eeoc.raceEthnicityBL\' | i18n }}: {{ \'eeoc.raceEthnicityBLHelp\' | i18n }}</li><li>{{ \'eeoc.raceEthnicityAS\' | i18n }}: {{ \'eeoc.raceEthnicityASHelp\' | i18n }}</li><li>{{ \'eeoc.raceEthnicityNP\' | i18n }}: {{ \'eeoc.raceEthnicityNPHelp\' | i18n }}</li><li>{{ \'eeoc.raceEthnicityIA\' | i18n }}: {{ \'eeoc.raceEthnicityIAHelp\' | i18n }}</li></ul></div><div data-ng-if="modal.currentToolTip === 3" data-i18n="eeoc.veteranHelp" data-companyname="{{ modal.configuration.companyName }}" data-companyname2="{{ modal.configuration.companyName }}" data-companyname3="{{ modal.configuration.companyName }}"></div><p data-ng-if="modal.currentToolTip === 4" data-i18n="eeoc.disabilityHelp" data-companyname="{{ modal.configuration.companyName }}" data-companyname2="{{ modal.configuration.companyName }}"></p><p data-ng-if="modal.currentToolTip === 5" ng-bind-html="modal.privacyConsent.privacyStatementParagraphs"></p></div></div><div class="upload-label" data-ng-if="!modal.hasAttemptedLIApply"><span class="field-label">{{ \'modal.resumeFilePlaceholder\' | i18n }} <a data-ng-click="modal.showTooltip(0)"><i class="bhi-question"></i></a></span> <span class="error" data-ng-show="!applyForm.$submitted && modal.resumeUploadErrorMessage">{{ modal.resumeUploadErrorMessage }}</span> <span class="error" data-ng-show="applyForm.$submitted && !modal.ApplyService.form.resumeInfo">{{ \'modal.resumeValidation\' | i18n }}</span><div class="clearfix"></div></div><div class="form-field upload-container needsclick" data-ngf-select="" data-ng-model="modal.ApplyService.form.resumeInfo" data-ngf-max-size="modal.configuration.maxUploadSize" data-ngf-multiple="false" data-ngf-accept="applyForm.$submitted=false; modal.validateResume($file);" data-ng-if="!modal.hasAttemptedLIApply"><i data-ng-show="!modal.ApplyService.form.resumeInfo.name" class="bhi-publish"></i> <i data-ng-show="modal.ApplyService.form.resumeInfo.name" class="bhi-resume"></i> <span class="upload-text" data-ng-show="!modal.ApplyService.form.resumeInfo.name">{{ \'modal.uploadResumeFile\' | i18n }}</span> <span class="upload-text" data-ng-show="modal.ApplyService.form.resumeInfo.name">{{ modal.ApplyService.form.resumeInfo.name }}</span></div><span class="error submit-error" data-ng-if="!modal.isSubmitting && modal.ApplyService.ajaxError"><i class="bhi-caution"></i> <span>{{ modal.ApplyService.ajaxError }}</span></span><div id="eeoc-fields"><div data-ng-show="modal.EeocService.isGenderRaceEthnicityEnabled()"><div class="eeoc-label"><span class="eeoc-label-header"><h4>{{ \'eeoc.genderRaceEthnicityHeader\' | i18n }} <a data-ng-click="modal.showTooltip(1)"><i class="bhi-question"></i></a></h4></span></div><div class="form-field"><div class="input eeoc"><label for="eeoc-gender"><span class="required">*</span> {{ \'eeoc.genderLabel\' | i18n }}</label><select id="eeoc-gender" data-ng-model="modal.ApplyService.form.gender" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled()"><option value="M">{{ \'eeoc.genderMale\' | i18n }}</option><option value="F">{{ \'eeoc.genderFemale\' | i18n }}</option><option value="D">{{ \'eeoc.genderNonIdent\' | i18n }}</option></select></div></div><div class="form-field"><div class="input eeoc"><label for="eeoc-ethnicity"><span class="required">*</span> {{ \'eeoc.raceEthnicityLabel\' | i18n }} <a data-ng-click="modal.showTooltip(2)"><i class="bhi-question"></i></a></label><fieldset id="eeoc-ethnicity" class="checkboxgroup"><div class="eeoc-checkbox"><input id="eeoc-eth-HL" type="checkbox" value="HL" data-ng-model="modal.EeocService.selectedEthnicities[\'HL\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-HL">{{ \'eeoc.raceEthnicityHL\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-WH" type="checkbox" value="WH" data-ng-model="modal.EeocService.selectedEthnicities[\'WH\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-WH">{{ \'eeoc.raceEthnicityWH\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-BL" type="checkbox" value="BL" data-ng-model="modal.EeocService.selectedEthnicities[\'BL\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-BL">{{ \'eeoc.raceEthnicityBL\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-AS" type="checkbox" value="AS" data-ng-model="modal.EeocService.selectedEthnicities[\'AS\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-AS">{{ \'eeoc.raceEthnicityAS\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-NP" type="checkbox" value="NP" data-ng-model="modal.EeocService.selectedEthnicities[\'NP\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-NP">{{ \'eeoc.raceEthnicityNP\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-IA" type="checkbox" value="IA" data-ng-model="modal.EeocService.selectedEthnicities[\'IA\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-IA">{{ \'eeoc.raceEthnicityIA\' | i18n }}</label></div><div class="eeoc-checkbox"><input id="eeoc-eth-DN" type="checkbox" value="DN" data-ng-model="modal.EeocService.selectedEthnicities[\'DN\']" data-ng-required="modal.EeocService.isGenderRaceEthnicityEnabled() && !modal.EeocService.isEthnicityChecked()" data-ng-click="modal.ApplyService.form.ethnicity = modal.EeocService.getCheckedEthnicities()"><label for="eeoc-eth-DN">{{ \'eeoc.raceEthnicityDN\' | i18n }}</label></div></fieldset></div></div></div><div data-ng-show="modal.EeocService.isVeteranEnabled()"><div class="eeoc-label"><span class="eeoc-label-header"><h4>{{ \'eeoc.veteranHeader\' | i18n }} <a data-ng-click="modal.showTooltip(3)"><i class="bhi-question"></i></a></h4></span></div><div class="form-field"><div class="input eeoc"><label for="eeoc-veteran"><span class="required">*</span> {{ \'eeoc.veteranLabel\' | i18n }}</label><select id="eeoc-veteran" data-ng-model="modal.ApplyService.form.veteran" data-ng-required="modal.EeocService.isVeteranEnabled()"><option value="P">{{ \'eeoc.veteranP\' | i18n }}</option><option value="V">{{ \'eeoc.veteranV\' | i18n }}</option><option value="N">{{ \'eeoc.veteranN\' | i18n }}</option><option value="D">{{ \'eeoc.veteranD\' | i18n }}</option></select></div></div></div><div data-ng-show="modal.EeocService.isDisabilityEnabled()"><div class="eeoc-label"><span class="eeoc-label-header"><h4>{{ \'eeoc.disabilityHeader\' | i18n }} <a data-ng-click="modal.showTooltip(4)"><i class="bhi-question"></i></a></h4></span></div><div class="form-field"><div class="input eeoc"><label for="eeoc-disability"><span class="required">*</span> {{ \'eeoc.disabilityLabel\' | i18n }}</label><select id="eeoc-disability" data-ng-model="modal.ApplyService.form.disability" data-ng-required="modal.EeocService.isDisabilityEnabled()"><option value="Y">{{ \'eeoc.disabilityY\' | i18n }}</option><option value="N">{{ \'eeoc.disabilityN\' | i18n }}</option><option value="D">{{ \'eeoc.disabilityD\' | i18n }}</option></select></div></div></div></div><div ng-show="modal.privacyConsent.consentCheckbox" class="consent-checkbox-section"><span class="required">*</span> <input id="consent-checkbox" class="consent-checkbox" type="checkbox" ng-model="modal.consentValue"> <label for="consent-checkbox" class="consent-checkbox-label">{{ \'modal.byChecking\' | i18n }} <a data-ng-click="modal.showTooltip(5)" ng-href="{{modal.privacyConsent.privacyPolicyUrl}}">{{ \'modal.privacyPolicy\' | i18n }}</a></label></div><div class="clearfix"><br></div></form></section><footer data-ng-class="{\'success\':!modal.showForm}"><button data-ng-show="modal.showForm" name="cancel" data-ng-click="modal.closeModal(applyForm)">{{ \'modal.cancelButton\' | i18n }}</button> <button data-ng-show="modal.showForm" name="submit" data-ng-click="modal.submit(applyForm)" data-ng-disabled="modal.isSubmitting || modal.disableSendButton(applyForm.$valid)" data-ng-class="{ \'disabled\': modal.disableSendButton(applyForm.$valid) }"><span data-ng-if="!modal.isSubmitting">{{ \'modal.sendButton\' | i18n }}</span> <span data-ng-if="modal.isSubmitting"><div class="loading">{{ \'modal.submittingButton\' | i18n }}<div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div></div></span></button> <button data-ng-hide="modal.showForm" name="ok" data-ng-click="modal.closeModal(applyForm)">{{ \'modal.okButton\' | i18n }}</button></footer></div></div></div>');
$templateCache.put('app/sidebar/sidebar.html','<aside class="side-bar"><header><label>{{\'sidebar.sidebarHeading\' | i18n}}</label><div class="button-container"><button data-ng-class="{\'active\': sidebar.SharedData.gridState === \'list-view\'}" data-ng-click="sidebar.switchViewStyle(\'list\');"><i class="bhi-view-list"></i></button> <button data-ng-class="{\'active\': sidebar.SharedData.gridState === \'grid-view\'}" data-ng-click="sidebar.switchViewStyle(\'grid\');"><i class="bhi-view-module"></i></button></div></header><section><div class="keyword-search"><label for="keyword"><i class="bhi-search"></i></label> <input class="search" type="text" data-ng-change="sidebar.searchOnDelay()" data-ng-model="sidebar.SearchService.searchParams.textSearch" id="keyword" name="keyword" data-i18n-attr="{placeholder: \'sidebar.sidebarSearchPlaceholder\'}"> <button class="clear-filter" data-ng-show="sidebar.SearchService.searchParams.textSearch.length" data-ng-click="sidebar.clearSearchParamsAndLoadData(\'text\');" name="clear-all"><i class="bhi-times"></i></button></div><section class="filter-section" data-ng-class="{\'active\':!sidebar.locationLimitTo}"><div class="filter-section-header"><h4>{{\'common.locationSectionHeading\' | i18n}}</h4><button class="clear-filter" data-ng-show="sidebar.SearchService.searchParams.location.length" data-ng-click="sidebar.clearSearchParamsAndLoadData(\'location\');" name="clear-all"><i class="bhi-times"></i> {{\'sidebar.clearButton\' | i18n}}</button></div><div class="filter-item slide-down-item" data-ng-repeat="location in filteredLocations = (sidebar.locations | omitFilters:\'location\':sidebar.SearchService.searchParams.location) | limitTo:sidebar.locationLimitTo | orderBy:\'location.address.city\' track by location.address.city + \',\' + location.address.state"><input type="checkbox" id="{{::location.address.city}},{{::location.address.state}}" data-ng-checked="sidebar.hasLocationFilter(location)" data-ng-click="sidebar.addOrRemoveLocation(location)"> <label for="{{::location.address.city}},{{::location.address.state}}">{{::location.address.city}},&nbsp;{{::location.address.state}}</label> <span>{{location.idCount}}</span></div><span class="show-more" data-ng-if="sidebar.locationLimitTo && filteredLocations.length > 8" data-ng-click="sidebar.updateLocationLimitTo(null)">{{\'sidebar.showMoreLabel\' | i18n}}</span> <span class="show-more" data-ng-if="!sidebar.locationLimitTo" data-ng-click="sidebar.updateLocationLimitTo(8)">{{\'sidebar.showLessLabel\' | i18n}}</span></section><section class="filter-section" data-ng-class="{\'active\':!sidebar.categoryLimitTo}"><div class="filter-section-header"><h4>{{\'common.categorySectionHeading\' | i18n}}</h4><button class="clear-filter" data-ng-show="sidebar.SearchService.searchParams.category.length" data-ng-click="sidebar.clearSearchParamsAndLoadData(\'category\');" name="clear-all"><i class="bhi-times"></i> {{\'sidebar.clearButton\' | i18n}}</button></div><div class="filter-item slide-down-item" data-ng-repeat="category in filteredCategories = (sidebar.categories | omitFilters:\'category\':sidebar.SearchService.searchParams.category) | limitTo:sidebar.categoryLimitTo track by category.publishedCategory.id"><input type="checkbox" id="{{::category.publishedCategory.id}}" data-ng-checked="sidebar.hasCategoryFilter(category)" data-ng-click="sidebar.addOrRemoveCategory(category)"> <label for="{{::category.publishedCategory.id}}">{{::category.publishedCategory.name}}</label> <span>{{category.idCount}}</span></div><span class="show-more" data-ng-if="sidebar.categoryLimitTo && filteredCategories.length > 8" data-ng-click="sidebar.updateCategoryLimitTo(null)">{{\'sidebar.showMoreLabel\' | i18n}}</span> <span class="show-more" data-ng-if="!sidebar.categoryLimitTo" data-ng-click="sidebar.updateCategoryLimitTo(8)">{{\'sidebar.showLessLabel\' | i18n}}</span></section><section class="credits"><span class="powered-by">{{\'sidebar.poweredByText\' | i18n}}</span> <a target="_blank" href="http://www.bullhorn.com/"><img class="bullhorn" src="assets/images/logo.svg"></a></section><button type="button" class="bhi-arrow-left" name="back-arrow" data-ng-click="sidebar.goBack();"></button></section></aside>');}]);